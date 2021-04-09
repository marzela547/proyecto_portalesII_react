import logo from "../Imgs/Logo.png";
import hogar from "../Imgs/hogar.png";
import telefono from "../Imgs/smartphone.png";
import sobre from "../Imgs/sobre.png";
import FooterSocial from "./FooterSocial";


function Footerinfo(){
    return(
       <section className="lg:flex lg:flex-wrap h-4/5   ">
            <div className="  lg:w-2/4 w-full   ">
                <img className="m-auto w-2/4 h-48  justify-items-center" src={logo} alt=" Jewelry Lovers"></img>
            </div>
            <section className=" lg:w-2/4 w-full m-0 h-full flex">
                <FooterSocial></FooterSocial>
                <section className="w-2/4  justify-center  ">
                    <h2 className="text-center my-3 font-black m-2 text-lg text-gray-800">Información de Contacto</h2>
                    <div className="flex  m-3">
                        <img src={hogar} alt="hogar"  className="h-8  mx-4" ></img>
                        <label>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div className="flex  m-3">
                        <img src={telefono} alt="celular" className="h-8  mx-4"></img>
                        <label>###########</label>
                    </div>
                    <div className="flex  m-3">
                        <img src={sobre} alt="correo" className="h-8  mx-4"></img>
                        <label>##########</label>
                    </div>
                </section>
            </section>
       </section>
    );
}

export default Footerinfo;
/*                    <div>
                        <img src={hogar} alt="hogar">
                        <label>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                    </div>
                    <div>
                        <img src={telefono} alt="celular">
                        <label>###########</label>
                    </div>
                    <div>
                        <img src={sobre} alt="correo">
                        <label>##########</label>
                    </div>*/