import { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from "../../components/Header";
import ListSection from "../../components/ListSection";

import {
  Content,
} from './styles';

export default function Categories() {
  const [categories, setCategories] = useState([]);

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
          title: item.group,
          position: item.position,
        }
      });

      const filtered = result.filter(function(item, index, data) {
        if(index === 0) {
          return item;
        }
        
        return data[index-1].title !== item.title;
      });
  
      setCategories(filtered);
    } catch (error) {
      console.error("Opss, não foi possível buscar as perguntas...", error);
    }
  }

  useEffect(handleGetData, []);
  
  return (
    <>
      <Header />

      <Content className="container">
        <ListSection
          title="Categoria"
          list={categories}

        />
      </Content>
    </>
  );
}