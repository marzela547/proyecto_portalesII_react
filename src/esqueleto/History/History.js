import img1 from "../Imgs/0.1-min.png";
import img2 from "../Imgs/0.2-min.png";
import img3 from "../Imgs/0.3-min.png";
import img4 from "../Imgs/0.4-min.png";
function history(){
    return(
        <section   className="lg:flex block w-full font-sans">
        <section className="lg:w-2/4 w-full text-justify m-8  " >
            <h2 className="font-black m-2 text-xl font-mono">GirlyHN Historia</h2>
            <p>
                Jewelry Lovers Hn es una empresa dedicada la distribución de accesorios para dama y caballero, pioneros con nuestras marcas y calidad de producto.
            </p>
            <p>
                Fundada en 2008 y permaneciendo aún en estos días, en la mente de nuestros clientes, por la calidad de nuestros productos y servicio personalizado.
            </p>
            <p>
                Nuestro mayor logro, ha sido mantenernos siempre a la vanguardia con nuestros  productos, por su calidad y sobre todo variedad; incorporando nuevas líneas cada vez, para satisfacer las necesidades de nuestros consumidores.
            </p>
            <p>
                Desde nuestros inicios hemos brindado una atención personalizada a nuestros clientes, teniendo como objetivo satisfacer y exceder sus necesidades, respetando siempre los precios y cada uno de nuestros controles de calidad.
            </p>
            <p>
                Al adquirir un producto en nuestra tienda, no solo te vuelves un cliente, te vuelves parte de nuestra familia y como tal siempre buscaremos brindarte lo mejor.
            </p>
            <p ><em>...con amor</em></p>
            <p><em>Jewelry Lovers Hn</em></p>
        </section>
        <section className="lg:w-2/4 w-full  flex flex-wrap m-8  justify-center ">
                        <img className="h-52  w-52 mx-4 mt-0 mn-8 rounded-lg shadow-2xl" src={img1} alt="Imagen 1"></img>
                        <img  className="h-52  w-52 mx-4 mt-0 mn-8 rounded-lg shadow-2xl" src={img2} alt="Imagen 2"></img>
                        <img   className="h-52 w-52 mx-4 mt-3 mn-8 rounded-lg shadow-2xl" src={img3} alt="Imagen 3"></img>
                        <img  className="h-52 w-52 mx-4 mt-3 mn-8 rounded-lg shadow-2xl" src={img4} alt="Imagen 4"></img>
 
        </section>
    </section>
    );
}

export default history;

