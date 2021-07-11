import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { sendOpenedArticle } from "../requests/userActions";
import "../styles/ArticleCard.css";

const ArticleCard = (props) => {
  const onClick = () => {
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
        to={`/article/${props.title}`}
        style={{ textDecoration: "none" }}
      >
        <Card.Img variant="top" src={props.img} style={{ maxHeight: 200 }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="descriptionText">{props.description}</Card.Text>
          <Card.Text>
            {moment(props.publishedAt).format("MM/DD/YYYY")}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ArticleCard;
