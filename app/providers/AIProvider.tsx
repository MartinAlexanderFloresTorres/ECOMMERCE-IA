import { createContext, ReactNode, useState } from 'react';
import { OpenAIChatModelId } from '@ai-sdk/openai/internal';
import { openAIChatModels } from '../constants';

export interface AIProviderContextProps {
  openAIKey: string;
  setOpenAIKey: (key: string) => void;
  openAIModel: OpenAIChatModelId;
  setOpenAIModel: (model: OpenAIChatModelId) => void;
}

export const AIProviderContext = createContext<AIProviderContextProps>({} as AIProviderContextProps);

export const AIProvider = ({ children }: { children: ReactNode }) => {
  const [openAIKey, setOpenAIKey] = useState<string>('');
  const [openAIModel, setOpenAIModel] = useState<OpenAIChatModelId>(openAIChatModels['gpt-3.5-turbo']);

  return <AIProviderContext.Provider value={{ openAIKey, setOpenAIKey, openAIModel, setOpenAIModel }}>{children}</AIProviderContext.Provider>;
};
