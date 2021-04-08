import logo from "../Imgs/Logo.png";
import hogar from "../Imgs/hogar.png";
import telefono from "../Imgs/smartphone.png";
import sobre from "../Imgs/sobre.png";
import { FaFacebook,FaFacebookSquare,FaInstagramSquare,FaInstagram,FaTwitterSquare,FaTwitter } from 'react-icons/fa';

function Footerinfo(){
    return(
       <section className="lg:flex lg:flex-wrap h-4/5   ">
            <div className="  lg:w-2/4 w-full   ">
                <img className="m-auto w-2/4 h-48  justify-items-center" src={logo} alt=" Jewelry Lovers"></img>
            </div>
            <section className=" lg:w-2/4 w-full m-0 h-full flex">
                <section className="w-2/4  " >
                        <h2 className="text-center my-3 font-black m-2 text-lg text-gray-800  ">Redes sociales</h2>
                        <div className="flex  m-3 w-2/4 mx-auto rounded-lg  hover:text-blue-500">
                        <FaFacebook className="text-4xl  mx-4 "/>
                            <labe className="justify-items text-gray-600"l>Facebook</labe>
                        </div>
                        <div  className="flex  m-3 w-2/4 mx-auto rounded-lg  hover:text-blue-400">
                            <FaTwitter className="text-4xl  mx-4   "/>
                            <label className="justify-items text-gray-600">Twitter</label>
                        </div>
                        <div  className="flex m-3 w-2/4  mx-auto rounded-lg hover:text-pink-600">
                            <FaInstagram className="text-4xl  mx-4 "/>
                            <label className="justify-items text-gray-600"> Instagram</label>
                        </div>
                </section>
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