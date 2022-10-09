import React from 'react'
import './Quotes.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import NotMe from '../../../img/svg/notMe.svg'

function Quotes() {
  return (
    <div className='quotes'>
        <div className='quotes-title'>
            <div className='quotes-title-text'>TESTIMONIALS</div>
            <div className='quotes-title-customers'>Customers's quotes</div>
            <div className='quotes-title-description'>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</div>
        </div>
        <div className='quotes-content'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={60}
                slidesPerView={1.6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    clickable: true,
                }}
                >
                <SwiperSlide>
                    <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                    </div>
                    <div className='quotes-slide-img'>
                        <img src={NotMe} alt='img'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                    <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                <div className='quotes-slide-img'>
                        <img src={NotMe} alt='img'/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='quotes-slide'>
                        <div className='quotes-slide-text'>
                        Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Quotes