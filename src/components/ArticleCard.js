import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { sendOpenedArticle } from "../requests/userActions";

const ArticleCard = (props) => {
  return (
    <Card
      style={{ width: "24rem", minWidth: "12rem" }}
      onClick={() => sendOpenedArticle(props)}
    >
      <Link to={`/article/${props.title}`}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.publishedAt}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default ArticleCard;
