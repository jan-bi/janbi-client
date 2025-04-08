import axios from "axios";

export async function createUrl(data) {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/urls`,
    data,
  );

  return response.data;
}
