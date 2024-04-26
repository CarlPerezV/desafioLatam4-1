import { Badge } from "react-bootstrap";

const Tags = ({ variante, raza }) => {
  return (
    <Badge pill bg={variante}>
      {raza}
    </Badge>
  );
};

export default Tags;
