import NavBar from '../NavBars/NavBar';
import Brand from './Brand';
import './BrandHeader.css';
function BrandHeader({ children }) {
  let dummy = [
    { label: 'Inicio', uri: '/' },
    { label: 'Conocenos', uri: '/Meet' },
    { label: 'Contactanos', uri: '/Contact' },
  ];
  let dummy2 = [
    { label: 'Relojes', uri: '/' },
    { label: 'Pulseras', uri: '/login' },
    { label: 'Collares', uri: '/linguini' },
  ];
  return (
    <header className="menu bg-white shadow-md text-2xl py-0 text-black">
      <Brand title="Girly HN"></Brand>
      <nav className="border border-gray-600">
        <NavBar
          dummyData={dummy}
          fashon="inline-flex list-none items-center"
        ></NavBar>
        <ul className="inline-flex ">
          <li className="puerta relative">
            Catalogo
            <ul className="submenu absolute bg-white py-4">
              <li className="puerta1 border border-gray-600 p-2 relative">
                Pandora{' '}
                <NavBar
                  dummyData={dummy2}
                  fashon="submenu1 absolute posa border border-black"
                ></NavBar>
              </li>
              <li className="puerta2 border border-gray-600 p-2 relative">
                Rolex{' '}
                <NavBar
                  dummyData={dummy2}
                  fashon="submenu2 absolute posa border border-black"
                ></NavBar>
              </li>
              <li className="puerta3 border border-gray-600 p-2 relative">
                Casio{' '}
                <NavBar
                  dummyData={dummy2}
                  fashon="submenu3 absolute posa border border-black"
                ></NavBar>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default BrandHeader;
