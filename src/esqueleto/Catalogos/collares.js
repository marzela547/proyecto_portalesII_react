import  Fotos from '../Slider/slider2';
import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import producto1 from '../../img/1.7.png';
import producto2 from '../../img/5.1.png';
import producto3 from '../../img/9.2.png';

let tprincipal="justify-items-center text-lg text-center";
let pgeneral="lg:w-3/4 lg:mx-auto";
let lcontactos="hover:no-underline text-blue-600 hover:text-gray-500  link";


function Collares(){

    const [pics, setPics]= useState({producto1, producto2, producto3});

    return(
        <section className="flex row justify-between lg:m-10">
           <section className={tprincipal}>
            <Fotos pic2={pics}></Fotos>
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
            <Fotos pic2={pics}></Fotos>
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
            <Fotos pic2={pics}></Fotos>
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

export default Collares;