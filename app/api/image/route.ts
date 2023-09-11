import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(request: Request) {
    // if (!req.body.prompt) return new NextResponse("Pass in prompt field for image generation", { status: 400 });

    try {
        // const { prompt } = await request.json();

        // console.log("PROMPT BEFORE =>>> " + "wow");

        // if (!prompt) return new NextResponse("Pass in prompt field for image generation", { status: 400 });

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    
        // console.log("PROMPT" + prompt);
    
        const response = await openai.images.generate({
            prompt: "Christiano Ronaldo futuristic",
            n: 1,
            size: "1024x1024",
        });
    
        if (!response.data) throw new Error('Unable to get image');
        console.log('received url ' + response.data[0].url);
    
        return NextResponse.json({imageUrl: response.data[0].url})
    } catch (error) {
        console.log("SOME ERROR")
        return new NextResponse("Internal Error", { status: 500 });
    }
}