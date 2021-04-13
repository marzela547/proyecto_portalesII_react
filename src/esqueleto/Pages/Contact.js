import ContactF from "./Contacto/ContactF";
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import FooterSocial from "../Footer/FooterSocial";



function Contacto(){
    return(

        <section className="flex">
            <ContactF></ContactF>
            <FooterSocial></FooterSocial>
        </section>
    );
}
export default Contacto;