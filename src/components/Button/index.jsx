import React from 'react'
import * as S from './styled'

const Button = ({ variant, children, path, onClick, style }) => {
  return path ? (
    <S.ButtonLink to={path} variant={variant} style={style} data-testid="button">
      {children}
    </S.ButtonLink>
  ) : (
    <S.Button variant={variant} onClick={onClick} style={style} data-testid="button">
      {children}
    </S.Button>
  )
}

export default Button
