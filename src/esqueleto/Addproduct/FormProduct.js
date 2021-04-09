function Formu({ }) {
    return (
        <form className="  relative my-3 mx-8 justify-center w-auto h-auto lg:w-2/8 lg:mt-5 flex lg:mr-5 lg:flex-wrap lg:align-middle">
            <fieldset className="border rounded-md  relative w-full h-full bg-red-200 flex flex-wrap " >
                <div className="my-2 mx-2 h-12 w-full block lg:w-2/4 ">
                    <label for="txtproducto">Nombre del Producto</label>
                    <input type="text" name="txtproducto" id="txtproducto" className="w-full border border-gray-400"  placeholder="Anillo Fantasy" required />
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
                  <div id="bexterior" className=" h-10 text-center align-middle flex border bg-gray-300  w-full lg:h-12">
                  <div id="binterior" className="  lg:w-64 w-full m-1 lg:m-2  h-8 border-dashed border-gray-500 border border-collapse">
                            <p className="text-xs mt-2 w-full overflow-hidden">Pulsa aquí para añadir una imagen</p>
                            <input className="relative bottom-6 max-w-full z-0 opacity-0 " type="file" name="foto" id="foto" accept="image/png, image/jpg"/>
                        </div>

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
/*                <div className="my-10 mx-0 h-12 w-full flex align-middle lg:w-64 lg:48 ">
                  <div id="bexterior" className="w-full h-24 text-center flex border-collapse bg-gray-200 border-gray-500">
                        <div id="binterior">
                            <p>Pulsa aquí para añadir una imagen</p>
                            <input type="file" name="foto" id="foto" accept="image/png, image/jpg"/>
                    </div>
                    <img id="imag" src=""></img>
                    <button type="button" id="basu" onclick="eliminarIma()"> <ion-icon name="trash-outline" id="basurerito"></ion-icon> </button>
                    </div>
                </div>  
                
                
                
                
                                <div  class="m-2 h-12 w-full block  bg-gray-400">
                    <label for="txtLongText">Descripción del Producto</label><br/>
                    <textarea id="txtLongText" nam e="txtLongText" rows="20" placeholder="Descripción del producto"  className="w-full border border-gray-400" required></textarea>
                    <br/>
                </div>*/