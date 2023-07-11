import { Button as StrapButton } from "reactstrap";
import "./button.scss";

const Button = ({ type, ...rest }) => {
  return <StrapButton {...rest} />;
};

export default Button;
