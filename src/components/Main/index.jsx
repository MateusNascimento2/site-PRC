import { Container} from "./styles";
import { About } from "../About";
import { Contact } from "../Contact";
import { Slider } from "../Slider";
import { Depoimentos } from "../Depoimentos";
import { Negociacao } from "../Negociacao";



export function Main() {
  return (
    <Container>
      <Slider/>
      <About/>
      <Negociacao/>
      <Depoimentos/>
      <Contact/>
    </Container>
  );
}
