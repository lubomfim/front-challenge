import styled from 'styled-components'

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 10px;
  gap: 10px;

  > div {
    width: 100%;
  }

  a {
    max-width: 200px;
    margin: 0px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    a {
      max-width: 100%;
      margin: 0px;
    }
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
