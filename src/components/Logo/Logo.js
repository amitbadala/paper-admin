import "./logo.scss";
import abLogo from "assets/img/ab_logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="medium-heading logo-text">
        <img width={60} height={42} src={abLogo} alt="amitbadala" />
      </div>
    </div>
  );
};

export default Logo;
