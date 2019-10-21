import { createGlobalStyle } from 'styled-components';
import mealyBackground from './assets/mealyBg.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Verdana, Helvetica, sans-serif;
    background-image: url(${mealyBackground});
    background-attachment: fixed;
  }

  body,h1,h2,ul {
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 0 auto;
    width: 700px;
  }

  @media (max-width: 700px) {
    .container {
      width: auto;
    }
  }

  .ReactModalPortal > div {
    opacity: 0;
  }

  .ReactModalPortal .ReactModal__Overlay {
    transition: opacity 1000ms ease-in-out;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .ReactModalPortal .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModalPortal .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .modal {
    background: #f5874f;
    outline: none;
    padding: 20px;
    text-align: center;
    color: #ffffff;
    min-width: 200px;
  }

  .modal__title {
    margin: 0 0 18px 0;
    font-weight: 500;
    font-size: 14px;
    font-style: italic;
  }

  .modal__msg {
    font-size: 16px;
    font-weight: bold;
  }

  .modal__btn {
    outline: none;
    border: none;
    padding: 5px 10px;
  }

  .modal__btn:hover {
    cursor: pointer;
    background: grey;
    color: white;
  }

  .modal__body {
    font-size: 16px;
    font-weight: 300;
    margin: 0 0 22px 0;
    word-break: break-all;
  }

`;
