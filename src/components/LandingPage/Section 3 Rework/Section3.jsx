import React from 'react'
import "./section3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';





function Carrossel() {
  
  return (
    <section className="section3-Swiper">
      <Swiper
      effect={ 'coverflow' }
      grabCursor={ true }
      centeredSlides={ true }
      loop={ false }
      
      slidesPerView={ '5' }
      initialSlide={5}
      coverflowEffect={
        {
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 2.5,
        }
      }   

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        
       className="swiper_container">
        
        
        <SwiperSlide >
          <div className='swiper-cards'><h3 className='swiper-cards-title'>aaaaa<span className='swiper-cards-title-palavra'>Conexões</span></h3>
            <p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-titl-palavra'>Beneficio</span></h3><p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Sobre</span></h3><p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Intuito</span></h3><p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p></div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Conexões</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Beneficio</span></h3><p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Sobre</span></h3><p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiper-cards'><h3 className='swiper-cards-title'><span className='swiper-cards-title-palavra'>Intuito</span></h3><p className='swiper-cards-paragrph'>Lorem ipsum dolor sit amet consectetur. Donec egestas lobortis urna fringilla. Risus sodales ut rhoncus viverra duis. Feugiat at malesuada imperdiet et elementum velit fermentum sit. Velit sem ultrices eget amet et in est eget magna volutpat consequat.</p></div>
        </SwiperSlide>
       

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>

      </Swiper>
    </section>
  )
}

export default Carrossel;