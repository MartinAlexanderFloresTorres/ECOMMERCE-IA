'use client';
import { useState } from 'react';
import { useCompletion } from 'ai/react';
import Select from 'react-select';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import useBrowserLanguage from '@/app/hooks/useBrowserLanguage';
import Modal from '../Modal';
import Button from '../Button';
import { BotIcon } from '../icons';
import { languageOptions, toneOptions } from '@/app/constants';
import { useAI } from '@/app/hooks/useAI';
import ResultSkeleton from '../ResultSkeleton';
import { Fields } from '@/app/interfaces';
import { stylesSelect } from '@/app/constants/stylesSelect';

interface IAGenerateProps {
  onConserve: (text: string) => void;
}

export default function IAGenerate({ onConserve }: IAGenerateProps) {
  const [showModal, setShowModal] = useState(false);
  const languageUser = useBrowserLanguage();
  const [fields, setFields] = useState<Fields>({ keywords: '', specialInstructions: '', tone: toneOptions[0], language: languageOptions.find((option) => option.shortCode === languageUser) });
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const { completion, isLoading, complete, setCompletion } = useCompletion({ onResponse: () => setIsRequesting(false), onError: () => toast.error('Could not complete the translation. Remember to add your OpenAI API Key in the application settings.') });
  const { openAIKey, openAIModel } = useAI();
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleGenerate = async () => {
    if (!fields.keywords) {
      toast.error('Please add some keywords to generate the description.');
      return;
    }

    if (!fields.language) {
      toast.error('Please select a language.');
      return;
    }

    if (!fields.tone) {
      toast.error('Please select a tone.');
      return;
    }

    setIsRequesting(true);
    complete(fields.specialInstructions, {
      body: {
        keywords: fields.keywords,
        specialInstructions: fields.specialInstructions,
        tone: fields.tone.value,
        language: fields.language.languageName,
        model: openAIModel,
        apiKey: openAIKey,
      } as { apiKey: string; model: string; keywords: string; specialInstructions: string; tone: string; language: string },
    });
  };

  const clearText = () => {
    setFields({
      ...fields,
      keywords: '',
      specialInstructions: '',
    });
    setCompletion('');
  };

  return (
    <div>
      <Button variant="outline" className="mt-2  ml-auto" onClick={openModal}>
        <BotIcon className="mr-2 h-4 w-4" />
        Generate with AI
      </Button>

      <Modal onClose={closeModal} className={twMerge(showModal ? 'animate-fadein flex' : 'hidden')}>
        <div className="w-full">
          <h2 className="text-lg font-bold mb-4">Generate product description</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-neutral-300">
                Functions and keywords
              </label>
              <textarea
                id="keywords"
                className="mt-1 block w-full min-h-16 max-h-40 p-2 border bg-[#1a1b26] placeholder:text-[#52556a] text-[#e2e5ff] border-[#373947] rounded-md shadow-sm outline-none"
                rows={3}
                placeholder="E.g. Cotton and lycra set, size x, comfortable, stylish, versatile, men"
                value={fields.keywords}
                onChange={(e) => setFields({ ...fields, keywords: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="special-instructions" className="block text-sm font-medium text-neutral-300">
                Special instructions (optional)
              </label>
              <textarea
                id="special-instructions"
                className="mt-1 block w-full min-h-9 max-h-40 p-2 border bg-[#1a1b26] placeholder:text-[#52556a] text-[#e2e5ff] border-[#373947] rounded-md shadow-sm outline-none"
                rows={1}
                placeholder="E.g. Do not include emojis, do not include uppercase"
                value={fields.specialInstructions}
                onChange={(e) => setFields({ ...fields, specialInstructions: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1">
                <label htmlFor="tone" className="block text-sm font-medium text-neutral-300">
                  Tone
                </label>
                <Select id="tone" className="mt-1 block w-full" options={toneOptions} onChange={(option) => setFields({ ...fields, tone: option })} value={fields.tone} styles={stylesSelect} isSearchable={false} />
              </div>

              <div className="flex-1">
                <label htmlFor="language" className="block text-sm font-medium text-neutral-300">
                  Language
                </label>
                <Select
                  id="language"
                  className="mt-1 block w-full"
                  options={languageOptions}
                  getOptionLabel={(option) => option.languageName}
                  getOptionValue={(option) => option.fullLocaleCode}
                  value={fields.language}
                  onChange={(option) => setFields({ ...fields, language: option })}
                  isSearchable={false}
                  styles={stylesSelect}
                />
              </div>
            </div>

            <div className="pt-4">
              {isRequesting && <ResultSkeleton />}
              {completion && <div className="p-4 bg-sky-100 bg-opacity-10 text-sky-200 rounded-md">{completion}</div>}
              <div className="flex items-center justify-between gap-3 mt-4">
                <Button variant="solid" onClick={handleGenerate} disabled={isLoading || isRequesting}>
                  <BotIcon className="mr-2 h-4 w-4" />
                  Generate
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    onConserve(completion);
                    clearText();
                    closeModal();
                  }}
                  disabled={isRequesting || isLoading || !completion}
                >
                  Conserve
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
