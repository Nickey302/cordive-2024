import { Float, Text, OrbitControls } from "@react-three/drei"
import Water from './Water.jsx'

export default function Experience() {
    return (
        <>
            <color args={ [ '#626A88' ] } attach="background"/>

            <OrbitControls makeDefault />

            <ambientLight />
            <directionalLight />

            <Float>
                <Text
                    position={[0, 20, 0]}
                    font='./assets/fonts/Montserrat-VariableFont_wght.ttf'
                    fontSize={20}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={10}
                    bevel={ 10 }
                >
                    DYSTOPIA
                </Text>
            </Float>
            <Water />
        </>
    )
}