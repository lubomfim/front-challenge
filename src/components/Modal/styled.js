import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 300px;

  p {
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
`
