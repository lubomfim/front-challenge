import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
  grid-template-rows: 1fr;
  user-select: none;
`

export const HeaderTitle = styled.p`
  font: normal normal 600 12px Inter;
  text-align: center;
`

export const LogoContainer = styled.div`
  max-width: 30px;
`

export const UserIcon = styled(Link)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(112, 112, 112, 0.55);
  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: rgba(112, 112, 112, 0.55);
  font-weight: 600;
`

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    fill: rgba(112, 112, 112, 0.7);
    cursor: pointer;
  }
`
