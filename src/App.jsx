/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Cyl from "./Cyl";
import "./style.css";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />

        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={5.0}
            radius={1.0}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
