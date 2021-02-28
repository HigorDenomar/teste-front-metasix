import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/Header';
import QuestionsSection from '../../components/QuestionsSection';

import {
  Content,
} from './styles';

export default function FrequentlyAskedQuestions() {
  const [questions, setQuestions] = useState();

  async function handleGetData() {
    try {
      const { data } = await api.get('parse/classes/FAQ', {
        headers: {
          'X-Parse-Application-Id': process.env.REACT_APP_HEADER_AUTHORIZATION,
        }
      });
  
      setQuestions(data.results);
    } catch (error) {
      console.error("Opss, não foi possível buscar as perguntas...", error);
    }
  }

  useEffect(handleGetData, []);

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