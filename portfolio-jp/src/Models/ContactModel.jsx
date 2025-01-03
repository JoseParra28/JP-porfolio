import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "./Loader"
import StarsCanvas from "./Stars"


const Book = () => {
    const book = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf')

    return (
        <mesh>
        <directionalLight intensity={3} position={0, 3, 2}/>
        <ambientLight/>
        <primitive object={book.scene} scale={6} position-y={0} rotation-x={1.3} rotation-z={-0.1} />
        </mesh>
    )
}



 const BookCanvas = () => {
    return (
        <Canvas className="earthCanvas" shadows frameloop="demand" gl={{preserveDrawingBuffer: true}} camera={{fov:45, near:0.1, far:200, position:[-4, 3, 6]}}> 
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls />
        <Book/>
        </Suspense>
        </Canvas>
    )
 }

export default BookCanvas


