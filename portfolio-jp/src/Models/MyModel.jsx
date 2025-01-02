import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei"
import { TorusGeometry } from "three"



export const MyModel = () => {

    const myModel = useGLTF('./myModel/model.gltf')
    
    return (
        <Canvas className="about-canvas">
        <Environment preset="city"/>
        <color args={['#040404']} attach="background"/>   
        <mesh >
        
     <PresentationControls  global rotation={[0.13, 0, 0]} >
        <Float rotationIntensity={0.2}>
        <rectAreaLight width={2.05} height={1.65} intensity={650} color={'#96cf24'} rotation={[ 0.5, Math.PI, 0]} position={[0,0.55, -1.15]}/> 
          <primitive 
          object={myModel.scene} position={[-8,-5,-1]} rotation-y={-1} scale={1.9}>
          </primitive>
          </Float>
          </PresentationControls>
          <ContactShadows  position-y={-1.4} opacity={0.4} scale={20} blur={3} color={"#aba6a6"}/>
        </mesh>
    </Canvas>


    )
} 