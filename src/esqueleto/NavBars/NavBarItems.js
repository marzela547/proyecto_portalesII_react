import {NavLink} from 'react-router-dom';
function NavBarItems({label, uri}){

  return (
    <li>
      <NavLink className="hover:no-underline hover:bg-gray-100 text-black hover:text-black" to={uri}>{label}</NavLink>
    </li>
  );
}

export default NavBarItems;

/* <a alt={label} href={uri} >{label}</a></li> */
