import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { apiKey, model, specialInstructions, keywords, tone, language } = (await req.json()) as { apiKey: string; model: string; keywords: string; specialInstructions: string; tone: string; language: string };

  const openai = createOpenAI({
    compatibility: 'strict',
    apiKey: apiKey,
  });

  const promptSystem = `
  You are a text generation AI specifically designed to create product descriptions for an e-commerce platform. Your task is to generate a detailed and engaging product description based on the following instructions:
  1. **Keywords**: ${keywords}
  2. **Special Instructions**: ${specialInstructions ? specialInstructions : 'No special instructions'}
  3. **Tone**: ${tone}
  4. **Language**: ${language}

  Generate only the product description content. Do not include any explanations, introductions, or additional text. Ensure that the response is in the specified language (${language}) and follows the specified tone (${tone}) exactly.

  # Example 1:
  Keywords: Summer dress, floral print, lightweight
  Special Instructions: Add emojis for a fun and Bold tone
  Tone: Bold
  Language: Spanish
  Response description: Añade un toque de verano a tu armario con este vestido de verano con estampado floral. Ligero y cómodo, este vestido es perfecto para los días soleados y las noches cálidas. ¡Luce a la moda y fresca con este vestido de

  # Example 2:
  Keywords: Pantalones de mezclilla, ajuste relajado, estilo vintage, color azul
  Special Instructions: Incluye palabras de moda para un tono Expert
  Tone: Expert
  Language: Spanish
  Response description: Estos pantalones de mezclilla de ajuste relajado son una adición esencial a tu armario. Con un estilo vintage y un color azul clásico, estos pantalones son perfectos para cualquier ocasión. ¡Luce a la moda y elegante con estos pantalones de mezclilla!
  `;

  const promptUser = `
  Keywords: ${keywords}
  Special Instructions: ${specialInstructions ? specialInstructions : 'No special instructions'}
  Tone: ${tone}
  Language: ${language}
  `;

  const result = await streamText({
    model: openai(model),
    system: promptSystem,
    prompt: promptUser,
    temperature: 0.5,
  });

  return result.toDataStreamResponse();
}
