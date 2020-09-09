import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Canvas from "./components/Canvas";
import Painter from "./painting/Painter";
import CanvasWrapper from "./painting/CanvasWrapper";
import Brush from "./brushes/Brush";
import BrushButtons from "./components/BrushButtons";

const AppContainer = styled.div`
  background-color: rgb(41, 44, 51);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const canvasID = "paint-canvas";

  const [painter, setPainter] = useState<Painter>();
  useEffect(() => {
    const canvasWrapper = new CanvasWrapper(canvasID);
    setPainter(new Painter(canvasWrapper));
  }, []);

  return (
    <AppContainer>
      <BrushButtons setBrush={(b: Brush) => painter?.setBrush(b)} />
      <Canvas id={canvasID} />
    </AppContainer>
  );
}

export default App;
