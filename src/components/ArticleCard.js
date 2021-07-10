import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { sendOpenedArticle } from "../requests/userActions";
import "../styles/ArticleCard.css";

const ArticleCard = (props) => {
  const onClick = () => {
    // setArticle(props);
    sendOpenedArticle(props);
    localStorage.setItem("article", JSON.stringify(props));
  };
  return (
    <Card
      className="articleCard"
      style={{ width: "24rem", minWidth: "12rem" }}
      onClick={onClick}
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to={`/article/${props}`}
        style={{ textDecoration: "none" }}
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="descriptionText">{props.description}</Card.Text>
          <Card.Text>{props.publishedAt}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ArticleCard;
