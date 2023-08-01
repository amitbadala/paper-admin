import "./logo.scss";
import abLogo from "assets/img/ab_logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="medium-heading logo-text">
        <img
          style={{
            filter: "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4274509804))",
          }}
          width={80}
          height={70}
          src={abLogo}
          alt="amitbadala"
        />
      </div>
    </div>
  );
};

export default Logo;
