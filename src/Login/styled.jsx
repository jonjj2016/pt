import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  color: #adadad;
  input {
    outline: none;
    border: none;
    &:focus {
      border-color: transparent !important;
    }
  }
  .limiter {
    width: 100%;
    margin: 0 auto;
    .container-login {
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 15px;
      background: #eee;
      .wrap-login {
        width: 350px;
        background-color: #eee;
        border-radius: 10px;
        overflow: hidden;
        padding: 66px 55px 33px 55px;
        box-shadow: 0 0 3px 3px #ddd, 6px 6px 8px 4px rgba(50, 50, 52, 0.7), -6px -6px 8px 4px rgba(244, 244, 244, 0.7);
        /* box-shadow: 0 0 3px 3px #ddd, 6px 6px 8px 4px rgba(13, 136, 136, 0.7), -6px -6px 8px 4px rgba(244, 244, 244, 0.7); */
      }
    }
  }
`;
