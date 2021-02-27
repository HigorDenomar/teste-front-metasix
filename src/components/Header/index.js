import { FaSignOutAlt, FaTh } from 'react-icons/fa';

import Nav from '../Nav';

import logo from '../../assets/images/logo.png';

import {
  Container,
} from './styles';

export default function Header() {
  
  return (
    <>
      <Container>
        <div className="container">
          <img src={ logo } alt="Prefeitura Boa vista"/>

          <div className="icons-wrapper">
            <div className="icon-item">
              <FaTh />

              <span>Módulos</span>
            </div>

            <div className="icon-item">
              <FaSignOutAlt />

              <span>Log Out</span>
            </div>
          </div>
        </div>
      </Container>

      <Nav>
        <li>Home</li>
        <li>FAQ</li>
        <li>Locais</li>
        <li>Categorias</li>
      </Nav>
    </>
   );
}