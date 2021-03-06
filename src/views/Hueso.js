import React from "react";

import ShitHappens from "../models/scene.gltf";
import Titulo from "../models/titulo.gltf";
import Gallina from "../models/gallina.gltf";
import galeria from "../models/galeria.gltf";
require("aframe");

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
            <a-camera position="3 7 2"></a-camera>
            <a-cursor></a-cursor>
            <a-entity daydream-controls></a-entity>
            <a-assets>
              {/* <img id="campo" src={campo} alt="" /> */}

              <a-asset-item id="shit" src={ShitHappens}></a-asset-item>
              <a-asset-item id="Titulo" src={Titulo}></a-asset-item>
              <a-asset-item id="Gallina" src={Gallina}></a-asset-item>
              <a-asset-item id="galeria" src={galeria}></a-asset-item>
            </a-assets>

            <a-plane
              color="#CCC"
              height="2000"
              width="2000"
              rotation="-90 0 0"
              shadow="receive: true"
            ></a-plane>
            <a-entity
              gltf-model={Titulo}
              scale="1 1 1"
              position="2 8.2 -14.8"
            />
           

            <a-entity
              light="type: point; intensity: 0.6; castShadow: true; color: #fff"
              position="2 4 0"
            />

            <a-box
              position=" 2 3 -3"
              rotation="2 45 0"
              color="#4CC3D9"
              shadow="receive: true"
            />
            <a-entity
              gltf-model={ShitHappens}
              scale="2 2 2"
              position="0 0.3 -25.8"
              shadow="receive: true"
            />

            <a-entity
              animation="property: position; to: 1 1 -10; dur: 80000; easing: linear; loop: true"
              gltf-model={Gallina}
              scale="4 4 4"
              position="-6 0.3 -28.8"
            />
            <a-entity
              gltf-model={galeria}
              scale="5 5 5"
              position="0 0 0"
              shadow="receive: true"
            />
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
