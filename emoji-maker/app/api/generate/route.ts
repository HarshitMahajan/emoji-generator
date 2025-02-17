import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const output = await replicate.run(
      "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
      {
        input: {
          prompt,
          apply_watermark: false,
        },
      }
    );

    return NextResponse.json({ output });
  } catch (error) {
    console.error("Error generating emoji:", error);
    return NextResponse.json(
      { error: "Failed to generate emoji" },
      { status: 500 }
    );
  }
} 