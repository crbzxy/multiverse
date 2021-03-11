import React from "react";

import ShitHappens from "../models/scene.gltf";

// import campo from "../img/equ.jpg";

const Hueso = () => {
  console.log("hola");
  return (
    <section className="Hueso">
      <h1>xyz</h1>
      <div className="scene">
        <>
          {" "}
          <a-scene background="color: red">
            <a-camera position="2 6 2"></a-camera>
            <a-assets>
              {/* <img id="campo" src={campo} alt="" /> */}
              
              <a-asset-item id="shit" src={ShitHappens}></a-asset-item>
            </a-assets>

            <a-entity
              environment="active: true;
            skyType: gradient; 
            skyColor: #89c2ff; 
            horizonColor: #9ec3ea;
            fog: 0.676; 
            grid:none;
            flatShading:false; 
            ground: canyon; 
            groundYScale: 0.470;
            groundTexture: squares;
            groundColor: #eff2f0; 
            groundColor2: #cfcfcf; 
            groundColor3: #dddddd; 
            dressing: stones;
            dressingAmount:100;
            dressingColor: #5a5a5a; 
            dressingScale: 3.2; 
            dressingVariance: [object Object];  
            dressingOnPlayArea: 0.07; 
            shadowSize: 10.52;
            preset: starry"
            />

            <a-entity
              gltf-model={ShitHappens}
              scale="3 3 3"
              position="0 0 -24.8"
            />

            
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
