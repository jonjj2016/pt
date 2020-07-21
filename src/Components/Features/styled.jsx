import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-block;
  padding-bottom: 5rem;
  .item-a {
    grid-area: header;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    background-color: #122438;
    box-shadow: 5px 9px 12px rgba(0, 0, 0, 0.5), -5px -9px 12px rgba(255, 255, 255, 0.05) !important;
    h2 {
      text-shadow: 4px 7px 12px rgba(0, 0, 0, 0.5), -4px -7px 12px rgba(255, 255, 255, 0.05);
      font-size: 10rem;
      color: #122438;
      span {
        color: #122438;
      }
    }
  }
  .item-b {
    grid-area: main;
  }
  .item-c {
    grid-area: sidebar;
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }
  .info {
    width: 60%;
    padding: 0rem;
    height: 100%;
    font-size: 1.3rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
      i {
        margin-right: 1rem;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    @media only screen and (max-width: 1100px) {
      font-size: 1.3rem;
      line-height: 2;
      padding-top: 1rem;
      width: 100%;
      padding: 2rem;
      div {
        padding: 0.2rem 2rem;
        i {
          margin-right: 0.5rem;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
    @media only screen and (max-width: 650px) {
      font-size: 1rem;
    }
  }
  .item-d {
    grid-area: footer;
    background-color: #122438;
    display: flex;
    color: #999;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(145deg, #102032, #13273c);
    box-shadow: 29px 29px 57px #0f1f30, -29px -29px 57px #152940;
  }
  .buttons {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: 650px) {
      width: 100%;
    }
  }
  .form {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 3rem;
    color: #666;
    h2 {
      font-size: 3rem;
      text-transform: uppercase;
    }
    p {
      line-height: 1.6;
    }
    a {
      color: #444;
      text-decoration: none;
      font-weight: bolder;
    }
    input {
      display: block;
      width: 100%;
      height: 3rem;
      background-color: transparent;
      border: none;
      border-radius: 15px;
      margin: 1rem auto;
      outline: none;
      font-size: 1rem;
      padding: 1rem;
      box-sizing: border-box;
      color: #666;
      transition: 500ms;
      box-shadow: inset 5px 9px 12px rgba(0, 0, 0, 0.05), inset -5px -9px 12px rgba(255, 255, 255, 0.5);
      &:focus {
        /* box-shadow: inset 3px 5px 10px #adadad, inset -3px -5px 10px #ffffff; */
      }
    }
    textarea {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      max-width: 100%;
      min-width: 100%;
      max-height: 400px;
      margin: 1rem auto;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      padding: 1rem;
      box-sizing: border-box;
      color: #666;
      transition: 500ms;
      box-shadow: inset 5px 9px 12px rgba(0, 0, 0, 0.05), inset -5px -9px 12px rgba(255, 255, 255, 0.5);
      &:focus {
      }
    }
  }
  .item {
    /* box-shadow: 3px 5px 10px #adadad, -3px -5px 10px #ffffff; */
    /* box-shadow: 30px 30px 38px #bcbcbc, -30px -30px 38px #fefefe; */
    box-shadow: 5px 9px 12px rgba(0, 0, 0, 0.08), -5px -9px 12px rgba(255, 255, 255, 0.5);

    border-radius: 0px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
    transition: 300ms;
    cursor: pointer;
    &:hover {
      /* box-shadow: 0px 2px 5px #adadad, 0px -2px 5px #ffffff; */
    }
  }
  .container {
    display: grid;
    width: 100% !important;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */

    grid-gap: 2rem;
    grid-auto-rows: minmax(40vh, auto);
    grid-template-areas:
      'header header sidebar sidebar'
      'main main sidebar sidebar'
      'main main footer footer';
  }
  @media only screen and (max-width: 1100px) {
    .container {
      width: 100% !important;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
    .form {
      padding: 0.8rem;
      h2 {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
`;
