import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, prompt } = await request.json();

    if (!imageUrl || !prompt) {
      return NextResponse.json(
        { error: 'Image URL and prompt are required' },
        { status: 400 }
      );
    }

    // Initialize OpenAI client inside the request handler to ensure env vars are loaded
    const apiKey = process.env.OPENROUTER_API_KEY;

    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey?.length);
    console.log('API Key prefix:', apiKey?.substring(0, 12));

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Please set OPENROUTER_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    if (!apiKey.startsWith('sk-or-v1-')) {
      return NextResponse.json(
        { error: 'Invalid API key format. OpenRouter API key must start with "sk-or-v1-"' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: apiKey,
      defaultHeaders: {
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": process.env.NEXT_PUBLIC_SITE_NAME || "Nano Banana",
      },
    });

    console.log('Making request to OpenRouter for image generation...');

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-image-preview",
      modalities: ["image", "text"], // Enable image generation
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
    } as any); // Use 'as any' because modalities might not be in TypeScript types

    console.log('Received response from OpenRouter');

    // Extract generated images from response
    const message = completion.choices[0]?.message;
    const responseText = message?.content || '';
    const rawImages = (message as any)?.images || [];

    // Extract image URLs from the response structure
    const generatedImages = rawImages.map((img: any) => {
      if (typeof img === 'string') {
        return img; // Already a URL string
      } else if (img?.image_url?.url) {
        return img.image_url.url; // Extract URL from object
      }
      return null;
    }).filter(Boolean);

    console.log('Generated images count:', generatedImages.length);
    console.log('Full message object:', JSON.stringify(message, null, 2));

    if (generatedImages.length > 0) {
      console.log('First image data type:', typeof generatedImages[0]);
      console.log('First image sample:', generatedImages[0]?.substring?.(0, 100));
    }

    return NextResponse.json({
      success: true,
      result: responseText,
      images: generatedImages, // Array of base64 image URLs
      message: message,
    });
  } catch (error: any) {
    console.error('Error generating image:', error);

    // Check if it's an authentication error
    if (error.status === 401 || error.message?.includes('401')) {
      return NextResponse.json(
        {
          error: 'Authentication failed. Please check your OpenRouter API key in Vercel environment variables.',
          details: error.message
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        error: error.message || 'Failed to generate image',
        details: error.response?.data || error.toString()
      },
      { status: 500 }
    );
  }
}
