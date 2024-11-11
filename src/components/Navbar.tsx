import Logo from "../assets/logo.webp";
import SwitchThemeBtn from "./SwitchThemeBtn"

function Navbar() {
  return (
    <div className="Navbar flex ">
      <img src={Logo} alt="game hub logo" className="w-16 h-16" />
      <div>navbar</div>
      <SwitchThemeBtn />
    </div>
  );
}

export default Navbar;
