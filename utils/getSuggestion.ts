import { BoredAPIResponse } from "@/types";

const BORED_API_ENDPOINT = "https://bored-api.appbrewery.com/random";
// we'll call the Bored API endpoint to receive fun suggestions for tasks
async function getSuggestion(): Promise<BoredAPIResponse> {
  const response = await fetch(BORED_API_ENDPOINT);
  if (!response.ok) {
    throw Error();
  }
  const data = await response.json();
  console.log("API responded with ", data);
  return data;
};

export default getSuggestion;