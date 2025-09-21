import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

const baseUrl = import.meta.env.BASE_URL;

function Model() {
  const { scene } = useGLTF(`${baseUrl}/models/rover/rover.glb`);
  return <primitive object={scene} />;
}

export default function RoverModel() {
  return (
    <div className="w-full h-[500px] rounded-lg shadow overflow-hidden">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Bounds fit clip observe margin={1.2}>
          <Model />
        </Bounds>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
