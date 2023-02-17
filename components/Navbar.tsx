import Link from "next/link";
import { StyledNav } from "../src/styles/styledComponents/StyledNav";
import { useSwitch } from "../helpers/useSwitch";
import SearchIcon from "@mui/icons-material/Search";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const { switchToggle, toggle } = useSwitch();
  return (
    <StyledNav show={toggle}>
      <div className="burger" onClick={() => switchToggle()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="logo">
        <h2>HomeLands</h2>
      </div>
      <div className="nav">
        <div className="links">
          <Link href="/">Forside</Link>
          <Link href="/bolig">Bolig til salg</Link>
          {status == "authenticated" ? <Link href="/api/auth/signout">Sign Out</Link> : <Link href="/login">Login</Link>}
          <div className="search">
            <input type="text" placeholder="Indtast søgeord" />
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="triangle1" />
      <div className="triangle2" />
    </StyledNav>
  );
};

export default Navbar;
