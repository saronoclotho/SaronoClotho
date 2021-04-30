import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function BoxObj(props) {

    // This reference will give us direct access to the mesh
    const mesh = useRef();

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        )
    );

    return (
        <mesh
        {...props}
        ref={mesh}
        scale={active ? 2 : 1.5}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={props.args} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} wireframe={hovered || props.wireframe} />
        </mesh>
    );
}

export default BoxObj;
