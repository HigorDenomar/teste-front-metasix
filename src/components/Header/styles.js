import styled from 'styled-components';

export const Container = styled.header`
  background-color: #0168B4;
  color: #FFF;
  height: 9rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 2rem;
    
    a, img {
      height: 100%;
    }

    .icons-wrapper {
      display: flex;
      align-items: center;

      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.3s;
        cursor: pointer;

        svg {
          font-size: 2rem;
          margin-bottom: 0.3rem;
        }

        span {
          font-weight: 500;
          font-size: 1.4rem;
        }

        & + .icon-item {
          margin-left: 3rem;
        }

        &:hover {
          color: #303030;
        }
      }
    }
  }
`;