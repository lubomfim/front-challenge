import * as S from './styled'

const Header = ({ title, user, path, grid }) => {
  return (
    <S.Header grid={grid}>
      {path && <S.BackContainer></S.BackContainer>}
      {!title && (
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
      )}
      {title && <S.HeaderTitle>{title}</S.HeaderTitle>}
      {user && <S.UserIcon></S.UserIcon>}
    </S.Header>
  )
}

export default Header
