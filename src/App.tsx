import './styles/app.module.scss';
import cat from './public/cat.jpg';

export default function App() {
  const demo = () => 1;
  return (
    <div>
      <p>App, {demo()}</p>
      <img src={cat} alt="cat" />
    </div>
  );
}
