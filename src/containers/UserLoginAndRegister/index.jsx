import * as S from './styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Loader from '../../components/Loader'

import {
  loadFromLocalstorage,
  saveToLocalStorage,
  saveToLocalStorageSpread
} from '../../utils/handleStorage'
import { useUserContext } from '../../contexts/UserContext'

const UserLoginAndRegister = ({ type, t }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    name: '',
    id: ''
  })
  const [error, setError] = useState({
    email: false,
    password: false
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useUserContext()

  const handleChange = ({ name, value }) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  const handleLogin = async () => {
    setLoading(true)
    setError({
      email: false,
      password: false
    })
    try {
      const getUsers = loadFromLocalstorage('@Luxclusif/Registers') || []
      const validateCondition = getUsers.filter((el) => el.email === loginInfo.email)
      const body = validateCondition[0]

      setTimeout(() => {
        setLoading(false)
        setError({
          email: validateCondition.length === 0,
          password: loginInfo.password !== body?.password || loginInfo.password.length <= 5
        })

        if (validateCondition.length === 0) return

        if (loginInfo.password === body?.password && loginInfo.password.length > 5) {
          delete body.password
          saveToLocalStorage('@Luxclusif/LoggedUser', body)
          setUser(body)
          navigate('/home', { replace: true })
        }
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleRegister = async () => {
    setLoading(true)
    setError({
      email: false,
      password: false
    })
    try {
      setTimeout(() => {
        const getUsers = loadFromLocalstorage('@Luxclusif/Registers') || []

        if (handleValidateForm(loginInfo.email, getUsers)) {
          saveToLocalStorageSpread('@Luxclusif/Registers', {
            ...loginInfo,
            id: getUsers.length + 1
          })
          setLoginInfo({
            ...loginInfo,
            id: getUsers.length + 1
          })
        }
        setLoading(false)
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleValidateForm = (email, array) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const validateCondition =
      regex.test(email) && array.filter((el) => el.email === email).length <= 0

    setError({
      password: loginInfo.password.length <= 5,
      email: !validateCondition
    })

    if (validateCondition && !(loginInfo.password.length <= 5)) {
      return true
    }

    return false
  }

  return (
    <S.UserLoginAndRegister>
      {!loginInfo.id && (
        <>
          {type === 'register' && (
            <Input label={t('register.nameLabel')} name="name" onChange={handleChange} />
          )}
          <Input
            label={t('login.emailLabel')}
            name="email"
            onChange={handleChange}
            error={error.email}
            type="email"
          />
          <Input
            label={t('login.passwordLabel')}
            type="password"
            name="password"
            onChange={handleChange}
            error={error.password}
          />
          {!loading &&
            (type === 'login' ? (
              <>
                <Button variant="primary" onClick={handleLogin}>
                  {t('login.buttonLogin')}
                </Button>
                <Button variant="secondary" path="/register">
                  {t('login.buttonRegister')}
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary" onClick={handleRegister}>
                  {t('register.buttonRegister')}
                </Button>
                <Button variant="secondary" path="/">
                  {t('register.buttonBack')}
                </Button>
              </>
            ))}
        </>
      )}

      {loginInfo.id && (
        <>
          <S.SuccessRegister>Cadastro criado com sucesso!</S.SuccessRegister>
          <Button variant="secondary" path="/">
            Fazer login
          </Button>
        </>
      )}
      {loading && <Loader />}
    </S.UserLoginAndRegister>
  )
}

export default UserLoginAndRegister
