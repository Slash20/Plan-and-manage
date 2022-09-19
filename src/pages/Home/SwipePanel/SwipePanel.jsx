import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './SwipePanel.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import slide from '../../../img/svg/slide.svg';
import MiniHeadText from '../../../rezability-components/Text/MiniHeadText/MiniHeadText';
import HeadText from '../../../rezability-components/Text/HeadText/HeadText';
import Bold from '../../../rezability-components/Text/Bold/Bold';
import ContentText from '../../../rezability-components/Text/ContentText/ContentText';

const SwipePanel = () => {
  const slides = [1, 1, 1];

  return (
    <Swiper
      id="main"
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((e, i) => {
        return (
          <SwiperSlide className="Slide-container" key={i}>
            <div className="Slide-container">
              <img className="Slide" src={slide} alt="slide" />
              <div className="Slide-text">
                <MiniHeadText text="PLAN YOUR LIFE" />
                <HeadText
                  text={
                    <>
                      Increase your <Bold text="productivity" />
                    </>
                  }
                />
                <ContentText
                  text={
                    <>
                      Brute laoreet efficiendi id his, ea illum nonumes luptatum
                      pro. Usu
                      <br />
                      atqui laudem an, insolens gubergren similique est cu. Et
                      vel modus
                      <br />
                      congue vituperata.
                    </>
                  }
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwipePanel;
