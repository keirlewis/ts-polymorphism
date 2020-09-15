import { Brush } from "./Brush";
import { Vector } from "../painting/Vector";
import { CanvasWrapper } from "../painting/CanvasWrapper";
import { colours } from "../painting/colours";

export class DotBrush extends Brush {
  public name = "Dot Brush";
  protected currentLine: Vector[] = [];

  onDragStart(_: CanvasWrapper, pos: Vector) {
    this.currentLine.push(pos);
  }

  onDragMove(canvas: CanvasWrapper, pos: Vector, _: Vector) {
    if (this.currentLine[this.currentLine.length - 1].distanceTo(pos) > 30) {
      this.currentLine.push(pos);
      canvas.fillCircle(pos, 20, colours.red);
    }
  }

  onDragEnd(canvas: CanvasWrapper, _: Vector) {
    this.currentLine = [];
  }

  onTap(canvas: CanvasWrapper, pos: Vector): void {
    canvas.fillCircle(pos, 30, colours.red);
  }
}
