import Image from "next/image";
import { EmojiGenerator } from "@/components/emoji-generator";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <header className="w-full max-w-3xl flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          😊 Emoji maker
        </h1>
        <button className="px-4 py-2 bg-black text-white rounded-md">
          Sign in
        </button>
      </header>
      
      <main className="w-full max-w-3xl">
        <EmojiGenerator />
      </main>
    </div>
  );
}
