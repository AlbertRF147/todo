import type { VercelRequest, VercelResponse } from "@vercel/node";
const API_KEY = process.env.CHIMERA_API_KEY;
const API_BASE = "https://chimeragpt.adventblocks.cc/api/v1/chat/completions";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const completion = await getCompletion();
  response.status(200).json({ idea: completion });
}

async function getCompletion() {
  try {
    const buff = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "user", content: "Give me a task to put in a todo list" },
        ],
        allow_fallback: true,
      }),
    });
    const data = await buff.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
}
