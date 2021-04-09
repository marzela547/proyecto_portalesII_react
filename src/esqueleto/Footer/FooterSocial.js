import { FaFacebook,FaFacebookSquare,FaInstagramSquare,FaInstagram,FaTwitterSquare,FaTwitter } from 'react-icons/fa';
function FooterSocial (){
    return(
        <section className="w-2/4  " >
            <h2 className="text-center my-3 font-black m-2 text-lg text-gray-800  ">Redes sociales</h2>
            <div className="flex  my-3 w-2/4 mx-auto rounded-lg  hover:text-blue-500">
                <FaFacebook className="text-4xl mr-2"/>
                <labe className="justify-items text-gray-600"l>Facebook</labe>
            </div>
            <div  className="flex  my-3 w-2/4 mx-auto rounded-lg  hover:text-blue-400">
                <FaTwitter className="text-4xl  mr-2  "/>
                <label className="justify-items text-gray-600">Twitter</label>
            </div>
            <div  className="flex my-3 w-2/4  mx-auto rounded-lg hover:text-pink-600">
                <FaInstagram className="text-4xl mr-2  "/>
                <label className="justify-items text-gray-600 "> Instagram</label>
            </div>
        </section>
    );

}
export default FooterSocial;