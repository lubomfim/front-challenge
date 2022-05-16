import styled from 'styled-components'

export const InputContainer = styled.div`
  max-width: 354px;
  margin: 0 auto;
  position: relative;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid rgba(112, 112, 112, 0.23);
  height: 40px;
  outline: none;
  padding: 0px 10px;
  font-size: 12px;
  transition: all 0.6s ease;

  &:focus {
    border: 1px solid black;
  }

  &.error {
    border-color: red;
  }
`

export const Label = styled.label`
  margin-bottom: 5px;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
`

export const Error = styled.p`
  position: absolute;
  top: 10px;
  right: 0px;
  color: red;
  font-size: 10px;
`
