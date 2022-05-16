import styled from 'styled-components'

export const Loader = styled.div`
  cursor: wait;
  width: 30px;
  height: 30px;
  border: solid 3px transparent;
  border-left-color: #000;
  border-right-color: #000;
  border-top-color: #000;
  animation: rotating 0.5s 0.25s linear infinite;
  border-radius: 50%;
  margin: 50px auto 0px;

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
