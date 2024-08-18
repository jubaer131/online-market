

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/HqCHSGM/black-friday-concept-with-board-label-cart.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>

                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/qxJVxW5/discount-dslr-camera-podium.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>

                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/LtkMCVk/black-friday-concept-with-board-cart.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full max-sm:h-[200px]'>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>

                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}