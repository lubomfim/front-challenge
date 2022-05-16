import * as S from './styled'

const Input = ({ label, type = 'text', value, onChange, name, error = false }) => {
  return (
    <S.InputContainer>
      {label && <S.Label>{label}</S.Label>}
      {error && <S.Error>Verifique o campo</S.Error>}
      <S.Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target)}
        name={name}
        className={error && 'error'}
      />
    </S.InputContainer>
  )
}

export default Input
