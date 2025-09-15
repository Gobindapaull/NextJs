require("dotenv").config();
const { generateText } = require("ai");
const { createOpenAI } = require("@ai-sdk/openai");


const myOpenAI = createOpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY
});

async function main() {
  const { text } = await generateText({
    model: myOpenAI("gpt-4.1-mini", ),
    prompt: "Top 5 youtube in the world"
  });

  console.table(text);
}

main();
