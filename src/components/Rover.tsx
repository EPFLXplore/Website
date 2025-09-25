import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";

interface Props {
  name: string;
  baseUrl: string;
}

function Model({ name, baseUrl }: Props) {
  const { scene } = useGLTF(`${baseUrl}/models/rover/${name}.glb`);
  return <primitive object={scene} />;
}

export default function RoverModel({ name, baseUrl }: Props) {
  return (
    <div className="w-full h-[500px] rounded-lg shadow overflow-hidden">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Bounds fit clip observe margin={1.2}>
          <Model name={name} baseUrl={baseUrl} />
        </Bounds>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}