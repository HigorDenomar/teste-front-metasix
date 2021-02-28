import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/Header';
import QuestionsSection from '../../components/QuestionsSection';

import {
  Content,
  QuestionBar,
} from './styles';

export default function FrequentlyAskedQuestions() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    setQuestions(api.results);
  }, []);

  return (
    <>
      <Header />

      <Content className="container">
        <div className="title">
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

        <QuestionsSection questions={ questions } />
      </Content>
    </>
  );
}