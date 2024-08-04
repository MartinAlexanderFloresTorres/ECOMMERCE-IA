'use client';
import { useState } from 'react';
import IAGenerate from './IA/IAGenerate';

export default function Form() {
  const [value, setValue] = useState<string>('');

  return (
    <section className="p-20">
      <div className="w-full max-w-lg mx-auto space-y-4">
        <textarea className="block w-full rounded-md p-2 border bg-[#1a1b26] placeholder:text-[#52556a] text-[#e2e5ff] border-[#373947] outline-none max-h-80 min-h-60" placeholder="Enter the product description" value={value} onChange={(e) => setValue(e.target.value)} />
        <IAGenerate onConserve={(text) => setValue(text)} />
      </div>
    </section>
  );
}
