import CanvasWrapper from "../painting/CanvasWrapper";
import Vector from "../painting/Vector";

export default abstract class Brush {
  abstract name: string;

  onTap(canvas: CanvasWrapper, pos: Vector): void {}
  onDragStart(canvas: CanvasWrapper, newPos: Vector): void {}
  onDragMove(canvas: CanvasWrapper, newPos: Vector, delta: Vector): void {}
  onDragEnd(canvas: CanvasWrapper, newPos: Vector): void {}
  onHoverMove(canvas: CanvasWrapper, newPos: Vector, delta: Vector): void {}
}
