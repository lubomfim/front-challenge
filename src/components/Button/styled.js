import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button`
  max-width: 354px;
  width: 100%;
  margin: 0 auto 10px;
  height: 40px;
  max-height: 40px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;

  background-color: ${({ variant }) => (variant === 'primary' ? '#000' : '#fff')};
  color: ${({ variant }) => (!(variant === 'primary') ? '#000' : '#fff')};
  border-color: #000;
  outline: none;
  transition: all 0.6s ease;

  &:hover {
    background-color: ${({ variant }) => (!(variant === 'primary') ? '#000' : '#fff')};
    color: ${({ variant }) => (variant === 'primary' ? '#000' : '#fff')};
  }
`

export const ButtonLink = styled(Link)`
  display: block;
  max-width: 354px;
  width: 100%;
  margin: 0 auto 10px;
  height: 40px;
  max-height: 40px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;

  background-color: ${({ variant }) => (variant === 'primary' ? '#000' : '#fff')};
  color: ${({ variant }) => (!(variant === 'primary') ? '#000' : '#fff')};
  border: 2px solid #000;
  outline: none;
  transition: all 0.6s ease;

  &:hover {
    background-color: ${({ variant }) => (!(variant === 'primary') ? '#000' : '#fff')};
    color: ${({ variant }) => (variant === 'primary' ? '#000' : '#fff')};
  }
`
