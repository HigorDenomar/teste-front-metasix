import { FaSignOutAlt, FaTh } from 'react-icons/fa';

import {
  Container,
} from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  
  return (
    <Container>
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
    </Container>
   );
}