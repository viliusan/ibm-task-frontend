import { useState } from "react";

const useArticle = () => {
  const [article, setArticle] = useState();

  return [article, setArticle];
};

export default useArticle;
