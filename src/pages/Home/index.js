import Header from "../../components/Header";

import {
  Container,
} from './styles';

export default function Home() {
  return (
    <>
      <Header />

      <Container className="container">
        <lottie-player
          src="https://assets5.lottiefiles.com/private_files/lf30_y9czxcb9.json"  background="transparent"
          speed="1"
          loop
          autoplay
        />

        <h3>Opss... nada por aqui, tente outra página.</h3>
      </Container>
    </>
  );
}