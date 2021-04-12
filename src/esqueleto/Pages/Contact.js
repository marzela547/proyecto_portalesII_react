import ContactF from "./Contacto/ContactF";
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';



function Contacto(){
    return(

        <section className="flex">
            <ContactF></ContactF>
            <div className="w-2/6">
            <h2>Redes sociales</h2>
            <div>
                <a href="https://www.youtube.com/?gl=ES&hl=es">
                <img src={facebook}></img>
                <label>Facebook</label>
               </a>
            </div>
            <div>
               <a href="https://www.youtube.com/?gl=ES&hl=es">
                <img src={twitter}></img>
                <label>Twitter</label>
                </a>
            </div>
            <div >
                <a href="https://www.youtube.com/?gl=ES&hl=es">
                <img src={insta}></img>
                <label> Instagram</label>
               </a>
            </div>
        </div>
        </section>
    );
}
export default Contacto;