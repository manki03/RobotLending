import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import RobotModel from "../components/RobotModel.jsx";
import { Link } from 'react-router-dom';
import StarButton from '../components/StarButton';

export default function Home() {
  console.log('Компонент Home загружен');

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#ffffff', fontFamily: 'Inter, sans-serif' }}>

      {/* Фоновые изображения (звезды, эллипсы) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <img
          src="/bg/Ellipse 13.svg"
          style={{
            position: 'absolute',
            bottom: '-95%',
            left: '70%',
            width: '1000px',
            height: '1600px',
            transform: 'translateX(-50%)',
            pointerEvents: 'none'
          }}
        />
        <img src="/bg/z1.svg" style={{ position: 'absolute', top: '15%', left: '45%', width: '10px', zIndex: 0 }} />
        <img src="/bg/z1.svg" style={{ position: 'absolute', top: '30%', left: '40%', width: '15px', zIndex: 0 }} />
        <img src="/bg/z2.svg" style={{ position: 'absolute', bottom: '50%', left: '50%', width: '50px', zIndex: 0 }} />
        <img src="/bg/z3.svg" style={{ position: 'absolute', bottom: '70%', left: '55%', width: '20px', zIndex: 0 }} />
        <img src="/bg/z3.svg" style={{ position: 'absolute', bottom: '80%', left: '90%', width: '20px', zIndex: 0 }} />
        <img src="/bg/z4.svg" style={{ position: 'absolute', top: '35%', left: '80%', width: '20px', zIndex: 0 }} />
        <img src="/bg/z5.svg" style={{ position: 'absolute', bottom: '40%', left: '85%', width: '50px', zIndex: 0 }} />
      </div>

      {/* Canvas с 3D-моделью */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ width: '100%', height: '100%' }}
          gl={{ alpha: true, preserveDrawingBuffer: true }}
          onCreated={({ gl }) => {
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <Environment preset="sunset" />
          <Suspense fallback={null}>
            <RobotModel 
              metalColor="#999999"
              glassColor="#334155"
              glassRoughness={0.1}
              glassTransmission={1}
              glassOpacity={0.5}
              buttonColor="#5D60EF"
              buttonEmissive="#5D60EF"
            />
            <OrbitControls
              enableRotate={false}
              enableZoom={false}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Контент (заголовок, текст, кнопка) */}
      <div style={{  position: 'absolute', top: '10%', left: '10%', zIndex: 2, color: '#1a1a1a', marginTop: '120px', maxWidth: '400px', background: 'rgba(255,255,255,0.01)' }}>
        <h1 style={{ fontSize: '2.25rem' }}>Привет!<br />Я твой цифровой помощник.</h1>
        <p style={{ fontSize: '1.25rem' }}>Ты управляешь, я исполняю. Готов начать наше маленькое приключение?</p>
    <Link to="/soon">
        <StarButton color="#5d60ef" speed="4s">Запустить бота</StarButton>
    </Link>
      </div>
    </div>
  );
}