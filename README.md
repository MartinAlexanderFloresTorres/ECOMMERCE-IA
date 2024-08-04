## ECOMMERCE AI

This project provides an interface to generate product descriptions using AI. It supports multiple languages and allows customization of tone and special instructions.

## Features

- **Generate AI Descriptions:** Automatically generate product descriptions using AI.
- **Language Support:** Supports multiple languages for description generation.
- **Tone Customization:** Choose from various tones like Expert, Bold, Playful, Sophisticated, Persuasive, and Encouraging.
- **Special Instructions:** Add specific instructions to customize the generated descriptions.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MartinAlexanderFloresTorres/ECOMMERCE-IA
    ```
2. Navigate to the project directory:
    ```bash
    cd ecommerce-ai
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm run dev
    ```
5. Open the URL provided in the terminal:
    [http://localhost:3000](http://localhost:3000)

## Requirements

1. Obtain an API key from https://platform.openai.com/api-keys

## Components

### IAGenerate Component

The `IAGenerate` component provides the interface for generating product descriptions using AI.

#### Props

- `onConserve: (text: string) => void`: Callback function to handle the conserved text.

#### Usage

```tsx
<IAGenerate onConserve={(text) => console.log('Conserved Text:', text)} />;
```

## Contribución

Contributions are welcome! If you would like to collaborate, please follow the guidelines for contributing.


## Contacto

For questions or comments, you can contact us at [martinalexanderflorestorres@gmail.com](mailto:martinalexanderflorestorres@gmail.com).
# ECOMMERCE-IA