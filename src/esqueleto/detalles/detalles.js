import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Imgs/0.1-min.png';
import img2 from '../Imgs/0.2-min.png';
import img3 from '../Imgs/0.8.jpg';
import './detalles.css';

const items = [
  {
    src: img1,
    altText: '',
    caption: '',
  },
  {
    src: img2,
    altText: '',
    caption: '',
  },
  {
    src: img3,
    altText: '',
    caption: '',
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="maindetalles justify-between ">
      <div className="caja">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      <section class="infodiv">
        <section class="infoproducto">
          <h2>Pulsera de Corazón</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            adipisci ut est quae, dolores et dolorum officia expedita
            repellendus natus veritatis nam aspernatur labore! Ad error expedita
            magnam repudiandae id!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            quasi nihil, sit, alias velit facilis aspernatur vero numquam ullam
            adipisci quibusdam praesentium aut, laudantium nisi accusantium quo
            culpa ducimus odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            tempora vitae consequatur doloribus fuga quos tenetur quam,
            praesentium ea debitis. Quia ullam voluptates neque. Id excepturi
            cum autem dolorem facere.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            inventore consequuntur mollitia, soluta maiores illo dolor excepturi
            tempore rem veniam facilis nesciunt et incidunt nobis. Velit
            repellendus tempore earum magni.
          </p>
        </section>
        <div>
          <a href="contact.html">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contactanos
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Example;
