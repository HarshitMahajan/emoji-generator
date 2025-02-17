"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Download, Heart } from "lucide-react";
import Image from "next/image";

interface EmojiResult {
  id: string;
  url: string;
  prompt: string;
  likes: number;
}

export function EmojiGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<EmojiResult[]>([]);

  const handleGenerate = async () => {
    if (!prompt) return;
    
    setIsGenerating(true);
    try {
      // TODO: Implement API call to Replicate
      // For now, just simulate the API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newEmoji: EmojiResult = {
        id: Date.now().toString(),
        url: "https://placeholder.com/150x150",
        prompt,
        likes: 0
      };
      
      setResults(prev => [newEmoji, ...prev]);
    } catch (error) {
      console.error("Failed to generate emoji:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <Input
          placeholder="Type to generate an emoji..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1"
        />
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating || !prompt}
        >
          {isGenerating ? "Generating..." : "Generate"}
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {results.map((emoji) => (
          <Card key={emoji.id} className="relative group">
            <div className="aspect-square relative">
              <Image
                src={emoji.url}
                alt={emoji.prompt}
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="icon" variant="ghost" className="text-white">
                  <Download className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 