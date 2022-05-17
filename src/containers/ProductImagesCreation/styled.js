import styled from 'styled-components'

export const ProductImagesContainer = styled.div`
  margin-top: 5px;
  display: flex;
  overflow: scroll;
  gap: 10px;
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

export const ProductImages = styled.div`
  min-width: 120px;
  min-height: 120px;

  max-width: 120px;
  max-height: 120px;
  border: 1px solid rgba(121, 121, 121, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding: 5px;
    object-fit: cover;
    max-width: 120px;
    max-height: 120px;
  }
`

export const ProductImagesInput = styled.input`
  display: none;
`

export const ProductImagesBox = styled.label`
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
  border: 1px solid rgba(121, 121, 121, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  p {
    font-size: 14px;
    width: 100px;
    text-align: center;
    margin: 0px auto 10px;
  }

  svg {
    width: 30px;
  }
`
