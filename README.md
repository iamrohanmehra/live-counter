# Live Counter

A real-time live users counter built with Next.js and Supabase. This project displays the number of users currently online in a beautiful, minimal overlay that can be easily integrated into any page.

## Features

- 🌐 Real-time live user counting
- 🎨 Beautiful minimal design with dark mode support
- 📱 Responsive overlay component
- ⚡ Fast and lightweight
- 🔄 Automatic real-time updates
- 🎯 Easy integration on any page

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Supabase account and project

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd live-counter
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure your Supabase project:
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Create a new project or use an existing one
   - Go to Settings > API
   - Copy your Project URL and anon/public key
   - Update your `.env.local` file with these values:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:

```bash
npm run dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Adding to Any Page

Simply import and add the `LiveUsers` component to any page:

```jsx
import LiveUsers from "@/components/LiveUsers";

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <LiveUsers />
    </div>
  );
}
```

The component will automatically appear as a floating overlay in the top-right corner of the page.

## How It Works

The live counter uses Supabase's real-time presence feature to track users:

1. Each user gets a unique session ID when they visit the page
2. The component subscribes to presence events from Supabase
3. Real-time updates show the current number of online users
4. Users are automatically removed when they leave the page

## Environment Variables

| Variable                        | Description                 | Required |
| ------------------------------- | --------------------------- | -------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase project URL   | Yes      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes      |

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend and real-time features
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
