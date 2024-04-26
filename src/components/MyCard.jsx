import { Card } from "react-bootstrap";

import Tags from "./Tags";

const MyCard = (props) => {
  const { image, nombre, desc, raza, variante } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "12rem" }} variant="top" src={image} alt="" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Tags variante={variante} raza={raza} />
      </Card.Body>
    </Card>
  );
};

export default MyCard;
