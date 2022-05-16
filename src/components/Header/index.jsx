import * as S from './styled'
import { Link } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg'

const Header = ({ title, user, path, grid, showUser = true, showLogo = true }) => {
  return (
    <S.Header grid={grid}>
      {path && (
        <S.BackContainer>
          <Link to={path}>
            <ArrowLeft />
          </Link>
        </S.BackContainer>
      )}
      {!title && showLogo && (
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
      )}
      {title && <S.HeaderTitle>{title}</S.HeaderTitle>}
      {user && showUser && <S.UserIcon to="/info">{user.name[0] || user.email[0]}</S.UserIcon>}
    </S.Header>
  )
}

export default Header
