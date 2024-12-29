import { backendBaseUrl } from "shared/config";

export const API = () => {
  return {
    GET: async ({ ...params }) => {
      const response = await fetch(`${backendBaseUrl}/${params.data}`);
      return response.json();
    },
  };
};
