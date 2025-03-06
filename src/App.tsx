import { Canvas, useLoader } from '@react-three/fiber';
import { MeshRefractionMaterial, Environment, OrbitControls } from '@react-three/drei';
import { RGBELoader } from 'three/examples/jsm/Addons.js';

function Scene() {
  const texture = useLoader(RGBELoader, '/material/aerodynamics_workshop_1k.hdr');
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} castShadow />


      <mesh castShadow receiveShadow>
        <icosahedronGeometry />
        <MeshRefractionMaterial envMap={texture} />
      </mesh>


      <Environment preset="studio" />
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return <Scene />;
}

export default App;
