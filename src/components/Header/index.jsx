import React from 'react'
import * as S from './styled'
import { Link, useLocation } from 'react-router-dom'

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg'

const Header = ({ title, user, path, grid, showUser, showLogo = true }) => {
  const location = useLocation()

  return (
    <S.Header grid={grid} data-testid="header">
      {path && (
        <S.BackContainer data-testid="header-back">
          <Link to={path}>
            <ArrowLeft />
          </Link>
        </S.BackContainer>
      )}
      {!title && showLogo && (
        <S.LogoContainer data-testid="header-logo">
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
      )}
      {title && <S.HeaderTitle data-testid="header-title">{title}</S.HeaderTitle>}
      {user && showUser && (
        <S.UserIcon to="/info" state={{ prevPath: location.pathname }} data-testid="header-user">
          {user.name?.[0] || user.email?.[0]}
        </S.UserIcon>
      )}
    </S.Header>
  )
}

export default Header
