import styled from 'styled-components'

export const UserName = styled.p`
  font-size: 31px;
  font-weight: 600;
  margin: 45px 0px;
`
export const LanguageTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
`

export const LanguagePicker = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 5px 0px 60px;
`

export const LanguagePickerItem = styled.div`
  text-align: center;
  padding: 12px 0px;
  border: 1px solid rgba(112, 112, 112, 0.22);
  font-size: 14px;
  transition: all 0.4s ease;

  &.selected {
    background: #000;
    color: white;
  }
`
