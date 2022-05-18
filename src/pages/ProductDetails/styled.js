import styled from 'styled-components'

export const ProductDetails = styled.div`
  margin-top: 20px;

  @media (min-width: 900px) {
    display: flex;
  }
`
export const ProductTextContainer = styled.div`
  &.title {
    margin-top: 15px;
    margin-bottom: 30px;
  }

  &.description {
    margin-bottom: 30px;
  }

  &.normal {
    margin-bottom: 20px;
  }

  p {
    &.name {
      font-size: 21px;
      margin-bottom: 5px;
    }

    &.code {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.46);
    }

    &.description {
      font-size: 12px;
    }

    &.title {
      font-size: 14px;
      margin-bottom: 6px;
      font-weight: 600;
    }

    &.value {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.46);
    }
  }

  .color {
    width: 30px;
    height: 30px;
    background: ${({ background }) => background};
    border-radius: 100%;
    border: 1px solid rgba(121, 121, 121, 0.3);
  }
`

export const ProductDetailsText = styled.div`
  @media (min-width: 600px) {
    max-width: 800px;
    min-width: 400px;
    height: 400px;
    max-height: 400px;
    margin-right: 20px;
  }
`
