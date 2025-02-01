'use client'

import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"

useGLTF.preload("/robot_playground.glb")

export default function Model() {
  const group = useRef<Group>(null)
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  )
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play()
    }
  }, [actions])

  useEffect(() => {
    if (scene) {
      scene.scale.set(0.5, 0.5, 0.5)
      scene.position.set(1, 0.5, 0)
      scene.rotation.set(0, Math.PI / 4, 0)
    }
  }, [scene])

  return <primitive object={scene} />
}