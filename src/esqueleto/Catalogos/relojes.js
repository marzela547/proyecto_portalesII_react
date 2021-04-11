import  Fotos from '../Slider/Slider';
import './catalogos.css';

let tprincipal="justify-items-center text-lg text-center";
let pgeneral="lg:w-3/4 lg:mx-auto";
let lcontactos="no-underline hover:no-underline text-gray-700";


function Relojes(){
    return(
        <section className="flex  justify-between lg:m-10">
           <section className={tprincipal}>
            <Fotos></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} href="detalles.html"><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p ><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
            </section>
            <section className={tprincipal}>
            <Fotos></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} href="detalles.html"><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
            </section>
        </section>
    );
}

export default Relojes;