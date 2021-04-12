import Fotos from "../Slider/Slider";
import React, { useState } from 'react';
import producto1 from '../img/fondojoyas.jpg';
import producto2 from '../img/fondojoyas2.jpg';
import producto3 from '../img/fondosjoyas3.jpg';


function Brand({ title }){

  const [pics, setPics]= useState({producto1, producto2, producto3});

  return (
      <Fotos pic={pics} ></Fotos>
  );
}

export default Brand;
