
import  Foto from '../Slider/slider2';
import React,{ useState } from 'react';
import producto1 from '../../img/reloj1.jpg';
import producto2 from '../../img/reloj2.jpg';
import producto3 from '../../img/reloj5.jpg';
import producto4 from '../../img/reloj3.jpg';
import producto5 from '../../img/reloj4.jpg';
import producto6 from '../../img/reloj6.jpg';
import { NavLink } from 'react-router-dom';

let tprincipal="justify-items-center text-lg text-center";
let pgeneral="lg:w-3/4 lg:mx-auto mt-5";
let lcontactos="hover:no-underline text-blue-600 hover:text-gray-500 link";



function Relojes(){

    const pics= [producto1, producto2, producto3];
    const pics2= [producto4, producto5, producto6];
     // console.log(pics);
    return(
        <section className="flex  justify-between lg:m-10">
           <section className={tprincipal}>
            <Foto pic2={pics}></Foto>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Foto pic2={pics2}></Foto>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
            </section>
            <section className={tprincipal}>
            <Foto pic2={pics}></Foto>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
            </section>
            <section className={tprincipal}>
            <Foto pic2={pics2}></Foto>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
            </section>
        </section>
    );
}

export default Relojes;