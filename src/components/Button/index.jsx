import * as S from './styled'

const Button = ({ variant, children, path, onClick, style }) => {
  return path ? (
    <S.ButtonLink to={path} variant={variant} style={style}>
      {children}
    </S.ButtonLink>
  ) : (
    <S.Button variant={variant} onClick={onClick} style={style}>
      {children}
    </S.Button>
  )
}

export default Button
