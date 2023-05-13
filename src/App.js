import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Html } from '@react-three/drei'

const round = (n) => Math.round(n * 100) / 100

function Gui() {
  const ref = useRef()
  useFrame(({ mouse }) => {
    ref.current.innerText = `${round(mouse.x)}, ${round(mouse.y)}`
  })
  return (
    <Html>
      <div ref={ref}>Hello world</div>
    </Html>
  )
}

export default function App() {
  return (
    <Canvas>
      <Gui />
    </Canvas>
  )
}
