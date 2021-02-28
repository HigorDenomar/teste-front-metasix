import styled from 'styled-components';

export const TopQuestionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0168B4;
  color: #FFF;
  max-width: 1760px;
  height: min-content;
  padding: 0 0 0 2rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 500;

  ul {
    height: 3.6rem;
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 2rem;

      & + li {
        border-left: 1px solid #FFF;
      }

      &:first-child {
        cursor: pointer;
      }

      button {
        height: 100%;
        background: transparent;
        border: 0;
        outline: none;
        color: #FFF;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;

        svg {
          margin-right: 1rem;
          font-size: 2rem;
        }
      }
    }
  }
`;

export const QuestionWrapper = styled.ul`
  max-width: 1760px;
  list-style: none;

  > li {
    padding-left: 2.2rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    margin-top: 1rem;
    font-weight: 500;

    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4.2rem;

      span {
        cursor: pointer;
        width: 100%;
      }

      ol {
        list-style: none;
        display: flex;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 2rem;
          min-width: 8.4rem;
          font-size: 2rem;

          &.index {
            font-size: 1.6rem;
          }

          .edit {
            color: #0168B4;
            font-size: 2.2rem;
          }

          .trash {
            fill: #DC3545;
          }

          > svg {
            cursor: pointer;
            transition: 0.3s;

            &:hover {
              filter: brightness(80%);
            }
          }
        }
      }
    }

    > p {
      padding: 0 30rem 1rem 0;
      max-width: 100%;
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 2.2rem;
      color: #707070;
      cursor: pointer;
      display: none;

      &.show-${props => props.answerId} {
        display: block;
      }
    }
  }
`;