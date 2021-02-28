import { FaSearch, FaPlusCircle } from 'react-icons/fa';

import Header from '../../components/Header';

import {
  Content,
  QuestionBar,
} from './styles';

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Header />

      <Content>
        <div className="title container">
          <h1>FAQ - Perguntas Frequentes</h1>

          <form className="search">
            <input
              type="text"
              name="search"
              placeholder="Busque por termo..."
            />

            <button>
              <FaSearch />

              Buscar
            </button>
          </form>
        </div>

        <QuestionBar className="container">
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
        </QuestionBar>


      </Content>
    </>
   );
}