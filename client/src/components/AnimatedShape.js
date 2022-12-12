import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";


export default function AnimatedShape(){
 
  return(
    <Sphere visible args={[1,100, 200]} scale={2.5}>
        <MeshDistortMaterial
        color="rgb(235, 235, 235)"
        attach="material"
        distort={0.3}
        speed={1.5}

        
        />


    </Sphere>
  ) 
}