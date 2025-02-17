import axios from "redaxios";

const get = async (url: string | undefined) => {
  if (!url) {
    throw new Error("URL is required");
  }

  return await axios
    .get(url)
    .then((r) => r.data)
    .catch((err) => {});
};

const getListWithPaginate = async (url: string | undefined) => {
  if (!url) {
    throw new Error("URL is required");
  }

  return await axios.get(url).then((r) => r.data.slice(0, 10));
};

export const callAPI = {
  get,
  getListWithPaginate,
};
