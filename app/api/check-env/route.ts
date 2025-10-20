import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.OPENROUTER_API_KEY;

  return NextResponse.json({
    hasApiKey: !!apiKey,
    keyLength: apiKey?.length || 0,
    keyPrefix: apiKey?.substring(0, 12) || 'none',
    allEnvKeys: Object.keys(process.env).filter(key =>
      key.includes('OPENROUTER') || key.includes('NEXT_PUBLIC')
    ),
  });
}
