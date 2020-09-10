import Brush from "./Brush";
import Vector from "../painting/Vector";
import CanvasWrapper from "../painting/CanvasWrapper";
import logo from "./resources/logo.webp";

export default class StampBrush extends Brush {
  public name = "Stamp Brush";
  private img: HTMLImageElement | undefined;

  constructor() {
    super();
    const image = new Image();
    image.onload = () => (this.img = image);
    image.src = logo;
  }

  onTap(canvas: CanvasWrapper, pos: Vector): void {
    if (this.img) {
      canvas.drawImage(this.img, pos); // Draw when image has loaded
    }
  }
}
