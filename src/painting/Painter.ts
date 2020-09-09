import Brush from "../brushes/Brush";
import CanvasWrapper from "./CanvasWrapper";
import interact from "interactjs";
import Vector from "./Vector";

type InteractEvent = {
  clientX: number;
  clientY: number;
  dx: number;
  dy: number;
};

export default class Painter {
  private brush: Brush | null = null;

  constructor(canvas: CanvasWrapper) {
    interact(canvas.canvasElement).draggable({
      onstart: (event: InteractEvent) => {
        this.brush?.onDragStart(canvas, this.eventToPos(event));
      },
      onmove: (event: InteractEvent) => {
        this.brush?.onDragMove(
          canvas,
          this.eventToPos(event),
          this.eventToDelta(event)
        );
      },
      onend: (event: InteractEvent) => {
        this.brush?.onDragEnd(canvas, this.eventToPos(event));
      },
      cursorChecker: () => "crosshair",
    });
  }

  setBrush(b: Brush) {
    this.brush = b;
  }

  private eventToPos(event: InteractEvent): Vector {
    return new Vector(event.clientX, event.clientY);
  }

  private eventToDelta(event: InteractEvent): Vector {
    return new Vector(event.dx, event.dy);
  }
}
