import { GoogleGenerativeAI } from '@google/generative-ai';

//comment add
const genAI = new GoogleGenerativeAI('YOUR_API_KEY');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export { genAI, model };
