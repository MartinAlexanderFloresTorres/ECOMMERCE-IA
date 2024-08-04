export interface Language {
  languageName: string;
  shortCode: string;
  fullLocaleCode: string;
}
[];

export interface SelectOption {
  value: string;
  label: string;
}

export interface Fields {
  keywords: string;
  specialInstructions: string;
  tone: SelectOption | null | undefined;
  language: Language | null | undefined;
}
