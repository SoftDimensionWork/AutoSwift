import CarSlide from "./CarSlide";
import cars from "./cars";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

function Slider() {
  return (
    <div>
        <Swiper
      loop={true}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-prev",
          prevEl: ".swiper-next",
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper mt-32 w-[90rem]"
      >
        {cars.map((car, i) => (
          <SwiperSlide key={i}>
            <CarSlide name={car.name} year={car.year} price={car.price} />
          </SwiperSlide>
        ))}
        
          <div className="flex gap-10 ml-[48rem] p-10 relative z-10 " >
            <button className="swiper-next cursor-pointer bg-gray-300 p-2 rounded-full">
              <AiOutlineArrowLeft className="text-3xl " />
              
            </button>
            <button className="swiper-prev cursor-pointer bg-gray-300 p-2 rounded-full">
              <AiOutlineArrowRight className="text-3xl" />
            </button>
          </div>       
      </Swiper>
    </div>
  )
}

export default Slider