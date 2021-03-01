import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/Header';
import ListSection from '../../components/ListSection';

import {
  Content,
} from './styles';

export default function FrequentlyAskedQuestions() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [search, setSearch] = useState('');

  async function handleGetData() {
    try {
      const { data } = await api.get('parse/classes/FAQ', {
        headers: {
          'X-Parse-Application-Id': process.env.REACT_APP_HEADER_AUTHORIZATION,
        }
      });

      const result = data.results.map(item => {
        return {
          id: item.objectId,
          title: item.question,
          position: item.position,
          answer: item.answer,
        }
      });
  
      setQuestions(result);
    } catch (error) {
      console.error("Opss, não foi possível buscar as perguntas...", error);
    }
  }

  useEffect(handleGetData, []);

  function handleSearchQuestion(event) {
    event.preventDefault();

    const filtered = questions.filter(({ title }) => {

      return title.toLowerCase().includes(search) && title;
    });

    setFilteredQuestions(filtered);
  }

  return (
    <>
      <Header />

      <Content className="container">
        <div className="title">
          <h1>FAQ - Perguntas Frequentes</h1>

          <form className="search">
            <input
              type="search"
              name="search"
              placeholder="Busque por termo..."
              value={search}
              onChange={event => setSearch(event.target.value.toLowerCase())}
            />

            <button onClick={ handleSearchQuestion }>
              <FaSearch />

              Buscar
            </button>
          </form>
        </div>
        
        <ListSection
          title="Pergunta"
          list={ filteredQuestions.length !== 0 ? filteredQuestions : questions }
          isAQuestion
        />
      </Content>
    </>
  );
}