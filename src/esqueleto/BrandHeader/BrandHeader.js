import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";


function BrandHeader({ setType }){
  let dummy = [
    { label: "Inicio", uri: "/index" },
    { label: "Conócenos", uri: "/Meet"},
  {label: "Contáctanos", uri: "/Contact" },
  {label: "Agregar Productos", uri: "/Add" }
  ];
  let dummy2 = [
    { label: "Relojes", uri: "/Relojes" },
    { label: "Pulseras", uri: "/Pulseras"},
  {label: "Collares", uri: "/Collares" }
  ];
  return (
    <header className="menu bg-white shadow-md text-lg py-0 text-black">
      <Brand title="Girly HN"></Brand>
      <nav className="border border-gray-600">
      <NavBar dummyData={dummy} fashon="inline-flex list-none items-center my-0"></NavBar>
      <ul className="inline-flex hover:bg-gray-100 ">
        <li className="puerta relative z-50">Catálogo
          <ul className="submenu absolute bg-white">
            <li className="puerta1 hover:bg-gray-100 px-4 py-2 relative">Pandora <NavBar dummyData={dummy2} fashon="submenu1 absolute posa"></NavBar></li>
            <li className="puerta2 hover:bg-gray-100 px-4 py-2 relative">Rolex <NavBar dummyData={dummy2} fashon="submenu2 absolute posa"></NavBar></li>
            <li className="puerta3 hover:bg-gray-100 px-4 py-2 relative">Casio <NavBar dummyData={dummy2} fashon="submenu3 absolute posa"></NavBar></li>
          </ul>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default BrandHeader;
