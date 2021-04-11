import React from "react";

import galeria from "../models/galeria.gltf";
require("aframe");
require("aframe-environment-component");

// import campo from "../img/equ.jpg";

const Hueso = () => {
  console.log("hola");
  return (
    <section className="Hueso">
      <h1>xyz</h1>
      <div className="scene">
        <>
          {" "}
          <a-scene>
            <a-entity
              environment="preset: default; fog:0.7; groundColor:white; groundColor2:#fcfcfc"
              scale="2 1 2"/>
            
            <a-camera position="3 7 2"></a-camera>
            <a-plane position="1.5 8 -10" rotation="0 0 0" scale="20 18 0"/>
            
            <a-assets>
              <a-asset-item id="galeria" src={galeria}></a-asset-item>
            </a-assets>

            <a-entity
              gltf-model={galeria}
              scale="5 8 5"
              position="0 0 0"
             
              shadow="receive: false"
            />
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
