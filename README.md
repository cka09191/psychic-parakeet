# Next.js OpenAI Test App

A simple test application for trying OpenAI API with Next.js. This app demonstrates how to integrate OpenAI's GPT models into a Next.js application with a clean chat interface.

## Features

- **OpenAI Chat Integration**: Real-time chat with GPT-3.5 Turbo
- **Modern UI**: Clean and responsive chat interface built with Tailwind CSS
- **TypeScript Support**: Full type safety throughout the application
- **Next.js 14+ App Router**: Leveraging the latest Next.js features
- **Error Handling**: Comprehensive error handling and user feedback
- **Dark Mode Support**: Automatic dark mode support

## Prerequisites

- Node.js 18+ and npm
- OpenAI API key (get one from [OpenAI Platform](https://platform.openai.com/api-keys))

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/cka09191/psychic-parakeet.git
cd psychic-parakeet
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

**Important:** Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## How to Use

1. Once the app is running, you'll see a chat interface
2. Type a message in the input field at the bottom
3. Click "Send" or press Enter to send your message
4. The app will send your message to OpenAI's GPT-3.5 Turbo model
5. The AI's response will appear in the chat
6. Continue the conversation or click "Clear" to start fresh

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/           # API route for OpenAI integration
│   │       └── route.ts
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main chat interface
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── .env.local             # Environment variables (create this)
└── README.md
```

## API Endpoint

### POST /api/chat

Sends a message to OpenAI and returns the response.

**Request Body:**
```json
{
  "message": "Your message here"
}
```

**Response:**
```json
{
  "reply": "AI response",
  "model": "gpt-3.5-turbo",
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 20,
    "total_tokens": 30
  }
}
```

## Technologies Used

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **OpenAI SDK**: Official OpenAI Node.js library
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Development

### Building for Production

```bash
npm run build
```

### Running Production Build

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Configuration

You can modify the OpenAI settings in `app/api/chat/route.ts`:

- **Model**: Change `gpt-3.5-turbo` to other models like `gpt-4` (requires appropriate API access)
- **Max Tokens**: Adjust `max_tokens` to control response length
- **Temperature**: Add temperature parameter to control response creativity (0-2)

Example:
```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [...],
  max_tokens: 500,
  temperature: 0.7, // Optional: 0-2, higher = more creative
});
```

## Troubleshooting

### "OpenAI API key is not configured" error
- Make sure you've created a `.env.local` file in the root directory
- Verify that `OPENAI_API_KEY` is set correctly in the file
- Restart the development server after creating/modifying `.env.local`

### Rate limit errors
- OpenAI has rate limits based on your account tier
- Consider implementing rate limiting in your application for production use

### API errors
- Check your OpenAI API key is valid and has available credits
- Verify your internet connection
- Check the console for detailed error messages

## Security Notes

- Never expose your OpenAI API key in client-side code
- The API route (`/api/chat`) runs on the server, keeping your API key secure
- Always use environment variables for sensitive data
- Consider implementing authentication and rate limiting for production use

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [OpenAI Node.js SDK](https://github.com/openai/openai-node)

## License

This project is open source and available under the MIT License.
