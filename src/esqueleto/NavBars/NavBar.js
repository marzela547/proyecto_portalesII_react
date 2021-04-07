import NavBarItems from "./NavBarItems";
import "./NavBar.css";

function NavBar({dummyData,fashon}) {
  
  let navBarItems = dummyData.map((o, i)=>{
    return (
            <NavBarItems
              label={o.label}
              uri={o.uri}
              key={i}>
            </NavBarItems>
          );
  });
  return (
    
      <ul className={fashon}>
        {navBarItems}
      </ul>

  );
}

export default NavBar;
