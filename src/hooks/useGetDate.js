import baseurl from "../api/baseUrl";

export const UseGetDate = async (url, params) => {
  const res = baseurl.get(url, params);

  return res;
};
