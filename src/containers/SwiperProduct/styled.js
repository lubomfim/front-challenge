import styled from 'styled-components'

export const SwiperContainer = styled.div`
  max-height: 200px;
  height: 200px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;

  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 3;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  .swiper-wrapper {
    max-height: 200px;
    height: 200px;
    width: 100%;

    @media (min-width: 600px) {
      max-width: 800px;
      min-width: 400px;
      height: 400px;
      max-height: 400px;
      margin-right: 20px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    width: auto;
    left: 25px;
    bottom: 10px;

    display: flex;
    align-items: center;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: #50243d;
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet {
    background-color: #cecece;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    opacity: 1;
    width: 8px;
    height: 8px;
  }

  @media (min-width: 600px) {
    max-width: 400px;
    height: 400px;
    max-height: 400px;
  }
`
