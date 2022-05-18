import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  .loader {
    margin-top: 100px;
  }
`
export const ProductsEmptyList = styled.div`
  width: 235px;
  margin: 100px auto 0px;

  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 30px;
  }

  a {
    box-shadow: 6px 6px 0px #50243d;
  }
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 20px 15px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, 260px);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`

export const ProductItem = styled.div`
  border: 1px solid #707070;
  padding: 8px;

  display: flex;
  gap: 8px;

  position: relative;
`

export const ProductItemImg = styled.div`
  border: 1px solid #cecece69;
  min-width: 100px;
  min-height: 100px;

  max-width: 100px;
  max-height: 100px;
  padding: 10px;

  img {
    width: 78px;
    height: 78px;
  }
`

export const ProductItemText = styled.div`
  .title {
    font-size: 14px;
    margin-bottom: 3px;
  }

  .code {
    color: rgba(0, 0, 0, 0.46);
    margin-bottom: 24px;
    font-size: 10px;
  }

  .more {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
