import Brush from "../brushes/Brush";
import CanvasWrapper from "./CanvasWrapper";
import interact from "interactjs";
import Vector from "./Vector";
import PathBrush from "../brushes/PathBrush";

type InteractEvent = {
  clientX: number;
  clientY: number;
  dx: number;
  dy: number;
};

export default class Painter {
  private brush: Brush | null = null;

  constructor(canvas: CanvasWrapper, initialBrush?: Brush) {
    this.brush = initialBrush || new PathBrush();
    interact(canvas.canvasElement)
      .on("tap", (event: InteractEvent) =>
        this.brush?.onTap(canvas, this.eventToPos(event))
      )
      .draggable({
        onstart: (event: InteractEvent) =>
          this.brush?.onDragStart(canvas, this.eventToPos(event)),
        onmove: (event: InteractEvent) =>
          this.brush?.onDragMove(
            canvas,
            this.eventToPos(event),
            this.eventToDelta(event)
          ),
        onend: (event: InteractEvent) =>
          this.brush?.onDragEnd(canvas, this.eventToPos(event)),
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
