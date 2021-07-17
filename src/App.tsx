import './styles/app.scss';
import cat from './public/cat.jpg';
import { styled } from '@linaria/react';

const demo = () => 1;
interface iStyle {
  color: string;
}
const Title = styled.h2<iStyle>`
  color: ${(props) => props.color};
`;
export default function App() {
  return (
    <div>
      <p>App, {demo()}</p>
      <Title color="green">哟哟</Title>
      <img src={cat} alt="cat" />
    </div>
  );
}
