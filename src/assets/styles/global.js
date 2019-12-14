import { css } from "styled-components";

const GlobalCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    margin: 0;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0px;
    width: 100%;
    padding: 0px auto;
    background: #fafbfb;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input[type="button" i],
  input[type="submit" i],
  input[type="reset" i],
  input[type="file" i]::-webkit-file-upload-button,
  button {
    padding: 0;
  }
  input {
    -webkit-appearance: none;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 0;
    border: none;
  }

  .scroll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  .scroll::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  .scroll::-webkit-scrollbar-thumb {
    background-color: #7d2ae8;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
`;

export default GlobalCSS;
