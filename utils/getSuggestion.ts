import { BoredAPIResponse } from "@/types";
import axios from "axios";

const BORED_API_ENDPOINT = "https://bored-api.appbrewery.com/random";
// we'll call the Bored API endpoint to receive fun suggestions for tasks
async function getSuggestion(): Promise<BoredAPIResponse> {
  const response = await axios.get<BoredAPIResponse>(BORED_API_ENDPOINT);
  const data = response.data;
  console.log("API responded with ", data);
  return data;
};

export default getSuggestion;