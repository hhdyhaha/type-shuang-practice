import { createDeepSeek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

export async function POST(req: Request) {
    const deepseek = createDeepSeek({
        apiKey: process.env.DEEPSEEK_API_KEY ?? '',
      });
  const { messages } = await req.json();

  const result = streamText({
    model: deepseek('deepseek-chat'),
    messages,
  });

  return result.toDataStreamResponse({
    sendReasoning: true,
  });
}