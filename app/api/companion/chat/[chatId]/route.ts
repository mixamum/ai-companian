import { StreamingTextResponse, LangChainStream } from "ai";
import { auth, currentUser } from "@clerk/nextjs";
import { CallbackManager } from "langchain/callbacks"
import { Replicate } from "langchain/llms/replicate"
import { NextResponse } from "next/server";

import { MemoryManager } from "@/lib/memory";
import { rateLimit } from "@/lib/rate-limit";
import prismadb from "@/lib/prismadb";

export async function POST(
    request: Request,
    { params }: { params: { chatId: string } }
) {
    try {

    } catch (error) {
        console.log("[CHAT_POST]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}