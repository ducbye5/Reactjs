import axios from "redaxios";

const get = async (url: string | undefined) => {
  if (!url) {
    throw new Error("URL is required");
  }

  return await axios
    .get(url)
    .then((r) => r.data)
    .catch((err) => {
      console.log(err);
    });
};

const getListWithPaginate = async (url: string | undefined) => {
  if (!url) {
    throw new Error("URL is required");
  }

  return await axios
    .get(url)
    .then((r) => r.data.slice(0, 10))
    .catch((err) => {
      console.log(err);
    });
};

export const callAPI = {
  get,
  getListWithPaginate,
};
