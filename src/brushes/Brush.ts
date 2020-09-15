import { CanvasWrapper } from "../painting/CanvasWrapper";
import { Vector } from "../painting/Vector";

export abstract class Brush {
  public abstract name: string;

  onTap(canvas: CanvasWrapper, position: Vector): void {}
  onDragStart(canvas: CanvasWrapper, position: Vector): void {}
  onDragMove(canvas: CanvasWrapper, position: Vector, delta: Vector): void {}
  onDragEnd(canvas: CanvasWrapper, position: Vector): void {}
  onHoverMove(canvas: CanvasWrapper, position: Vector, delta: Vector): void {}
}
