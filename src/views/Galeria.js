import React from "react";
import prevportal from "../img/Prevportal.png";

require("aframe");
require("aframe-environment-component");
require("aframe-liquid-portal-shader");
require("aframe-event-set-component");
import("aframe-gif-shader");

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
            <a-camera position="3 7 2">
              <a-cursor
                material="color: green"
                cursor="fuse: false; fuseTimeout: 1000"
              ></a-cursor>
            </a-camera>

            <a-assets>
              {/* <a-asset-item id="cristal" src={cristal}></a-asset-item> */}
              <img
                id="demo"
                alt="hola"
                src={prevportal}
                crossorigin="anonymous"
              />
            </a-assets>
            <a-entity
              geometry="primitive: plane;"
              material="shader:gif;src:url(https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif);"
              scale="6 6 6"
              position="50 8 -30"
            ></a-entity>

            <a-entity
              environment="preset:checkerboard; castShadow: true; fog:0.7; groundColor:white; groundColor2:#fcfcfc"
              scale="2 1 2"
              shadow="receive: true"
            />

            {/* hoja de usuario */}
            {/* <a-plane
              position="2.3 8 -10"
              rotation="0 0 0"
              scale="20 15 2"
              
            /> */}

            <a-link
              href="https://crbzxy.github.io/errar/"
              title="Errar-Possibility of light"
              scale="6 6 6"
              position="-1 8 -25"
              image="#demo"
              borderColor="black"
              event-set__enter="_event: mouseenter; _target: #demo; visible: true"
              event-set__leave="_event: mouseleave; _target: #demo; visible: false"
            >
              <a-image
                src="#demo"
                material="shader: liquid-portal"
                scale="2 2 2"
                position="0 0 0.01"
              />
            </a-link>

            <a-link
              href="https://crbzxy.github.io/xyz/"
              title="xyz"
              scale="6 6 6"
              position="30 8 -30"
              image="#demo"
              backgroundColor="blue"
            >
              <a-image
                src="#demo"
                material="shader: liquid-portal"
                scale="2 2 2"
                backgroundColor="blue"
                position="0 0 0.01"
              />
            </a-link>
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
