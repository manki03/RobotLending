import { Link } from 'react-router-dom';
import StarButton from '../components/StarButton';
import WavesBackground from '../components/WavesBackground';

export default function Soon() {
  return (
    <div>
      <WavesBackground />
      <div style={{ position: 'relative', zIndex: 1, fontFamily: 'Inter, sans-serif' }}>
        <div style={{ padding: '2.25rem', textAlign: 'center' }}>
            <div className="centered-box">
        <h1>Проект в разработке</h1>
         <p style={{ fontSize: '1.25rem' }}>Для того чтобы вернуться на главную<br/>нажмите на кнопку ниже</p>
        <Link to="/">
              <StarButton>Вернуться на главную</StarButton>
        </Link>
        </div>
    </div>
    </div>
    </div>
  );
}
