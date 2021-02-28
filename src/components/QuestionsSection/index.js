import { useState } from 'react';
import { FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';

import {
  TopQuestionBar,
  QuestionWrapper,
} from './styles';

export default function QuestionsSection({ questions, editable = true }) {
  const [answerClass, setAnswerClass] = useState('');

  function toggleAnswer(id) {
    if(id === answerClass) {
      setAnswerClass('');
      return;
    }

    setAnswerClass(id);
  }

  return (
    <>
      <TopQuestionBar>
        <span>Pergunta</span>

        <ul>
          <li>
            <button>
              <FaPlusCircle />

              Nova Pergunta
            </button>
          </li>

          <li>Ordem</li>
          <li>Editar</li>
          <li>Excluir</li>
        </ul>
      </TopQuestionBar>

      <QuestionWrapper answerId={ answerClass }>
        { questions?.map((question, index) => (
          <li
            key={ question.objectId }
          >
            <div className="question">
              <span onClick={() => toggleAnswer(question.objectId)}>{ question.question }</span>

              { editable && (
                <ol className="options">
                  <li className="index">{ index + 1 }</li>
                  <li><FaEdit className="edit"/></li>
                  <li><FaTrash className="trash"/></li>
                </ol>
              )}
            </div>

            <p
              className={`${answerClass ? `show-${question.objectId}` : ''}`}
              onClick={() => toggleAnswer(question.objectId)}
            >
              { question.answer }
            </p>
          </li>
        ))}
      </QuestionWrapper>
    </>
  );
}