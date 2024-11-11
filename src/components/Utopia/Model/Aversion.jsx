/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Model = forwardRef(function Model(props, ref) {
  const { nodes, materials } = useGLTF('/assets/Models/Aversion.glb')
  return (
    <group ref={ref} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.Material}
        position={[-0.237, -0.545, 0.055]}
        rotation={[-2.767, -0.23, -2.735]}
        scale={0.211}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.Material}
        position={[-0.466, -0.764, -0.228]}
        rotation={[2.804, -0.248, 2.718]}
        scale={[0.112, 0.131, 0.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Material}
        position={[-0.304, -0.827, -0.071]}
        rotation={[-2.545, -0.313, -2.523]}
        scale={[0.084, 0.098, 0.175]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.Material}
        position={[-0.205, -0.597, -0.194]}
        rotation={[Math.PI, -0.316, Math.PI]}
        scale={0.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.Material}
        position={[-0.474, -0.612, -0.235]}
        rotation={[2.791, -0.385, -3.053]}
        scale={0.162}
      />
    </group>
  )
})  

useGLTF.preload('/assets/Models/Aversion.glb')
