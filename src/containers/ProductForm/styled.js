import styled from 'styled-components'

export const ProductForm = styled.div`
  margin-top: 30px;

  > div {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .loader {
    margin-top: 0px;
  }
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => cols};
  gap: 20px;
  margin-bottom: 20px;

  > div {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    grid-template-columns: ${({ wrap = true, cols }) => (wrap ? 'none' : cols)};
    gap: 20px;
  }
`

export const CategoryTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
`
