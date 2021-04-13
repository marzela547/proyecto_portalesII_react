import { Input } from "reactstrap";
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import App from '../../App';

const cloudPreset = 'edpun0xj';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/defil6trk/upload';
let imgFoto, imgStyle="hidden";
let divInter;
const Evento = (e) => {
    //
    const file = e.target.files[0];
    console.log(file);

    //setClase({divInterno: "hidden"});
    //console.log(clase);
subirImagen(file).then(url => imgFoto=url,
        console.log(imgFoto));

//const arreglo = [1,2,3];
    //const settings =  /*ESTE HACE QUE SE CAMBIEN LOS VALORES DE LAS CLASES*/
// setClase(arreglo);
// <App prueba={clase}/>
 //ReactDOM.render(<App>settings</App>, document.getElementById('root'));
}
/*
const presionar = () =>{
    <Formu interno="hidden bg-gray-800"
    externo="lg:h-28"/>
}

/*divInterno.style.display='none',
             divExterno.style.height=tam,
             divExterno.style.zIndex=arriba,
             divExterno.style.marginTop = '40px',
             deco.style.marginTop='50px',
             basurerito.style.display= 'block',
             imgFoto.style.display='block'*/
const subirImagen = async( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir );

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            //eliminarIma();
            throw await resp.json();

        }

    } catch( err ) {
        throw err;
    }

}

function Formu(props) {

   // const [clase, setClase] = useState("");

   //let [clase, setClase]= useState({a:0,b:3});
    //console.log(props);

    return (
        <form className="  relative my-3 mx-8 justify-center w-auto h-auto lg:w-2/8 lg:mt-5 flex lg:mr-5 lg:flex-wrap lg:align-middle">
            <fieldset className="border rounded-md  relative w-full h-full bg-red-200 flex flex-wrap " >
                <div className="my-2 mx-2 h-12 w-full block lg:w-2/4 ">
                    <label for="txtproducto">Nombre del Producto</label>
                    <input type="text" name="txtproducto" id="txtproducto" className="w-full border border-gray-400 "  placeholder="Anillo Fantasy" required />
                    <span id="txtproductoerror" className="hidden "></span>
                    <br/>
                </div>
                <div className="m-2 h-12 w-full flex p-0 lg:w-2/5 align-middle  ">
                    <div className=" w-2/4  ">
                        <label className="lbl" for="cmbmarca">Marca</label>
                            <select name="cmbmarca" id="cmbmarca"  className="w-full" required>
                                <option selected value="">Seleccionar...</option>
                                <option value="opcpandora">Pandora</option>
                                <option value="opccasio">Casio</option>
                                <option value="opcbgood">Be Good</option>
                            </select>
                        <br/>
                    </div>
                    <div className="ml-4 w-2/4  ">
                        <label className="lbl" for="cmbcategoria">Categoría</label>
                            <select name="cmbcategoria" id="cmbcategoria" className="w-full" required>
                                <option selected value="">Seleccionar...</option>
                                <option value="opcpulseras">Pulseras</option>
                                <option value="opcrelojes">Relojes</option>
                                <option value="opcanillos">Anillos</option>
                            </select>
                    </div>
                    <br/>
                </div>
                <div className="m-2 h-12 w-full lg:block lg:w-2/4 ">
                    <label  for="txtprecio">Precio del Producto</label>
                    <input type="text" name="txtprecio" id="txtprecio"   className="w-full border border-gray-400" placeholder="Anillo Fantasy" required />
                    <span id="txtprecioerror" class="hide"></span>
                    <br/>
                </div>
                <div className="flex  h-12 w-full lg:w-72 m-2 border-gray-900 ">
                  <div id="bexterior" className={` h-10 text-center align-middle flex border bg-gray-300  w-full lg:h-12  ${props.externo}`}>
                  <div id="binterior" className={`lg:w-64 w-full m-1 lg:m-2  h-8 border-dashed border-gray-500 border border-collapse ${props.interno}`}>
                            <p className="text-xs mt-2 w-full overflow-hidden">Pulsa aquí para añadir una imagen</p>
                            <input className="relative bottom-9 max-w-full h-full z-0 opacity-0" onChange={(e)=>Evento(e)} type="file" name="foto" id="foto" accept="image/png, image/jpg"/>
                        </div>
                        <img className={imgStyle} src={imgFoto}></img>
                    </div>
                </div>
                <div  className="w-full h-32 m-2 mb-8">
                    <label for="txtLongText">Descripción del Producto</label><br/>
                    <textarea id="txtLongText" nam e="txtLongText" rows="20" className="w-full h-full" placeholder="Descripción del producto" required></textarea>
                    <br/>
                </div>
                <div className="m-2 w-full h-12  align-middle flex  justify-end">
                    <button className="lg:w-28 lg:h-12 w-full h-full   bg-blue-600 text-blue-50 hover:text-blue-600 hover:bg-blue-50  " type="submit" name="btnEnviar">Guardar</button>
                </div>
            </fieldset>
        </form>
    );
}

export default Formu;
