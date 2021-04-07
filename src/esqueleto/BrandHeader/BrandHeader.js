import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
function BrandHeader({ children }){
  let dummy = [
    { label: "Inicio", uri: "/" },
    { label: "Conocenos", uri: "/login"},
  {label: "Contactanos", uri: "/linguini" }
  ];
  let dummy2 = [
    { label: "Relojes", uri: "/" },
    { label: "Pulseras", uri: "/login"},
  {label: "Collares", uri: "/linguini" }
  ];
  return (
    <header className="menu bg-white shadow-md text-2xl py-0 text-black">
      <Brand title="Girly HN"></Brand>
      <nav className="border border-gray-600">
      <NavBar dummyData={dummy} fashon="inline-flex list-none items-center"></NavBar>
      <ul className="inline-flex "><li className="puerta relative">Catalogo
      <ul className="submenu absolute bg-white  ">
        <li className="puerta1 border border-gray-600">Pandora <div className="submenu1"><NavBar dummyData={dummy2}></NavBar></div></li>
      <li className="puerta2 border border-gray-600">Rolex <div className="submenu2"><NavBar dummyData={dummy2}></NavBar></div></li>
      <li className="puerta3 border border-gray-600">Casio <div className="submenu3"><NavBar dummyData={dummy2}></NavBar></div></li>
      </ul></li></ul>
      </nav>
      
      
    </header>
  );
}

export default BrandHeader;
