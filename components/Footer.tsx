import { StyledFooter } from "../src/styles/styledComponents/StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="contact">
        <p>HomeLands</p>
        <p>
          Øster Uttrupvej 5<br /> 9000 Aalborg
        </p>
        <p>
          Email: info@homelands.dk
          <br /> Telefon: +45 1122 3344
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
