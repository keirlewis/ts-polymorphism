import Brush from "./Brush";
import Vector from "../painting/Vector";
import CanvasWrapper from "../painting/CanvasWrapper";
import logo from "./resources/logo.webp";

export default class StampBrush extends Brush {
  public name = "Stamp Brush";

  onTap(canvas: CanvasWrapper, pos: Vector): void {
    const image = new Image();
    image.onload = () => canvas.drawImage(image, pos); // Draw when image has loaded
    image.src = logo;
  }
}
