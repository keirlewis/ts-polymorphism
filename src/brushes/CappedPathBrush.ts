import Vector from "../painting/Vector";
import CanvasWrapper from "../painting/CanvasWrapper";
import PathBrush from "./PathBrush";
import colours from "../painting/colours";

export default class CappedPathBrush extends PathBrush {
  public name = "Capped Path Brush";

  onDragStart(canvas: CanvasWrapper, pos: Vector) {
    super.onDragStart(canvas, pos);
    canvas.fillCircle(pos, 20, colours.black);
  }

  onDragEnd(canvas: CanvasWrapper, pos: Vector) {
    super.onDragEnd(canvas, pos);
    canvas.fillCircle(pos, 30, colours.yellow);
  }
}
