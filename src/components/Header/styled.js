import styled from 'styled-components'

export const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: ${({ grid }) => grid + 'fr'};
`

export const HeaderTitle = styled.p`
  font: normal normal 600 12px Inter;
  text-align: center;
`

export const LogoContainer = styled.div`
  max-width: 30px;
`

export const UserIcon = styled.div``

export const BackContainer = styled.div``
