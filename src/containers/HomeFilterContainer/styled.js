import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  gap: 10px;
  align-items: center;

  > div {
    margin: 0;
    max-width: 100%;
  }

  svg {
    cursor: pointer;
  }
`
