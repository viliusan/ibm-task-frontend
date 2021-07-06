import axios from "axios";

export const fetchApi = async () => {
  const apiKey = "d6ec65a52238e8d2bdb0e22179e2327c";

  const res = await axios
    .get(`https://gnews.io/api/v4/top-headlines?token=${apiKey}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return res;

};
