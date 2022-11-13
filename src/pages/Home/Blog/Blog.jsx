import React from 'react';
import './Blog.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Img1 from '../../../img/svg/Blog img1.svg';
import Img2 from '../../../img/svg/Blog img2.svg';
import Img3 from '../../../img/svg/Blog img3.svg';
import Arrow from './Arrow/Arrow';
import { useRef } from 'react';

function Blog() {
  const arrowLeft = useRef(null);
  const arrowRight = useRef(null);
  return (
    <div className="blog">
      <div className="blog-title">
        <div className="blog-title-our">OUR RESOURCES</div>
        <div className="blog-title-start">Start reading our blog</div>
      </div>
      <div className="blog-swiper">
        <div className="dasda" ref={arrowLeft}>
          {'<'}
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          //   navigation
          navigation={{
            nextEl: '.dasdo',
            prevEl: '.dasda',
            enabled: true,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="blog-slide">
            <div className="blog-ilustration">
              <img className="blog-img1" src={Img1} alt="img" />
              <img className="blog-img2" src={Img2} alt="img" />
              <img className="blog-img3" src={Img3} alt="img" />
            </div>
            <div className="blog-text">
              <div className="blog-text-title">How to start planning</div>
              <div className="blog-text-text">
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti. Natum petentium principes mei ea. Tota everti
                periculis vis ei, quas tibique pro at, eos ut decore ...
              </div>
              <div className="blog-text-btns">
                <button className="blog-btn1">Read now</button>
                <button className="blog-btn2">Add to your bookmarks</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
        <div className="dasdo" ref={arrowRight}>
          {'>'}
        </div>
      </div>
    </div>
  );
}

export default Blog;
