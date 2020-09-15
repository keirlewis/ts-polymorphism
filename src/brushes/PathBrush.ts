import { Brush } from "./Brush";
import { Vector } from "../painting/Vector";
import { CanvasWrapper } from "../painting/CanvasWrapper";
import { colours } from "../painting/colours";

export class PathBrush extends Brush {
  public name = "Path Brush";
  protected currentLine: Vector[] = [];

  onDragMove(canvas: CanvasWrapper, pos: Vector, _: Vector) {
    this.currentLine.push(pos);
    canvas.drawPath(this.currentLine, 15, colours.black);
  }

  onDragEnd(canvas: CanvasWrapper, _: Vector) {
    this.currentLine = [];
  }
}
