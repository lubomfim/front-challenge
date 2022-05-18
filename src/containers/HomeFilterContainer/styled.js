import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  gap: 10px;
  align-items: center;

  > div {
    margin: 0;
    max-width: 100%;

    &.filter {
      position: relative;
    }
  }

  svg {
    cursor: pointer;
  }

  .close {
    background: white;
    position: absolute;
    top: 0px;
    right: 0px;
  }
`

export const FilterInputContainer = styled.div`
  margin-bottom: 20px;
`
