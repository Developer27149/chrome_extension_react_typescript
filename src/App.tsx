import './styles/app.scss';
import { styled } from '@linaria/react';
import cat from './public/cat.jpg';

const demo = () => 1;
interface IProperties {
  color: string;
}
const Title = styled.h2<IProperties>`
  color: ${(propertices) => propertices.color};
`;

const App: React.FC = () => (
  <div>
    <p>App, {demo()}</p>
    <Title color="green">哟哟</Title>
    <img src={cat} alt="cat" />
  </div>
);

export default App;
