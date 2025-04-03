import * as React from "react";
import Svg, { Use, Defs, G } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${props.width} ${props.height}`}
      width={props.width}
      height={250}
    >
      <Defs>
      </Defs>
      <G id="Grupo 1">
        <Use id="Objeto inteligente vectorial" href="#img1" x="0" y="0" />
      </G>
    </Svg>
  );
}
