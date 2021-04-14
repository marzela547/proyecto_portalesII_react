import Example from '../Slider/slider2';
import React,{ useState } from 'react';
import producto1 from '../../img/1.7.png';
import producto2 from '../../img/reloj6.jpg';
import producto3 from '../../img/9.2.png';


function Index(){
    const pics= [producto1, producto2, producto3];
    return(
    <section   className="lg:flex block w-full font-sans content-center">
        <section className="lg:w-2/4 w-full text-justify m-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque ac nisi vel dui egestas vulputate nec feugiat mauris.
                Suspendisse ac odio nec dui volutpat bibendum non sed purus.
                Proin sed nisl eros. Mauris non velit pretium, laoreet ante ut, mattis nunc.
                Cras vitae semper sem. Fusce eu diam nec justo pretium egestas.
                Duis viverra orci vitae auctor sollicitudin. Donec sed gravida lectus.
                Fusce sagittis libero quam, a lobortis metus dignissim a. Aenean enim quam, sodales eget feugiat ut, pretium sed nisi.
                Pellentesque ut eros in est imperdiet dapibus.

                Praesent ut elit interdum, eleifend lorem a, ullamcorper ante.
                In hac habitasse platea dictumst. Duis congue porttitor ante a sollicitudin.
                Fusce mollis fringilla leo, et viverra nisl rutrum sit amet. Nunc et orci est.
                Proin luctus metus quis molestie ultrices.
                Fusce ut cursus enim. Nam mi libero, vestibulum nec aliquet ut, iaculis eget nibh.
                Phasellus ex magna, efficitur vitae arcu at, placerat vulputate nulla. Suspendisse tincidunt dignissim nulla non lobortis.
                Praesent mollis nisi dui, at mattis dui porttitor sit amet.
                Proin urna ligula, congue sit amet rhoncus posuere, maximus eget justo.
                Morbi iaculis, felis nec finibus molestie, mi nibh convallis lacus, eget commodo mi nisi non odio.
            </p>
        </section>
        <section className="pt-4 pl-10 mt-2 ml-10">
            <Example pic2={pics}></Example>
        </section>
    </section>
    );
}

export default Index;
