import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';

import {
  TopQuestionBar,
  QuestionWrapper,
} from './styles';

export default function ListSection({ list, title, isAQuestion = false }) {
  const [answerClass, setAnswerClass] = useState('');
  const [localList, setList] = useState([]);

  function toggleAnswer(id) {
    if(id === answerClass) {
      setAnswerClass('');
      return;
    }

    setAnswerClass(id);
  }

  function handleReverseListOrder() {
    const reversedListOrder = localList.reverse();

    setList([...reversedListOrder]);
  }

  useEffect(() => setList(list), [list]);

  return (
    <>
      <TopQuestionBar>
        <span>{ title }</span>

        <ul>
          <li>
            <button>
              <FaPlusCircle />

              Nova { title }
            </button>
          </li>

          <li onClick={handleReverseListOrder}>Ordem</li>
          <li>Editar</li>
          <li>Excluir</li>
        </ul>
      </TopQuestionBar>

      <QuestionWrapper
        answerId={ answerClass }
        isAQuestion={ isAQuestion }
      >
        { localList?.map((item, index) => (
          <li
            key={ item.id }
          >
            <div className="question">
              <span onClick={() => isAQuestion && toggleAnswer(item.id)}>{ item.title }</span>

              <ol className="options">
                <li className="index">{ item.position }</li>
                <li><FaEdit className="edit"/></li>
                <li><FaTrash className="trash"/></li>
              </ol>
            </div>
            
            { isAQuestion && (
              <p
                className={`${answerClass ? `show-${item.id}` : ''}`}
                onClick={() => toggleAnswer(item.id)}
              >
                { item.answer }
              </p>
            )}
          </li>
        ))}
      </QuestionWrapper>
    </>
  );
}