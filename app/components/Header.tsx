'use client';
import { useDebouncedCallback } from 'use-debounce';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { openAIChatModels } from '../constants';
import { useAI } from '../hooks/useAI';
import { stylesSelect } from '../constants/stylesSelect';

export default function Header() {
  const { openAIKey, openAIModel, setOpenAIKey, setOpenAIModel } = useAI();

  const debounced = useDebouncedCallback((value) => {
    toast.success('Updated API Key');
    setOpenAIKey(value);
  }, 500);

  const handleModelChange = (selected: { value: string } | null) => {
    if (selected) {
      setOpenAIModel(selected.value);
      toast.success(`Selected model: ${selected.value}`);
    } else {
      toast.dismiss();
    }
  };

  return (
    <section className="w-full pt-20 pb-8 px-10 header">
      <div className="container mx-auto flex flex-col gap-10 justify-between min-h-[440px]">
        <div className="flex-1">
          <h1 className="font-extrabold tracking-tighter text-sky-400 drop-shadow-xl text-center">
            <span className="text-4xl sm:text-5xl md:text-6xl">ECOMMERCE</span>
            <span className="text-6xl sm:text-7xl md:text-8xl"> IA</span>
          </h1>
          <p className="max-w-[700px] font-semibold drop-shadow-xl mx-auto mt-6 text-xl sm:text-2xl text-center text-sky-50">Generate product descriptions, question answers, and more with AI</p>
          <div className="max-w-[700px] mx-auto flex gap-4 items-center justify-center mt-10 flex-col">
            <input
              type="text"
              className={`w-full px-4 py-2 border bg-[#1a1b26] placeholder:text-[#52556a] text-[#e2e5ff] border-[#373947] font-semibold rounded-md outline focus:outline-2 outline-sky-800 focus:outline-sky-400`}
              placeholder="Enter your api key https://platform.openai.com/api-keys"
              onChange={({ target }) => debounced(target.value)}
              defaultValue={openAIKey}
            />
            <Select
              className="min-w-60 font-semibold text-gray-600"
              value={{ value: openAIModel, label: openAIModel }}
              options={Object.keys(openAIChatModels).map((model) => ({ value: model, label: model }))}
              placeholder="Model"
              noOptionsMessage={() => 'No models found'}
              onChange={handleModelChange}
              isSearchable
              styles={stylesSelect}
            />
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center w-full">
          <a className="flex items-center gap-2 bg-[#252736] text-neutral-300 px-3 py-1 rounded-full" href="https://sdk.vercel.ai" target="_blank" rel="noreferrer noopener">
            <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
              <path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path>
              <path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path>
              <path
                d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
                fill="currentColor"
              ></path>
            </svg>

            <div className="text-lg font-bold">
              AI <span className="hidden min-[385px]:inline">SDK</span>
            </div>
          </a>

          <a className="flex items-center gap-2 bg-[#252736] text-neutral-300 px-3 py-1 rounded-full" href="https://github.com/MartinAlexanderFloresTorres" target="_blank" rel="noreferrer noopener">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.15269 0.792969C7.17392 0.793051 5.25974 1.49723 3.75266 2.77951C2.24558 4.06179 1.24394 5.83849 0.92697 7.7917C0.609997 9.74492 0.998373 11.7472 2.02261 13.4403C3.04684 15.1333 4.6401 16.4067 6.51729 17.0325C6.93396 17.1055 7.09021 16.8555 7.09021 16.6367C7.09021 16.4388 7.07978 15.7825 7.07978 15.0846C4.98603 15.47 4.44436 14.5742 4.27769 14.1055C4.09276 13.6496 3.79959 13.2456 3.42353 12.9284C3.13186 12.7721 2.71519 12.3867 3.4131 12.3763C3.67959 12.4052 3.93518 12.498 4.15822 12.6467C4.38125 12.7953 4.56516 12.9956 4.69436 13.2305C4.80833 13.4352 4.96159 13.6155 5.14535 13.7609C5.32911 13.9063 5.53975 14.014 5.76522 14.0779C5.99068 14.1418 6.22653 14.1605 6.45926 14.1331C6.69198 14.1056 6.917 14.0325 7.12143 13.918C7.1575 13.4943 7.34631 13.0982 7.65269 12.8034C5.79853 12.5951 3.86103 11.8763 3.86103 8.68883C3.84931 7.86062 4.15493 7.05931 4.71519 6.44924C4.46043 5.72943 4.49024 4.93948 4.79853 4.24091C4.79853 4.24091 5.49642 4.02215 7.09019 5.09508C8.45376 4.72005 9.89328 4.72005 11.2569 5.09508C12.8506 4.01174 13.5485 4.24091 13.5485 4.24091C13.8569 4.93947 13.8867 5.72943 13.6319 6.44924C14.1938 7.05826 14.4997 7.86027 14.486 8.68883C14.486 11.8867 12.5381 12.5951 10.6839 12.8034C10.8828 13.005 11.036 13.247 11.133 13.513C11.2301 13.779 11.2688 14.0628 11.2464 14.3451C11.2464 15.4597 11.236 16.3555 11.236 16.6367C11.236 16.8555 11.3923 17.1159 11.8089 17.0326C13.6828 16.4016 15.2715 15.1253 16.2914 13.4313C17.3112 11.7374 17.6959 9.73616 17.3768 7.78483C17.0576 5.83351 16.0553 4.05911 14.5489 2.77839C13.0425 1.49768 11.1299 0.793998 9.15269 0.792969Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-lg font-bold">
              MARTIN <span className="hidden min-[385px]:inline">FLORES</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
