// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper'
import * as S from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const ProductImageSlider = ({ list = [] }) => {
  return (
    <S.SwiperContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true
        }}
        pagination={{ clickable: true }}
      >
        {list?.images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </S.SwiperContainer>
  )
}

export default ProductImageSlider
