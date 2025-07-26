import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const baseUrl = import.meta.env.BASE_URL;

const Rover = () => {
  const { nodes, materials } = useGLTF(
    `${baseUrl}/models/rover/SpacialExplorerRoverT30-1.glb`,
  );

  console.log(nodes);

  return (
    <Canvas>
      {/* <mesh
        geometry={nodes.rover.geometry}
        material={materials.rover}
        position={[0, 0, 0]}
      /> */}
    </Canvas>
  );
};

export default Rover;
