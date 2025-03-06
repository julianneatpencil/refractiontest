import { Canvas, useLoader } from '@react-three/fiber';
import { MeshRefractionMaterial, OrbitControls } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

function RefractionScene() {
  const texture = useLoader(RGBELoader, `${import.meta.env.BASE_URL}material/aerodynamics_workshop_1k.hdr`);

  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} castShadow />

      <mesh castShadow receiveShadow>
        <icosahedronGeometry />
        <MeshRefractionMaterial envMap={texture} />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}

function PlainScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} castShadow />

      <mesh castShadow receiveShadow>
        <icosahedronGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100vw', height: '100vh' }}>
      <RefractionScene />
      <PlainScene />
    </div>
  );
}

export default App;
