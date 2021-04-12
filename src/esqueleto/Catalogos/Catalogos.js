import  Fotos from '../Slider/slider2';
import './catalogos.css';
import React,{ useState } from 'react';
import producto1 from '../img/1.7.png';
import producto2 from '../img/5.1.png';
import producto3 from '../img/9.2.png';

let tprincipal="justify-items-center text-lg text-center";
let pgeneral="lg:w-3/4 lg:mx-auto";
let lcontactos="hover:no-underline text-blue-600 hover:text-gray-500  link";


function Catalogo(){

    const [pics, setPics]= useState({producto1, producto2, producto3});

    return(
        <section className="flex row justify-between lg:m-10">
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} href="detalles.html"><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p ><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
            </section>
            <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><a class={lcontactos} href="detalles.html"><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</a></p>
                <p><a class={lcontactos} href="contact.html"><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</a></p>
            </section>
            </section>
        </section>
    );
}

export default Catalogo;