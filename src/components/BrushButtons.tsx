import React from "react";
import styled from "styled-components";
import Brush from "../brushes/Brush";
import PathBrush from "../brushes/PathBrush";
import BrushButton from "./BrushButton";
import CappedPathBrush from "../brushes/CappedPathBrush";
import DotBrush from "../brushes/DotBrush";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  setBrush: (b: Brush) => void;
}

export default function BrushButtons(props: Props) {
  return (
    <Buttons>
      <BrushButton
        brush={new PathBrush()}
        setBrush={props.setBrush}
      ></BrushButton>
      <BrushButton
        brush={new CappedPathBrush()}
        setBrush={props.setBrush}
      ></BrushButton>
      <BrushButton
        brush={new DotBrush()}
        setBrush={props.setBrush}
      ></BrushButton>
    </Buttons>
  );
}
