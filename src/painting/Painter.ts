import interact from "interactjs";
import { Brush } from "../brushes/Brush";
import { CanvasWrapper } from "./CanvasWrapper";
import { Vector } from "./Vector";
import { PathBrush } from "../brushes/PathBrush";

export type InteractEvent = {
  clientX: number;
  clientY: number;
  dx: number;
  dy: number;
};

export class Painter {
  private brush: Brush;

  constructor(canvas: CanvasWrapper, initialBrush?: Brush) {
    this.brush = initialBrush || new PathBrush();

    interact(canvas.canvasElement)
      .on("tap", (event: InteractEvent) =>
        this.brush.onTap(canvas, this.eventToPositionVector(event))
      )
      .draggable({
        onstart: (event: InteractEvent) =>
          this.brush.onDragStart(canvas, this.eventToPositionVector(event)),
        onmove: (event: InteractEvent) =>
          this.brush.onDragMove(
            canvas,
            this.eventToPositionVector(event),
            this.eventToDeltaVector(event)
          ),
        onend: (event: InteractEvent) =>
          this.brush.onDragEnd(canvas, this.eventToPositionVector(event)),
        cursorChecker: () => "crosshair",
      });
  }

  setBrush(b: Brush) {
    this.brush = b;
  }

  private eventToPositionVector(event: InteractEvent): Vector {
    return new Vector(event.clientX, event.clientY);
  }

  private eventToDeltaVector(event: InteractEvent): Vector {
    return new Vector(event.dx, event.dy);
  }
}
