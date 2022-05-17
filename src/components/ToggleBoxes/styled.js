import styled from 'styled-components'

export const ToggleBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 5px 0px 60px;
`

export const ToggleBoxesItem = styled.div`
  text-align: center;
  padding: 12px 0px;
  border: 1px solid rgba(112, 112, 112, 0.22);
  font-size: 14px;
  transition: all 0.4s ease;
  cursor: pointer;

  &.selected {
    background: #000;
    color: white;
  }
`
