# Nano Banana - AI Image Generation App

AI-powered image generation application using Google's Gemini 2.5 Flash Image model via OpenRouter API.

## ✨ Features

- 🖼️ **Image Upload**: Drag-and-drop or click to upload images
- 🤖 **AI Image Generation**: Powered by Google Gemini 2.5 Flash Image
- 💬 **Text Prompts**: Describe your desired image modifications
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- ⚡ **Real-time Processing**: Instant image generation and display

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **Components**: shadcn/ui
- **AI API**: OpenRouter (Gemini 2.5 Flash Image)
- **SDK**: OpenAI SDK

## 📋 Prerequisites

- Node.js 18+ or pnpm
- OpenRouter API Key

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/wulijie1128-wu/nanobanana-clone.git
cd nanobanana-clone
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
# or
pnpm install
```

3. Create `.env.local` file in the root directory:
```env
OPENROUTER_API_KEY=sk-or-v1-YOUR_API_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Nano Banana
```

**⚠️ IMPORTANT**: The API key MUST include the `sk-or-v1-` prefix!

## 🎯 Usage

### Development Mode

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your GitHub repository
4. Configure Environment Variables:

```
OPENROUTER_API_KEY=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
NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
NEXT_PUBLIC_SITE_NAME=Nano Banana
```

**⚠️ Critical**: Make sure to include the full API key with `sk-or-v1-` prefix in Vercel!

5. Click "Deploy"

## 🎨 How to Use

1. **Upload an Image**
   - Click the upload area or drag & drop an image
   - Supported formats: JPG, PNG, WebP

2. **Enter a Prompt**
   - Describe what you want to generate or modify
   - Example: "把背景换成草原" (Change background to grassland)

3. **Generate**
   - Click "Generate Now" button
   - Wait for AI to process (usually 5-15 seconds)
   - View the generated result in Output Gallery

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | OpenRouter API key with `sk-or-v1-` prefix | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your site URL for OpenRouter rankings | No |
| `NEXT_PUBLIC_SITE_NAME` | Your site name for OpenRouter rankings | No |

## 🔒 Security Notes

- `.env.local` is excluded from git via `.gitignore`
- Never commit API keys to version control
- Use environment variables in production deployments

## 📂 Project Structure

```
nanobanana-clone/
├── app/
│   ├── api/generate/      # API route for image generation
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── image-upload.tsx   # Main image upload component
│   ├── header.tsx         # Header component
│   ├── hero.tsx           # Hero section
│   └── ...                # Other components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional styles
```

## 🐛 Troubleshooting

### Build Error on Vercel

If you see "An unexpected error happened when running this build":

1. Check that `OPENROUTER_API_KEY` includes the `sk-or-v1-` prefix
2. Verify all environment variables are set correctly
3. Try redeploying after updating env vars

### 401 Authentication Error

- Make sure API key starts with `sk-or-v1-`
- Verify the key is valid on [OpenRouter](https://openrouter.ai/keys)
- Check that environment variables are loaded (restart dev server)

### Image Not Displaying

- Check browser console for errors
- Verify the image URL format (should be `data:image/png;base64,...`)
- Try refreshing the page

## 📄 License

MIT License

## 👤 Author

wulijie1128-wu

## 🙏 Acknowledgments

- [Google Gemini](https://ai.google.dev/) - AI model
- [OpenRouter](https://openrouter.ai/) - API provider
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Deployment platform
