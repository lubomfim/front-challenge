import { useTranslation } from 'react-i18next'
import * as S from './styled'

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  name,
  error = false,
  as = 'input',
  disabled,
  options = [],
  search = false,
  placeholder
}) => {
  const { t } = useTranslation()

  return (
    <S.InputContainer data-testid="input-container">
      {label && <S.Label>{label}</S.Label>}
      {error && <S.Error data-testid="error">{t('login.errorMessage')}</S.Error>}
      {as !== 'select' && (
        <S.Input
          data-testid="input"
          search={search}
          placeholder={placeholder}
          disabled={disabled}
          as={as}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target)}
          name={name}
          className={error && 'error'}
        />
      )}

      {as === 'select' && (
        <S.Input
          data-testid="select"
          disabled={disabled}
          as={'select'}
          value={value}
          onChange={(e) => onChange(e.target)}
          name={name}
          className={error && 'error'}
        >
          <option value=""></option>
          {options.map((el) => (
            <option key={el} value={String(el).toLowerCase()}>
              {el}
            </option>
          ))}
        </S.Input>
      )}
    </S.InputContainer>
  )
}

export default Input
