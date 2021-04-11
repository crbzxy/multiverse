import React from "react";
import prevportal from "../img/Prevportal.png";


require("aframe");
require("aframe-environment-component");
require("aframe-liquid-portal-shader");
require("aframe-event-set-component");

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
            <a-assets>
              {/* <a-asset-item id="cristal" src={cristal}></a-asset-item> */}
              <img id="demo" alt="hola" src={prevportal} crossorigin="anonymous" />
              
            </a-assets>

            <a-entity
              environment="preset: default; castShadow: true; fog:0.7; groundColor:white; groundColor2:#fcfcfc"
              scale="2 1 2"
              shadow="receive: true"
            />

            <a-camera position="3 7 2">
              <a-cursor></a-cursor>
            </a-camera>
            {/* hoja de usuario */}
            {/* <a-plane
              position="2.3 8 -10"
              rotation="0 0 0"
              scale="20 15 2"
              
            /> */}

            <a-link
              href="https://crbzxy.github.io/helloworld/"
              title="#demo"
              image="#demo"
              position="-1 11 -30"
              
            />

            <a-image
              src="#demo"
              material="shader: liquid-portal"
              scale="20 20 20"
              position="-1 11 -30"
            />
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
