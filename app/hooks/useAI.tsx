import { useContext } from 'react';
import { AIProviderContext, AIProviderContextProps } from '../providers/AIProvider';

export const useAI = (): AIProviderContextProps => {
  const context = useContext(AIProviderContext);
  if (!context) throw new Error('useAI must be used within an AIProvider');
  return context;
};
