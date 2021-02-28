import styled from 'styled-components';

export const Content = styled.main`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    
    h1 {
      font-size: 3rem;
    }

    .search {
      display: flex;
      align-items: center;
      height: 3.7rem;
      margin-right: -1.5rem;

      input {
        width: 27.9rem;
        padding: 0 1rem;
        border: 1px solid #eee;
        border-radius: 1rem;
        margin-right: 1rem;
        outline: none;
        height: 100%;
        transition: 0.3s;

        &:focus {
          border-color: #0168B4;
        }
      }

      button {
        height: 100%;
        padding: 0 1rem;
        border: 0;
        border-radius: 1rem;
        background: #0168B4;
        border: 2px solid #0168B4;
        color: #FFF;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;

        svg {
          margin-right: 1rem;
          font-size: 1.8rem;
        }

        &:hover {
          background: transparent;
          color: #0168B4;
        }
      }
    }
  }
`;