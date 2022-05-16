import * as S from './styled'

const Button = ({ variant, children, path, onClick }) => {
  return path ? (
    <S.ButtonLink to={path} variant={variant}>
      {children}
    </S.ButtonLink>
  ) : (
    <S.Button variant={variant} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
