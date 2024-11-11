import Logo from "../assets/logo.webp";

function Navbar() {
  return (
    <div className="Navbar flex ">
      <img src={Logo} alt="game hub logo" className="w-16 h-16" />
      <div>navbar</div>
    </div>
  );
}

export default Navbar;
