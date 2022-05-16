import { createGlobalStyle } from 'styled-components'

const Root = createGlobalStyle`
  * {
    font-size: 100%;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  body {
    box-sizing: border-box;
    min-height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
  }

  input, textarea, label, button, ::placeholder {
   font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      cursor: pointer;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

`
export default Root
