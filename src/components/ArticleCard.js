import Card from "react-bootstrap/Card";

const ArticleCard = (props) => {
  return (
    <Card style={{ width: "24rem", minWidth: "12rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.publishedAt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
