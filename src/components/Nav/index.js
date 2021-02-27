import {
  Container,
} from './styles';

export default function Nav({ children }) {
  return (
    <Container>
      <div className="container">
        <ul>
          { children }
        </ul>
      </div>
    </Container>
   );
}