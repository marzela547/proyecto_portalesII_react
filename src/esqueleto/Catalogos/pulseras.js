import  Fotos from '../Slider/slider2';
import React,{ useState } from 'react';
import producto1 from '../../img/0.1-min.png';
import producto2 from '../../img/0.2-min.png';
import producto3 from '../../img/0.3-min.png';
import producto4 from '../../img/1.7.png';
import producto5 from '../../img/5.1.png';
import producto6 from '../../img/9.2.png';
import { NavLink } from 'react-router-dom';


let tprincipal="justify-items-center text-lg text-center lg:my-5";
let pgeneral="lg:w-3/4 lg:mx-auto";
let lcontactos="hover:no-underline text-blue-600 hover:text-gray-500  link";

function Pulseras(){
    const pics= [producto1, producto2, producto3];
    const pics2= [producto4, producto5, producto6];
    return(
        <section className="flex row justify-between lg:m-5 overflow-hidden">
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics2}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics2}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics2}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
           </section>
           <section className={tprincipal}>
            <Fotos pic2={pics2}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
            </section>
            <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
            <section className={pgeneral}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><NavLink className={lcontactos} to={'/Details'} ><ion-icon name="add-circle-outline"></ion-icon> Detalles del producto</NavLink></p>
                <p><NavLink className={lcontactos} to={'/Contact'}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>¿Deseas ordenarlo ya? Escríbenos</NavLink></p>
            </section>
            </section>
        </section>
    );
}

export default Pulseras;