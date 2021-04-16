import React from "react";
import prevportal from "../img/Prevportal.png";
import prevportalhappy from "../img/Prevportalhappy.png";
import prevportalunite from "../img/Prevportalunite.png";
import prevportalegg from "../img/Prevportalegg.png";

require("aframe");
require("aframe-environment-component");
require("aframe-liquid-portal-shader");
require("aframe-event-set-component");
//import("aframe-gif-shader");

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
                material="color:#76ff03"
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
                <img
                id="egg"
                alt="hola"
                src={prevportalegg}
                crossorigin="anonymous"
              />
              <img
                id="happy"
                alt="hola"
                src={prevportalhappy}
                crossorigin="anonymous"
              />

<img
                id="unite"
                alt="unite"
                src={prevportalunite}
                crossorigin="anonymous"
              />
            </a-assets>
            {/* <a-entity
              geometry="primitive: plane;"
              material="shader:gif;src:url(https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif);"
              scale="6 6 6"
              position="50 8 -30"
            ></a-entity> */}

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
            <a-torus-knot
              arc="360"
              p="2"
              q="3"
              radius="200"
              radius-tubular="0.5"
              opacity="0.5"
              src="http://carlosboyzo.com/rarible/img.jpeg"
              animation="property: rotation; to: 360 0 0; dur: 50000; easing: linear; loop: NaN"
              material=""
              geometry=""
              rotation="65.60284511050699 0 0"
              
            />
            <a-torus-knot
              arc="360"
              p="2"
              q="8"
              radius="180"
              radius-tubular="0.5"
              opacity="0.5"
              src="http://carlosboyzo.com/rarible/img.jpeg"
              animation="property: rotation; to: 360 0 0; dur: 50000; easing: linear; loop: NaN"
              material=""
              geometry=""
              rotation="65.60284511050699 0 0"
              
            />
            <a-link
              href="https://crbzxy.github.io/errar/"
              title="Errar-Possibility of light"
              scale="6 6 6"
              position="-10 8 -45"
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
              href="https://stemkoski.github.io/A-Frame-Examples/fireworks.html"
              title="What Is Happiness? "
              scale="6 6 6"
              position="30 8 -85"
              image="#demo"
              backgroundColor="blue"
            >
              <a-image
                src="#happy"
                material="shader: liquid-portal"
                scale="2 2 2"
                backgroundColor="blue"
                position="0 0 0.01"
              />
            </a-link>

            <a-link
              href="https://crbzxy.github.io/xyz/"
              title="?????"
              scale="6 6 6"
              position="-80 8 -65"
              image="#egg"
              backgroundColor="blue"
            >
              <a-image
                src="#egg"
                material="shader: liquid-portal"
                scale="2 2 2"
                backgroundColor="blue"
                position="0 0 0.01"
              />
            </a-link>



            <a-link
              href="https://crbzxy.github.io/unite/"
              title="a la recherche de l'unite 4"
              scale="6 6 6"
              position="50 8 -45"
              image="#unite"
              backgroundColor="blue"
            >
              <a-image
                src="#unite"
                material="shader: liquid-portal"
                scale="2 2 2"
                backgroundColor="blue"
                position="0 0 0.01"
              />
            </a-link>
            <a-entity
              geometry="primitive: octahedron"
              position="-10 11 -30.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />
            <a-entity
              geometry="primitive: octahedron"
              position="-50 8 -30.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-10 6 -50.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-10 12 -90.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-80 2 -56.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-32 4 -10.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-12 1 -6.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-16 16 30.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-6 8 11.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="45 20.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />
            <a-entity
              geometry="primitive: octahedron"
              position="10 11 -30.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />
            <a-entity
              geometry="primitive: octahedron"
              position="-90 12 -30.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="19 15 -50.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-22 12 -90.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-99 12 -56.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-8 14 9.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-12 12 6.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-16 16 30.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="-6 8 11.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />

            <a-entity
              geometry="primitive: octahedron"
              position="19 20.01"
              rotation="45 0 180"
              animation="property: rotation; to: 0 360 0; dur: 10000 easing: easeInExpo; loop: true"
            />
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
