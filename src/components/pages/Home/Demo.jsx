import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import BoxObj from "./BoxObj"


function Demo() {

    return (
        <>
            <Canvas camera={{position: [-5, 2, 10], fov: 60} }>
                <ambientLight intensity={0.3}/>
                <pointLight position={[10, 10, 10]} />

                <BoxObj wireframe={true} position={[0, 0, 0]} args={[3, 2, 1]} />
                <BoxObj position={[-2, 1, -5]}/>
                <BoxObj position={[5, 1, -2]} />

            </Canvas>
        </>
    );
}

export default Demo;
