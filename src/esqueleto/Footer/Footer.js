import FooterCopy from "./FootersCopy";
import Footerinfo from "./Footerinfo";
function Footer(){
  return (
    <footer className="  lg:flex lg:flex-wrap   block  lg:h-64 h-96 bg-gray-100 font-mono " >
      <Footerinfo></Footerinfo>
      <FooterCopy></FooterCopy>

    </footer>
  );
}

export default Footer;
/*<FooterCopy></FooterCopy>*/