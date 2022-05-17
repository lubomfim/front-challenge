import styled from 'styled-components'

export const InputContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 354px;

  textarea {
    height: 170px;
    resize: none;
    padding: 10px;
    width: 100%;
  }
`

export const Input = styled(({ as }) => as)`
  display: block;
  width: 100%;
  border: 1px solid rgba(112, 112, 112, 0.23);
  height: 40px;
  outline: none;
  padding: 0px 10px;
  font-size: 12px;
  transition: all 0.6s ease;

  &[type='color'] {
    padding: 0px;
  }

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
