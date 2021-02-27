import styled from 'styled-components';

export const Container = styled.nav`
  height: 12rem;

  .container {
    height: 100%;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      color: #707070;

      li {
        display: flex;
        justify-content: center;

        padding: 0.8rem 1.5rem;
        border-radius: 1rem;
        min-width: 8rem;
        box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.3s;

        & + li {
          margin-left: 3rem;
        }

        &:hover {
          background: #0168B4;
          color: #FFF;
          font-weight: 500;
        }
      }
    }
  }
`;