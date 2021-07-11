import axios from "axios";

export const sendUserAction = (actionName) => {
  console.log(actionName);
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/userActions`, {
    action: actionName,
  });
};

export const sendOpenedArticle = (article) => {
  console.log(article);
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/clickedArticle`, {
    articleDetails: article,
  });
};
