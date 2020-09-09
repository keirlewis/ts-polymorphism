import React from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  flex: 1;
  padding: 30px;
  min-height: 0;
`;

const StyledCanvas = styled.canvas`
  border-radius: 8px;
  touch-action: none;
  width: 100%;
  height: 100%;
`;

interface Props {
  id: string;
}

export default function Canvas(props: Props) {
  return (
    <CanvasContainer>
      <StyledCanvas id={props.id} />
    </CanvasContainer>
  );
}
