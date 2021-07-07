import axios from "axios";

export const sendUserAction = (actionName) => {
  console.log(actionName);
  axios.post("http://localhost:9999/userActions", { action: actionName });
};

export const sendOpenedArticle = (article) => {
  console.log(article);
  axios.post("http://localhost:9999/userActions", { articleDetails: article });
};
