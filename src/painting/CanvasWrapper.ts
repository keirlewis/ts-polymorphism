import Vector from "./Vector";
import colours from "./colours";

export default class CanvasWrapper {
  private _canvasElement: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private size: Vector = Vector.zeroVector();
  private dpr = window.devicePixelRatio || 1;

  constructor(canvasID: string) {
    this._canvasElement = document.getElementById(
      canvasID
    ) as HTMLCanvasElement;

    const ctx = this._canvasElement?.getContext("2d");
    if (!ctx) throw new Error("Canvas element does not exist");
    this.ctx = ctx;

    window.addEventListener("resize", () => this.resizeCanvas(), true);

    this.resizeCanvas();
  }

  get canvasElement(): HTMLCanvasElement {
    return this._canvasElement;
  }

  resizeCanvas(): void {
    const canvasSize = this._canvasElement.getBoundingClientRect();
    this._canvasElement.width = this.size.x = canvasSize.width * this.dpr;
    this._canvasElement.height = this.size.y = canvasSize.height * this.dpr;
    this.fillBackground();
  }

  fillBackground(): void {
    this.ctx.fillStyle = colours.background;
    this.ctx.fillRect(0, 0, this.size.x, this.size.y);
  }

  fillRect(pos: Vector, width: number, height: number, colour: string): void {
    this.ctx.fillStyle = colour;
    const canvasPos = this.screenToCanvas(pos);
    this.ctx.fillRect(canvasPos.x, canvasPos.y, width, height);
  }

  fillRectCentred(pos: Vector, width: number, height: number): void {
    this.ctx.fillStyle = colours.red;
    const canvasPos = this.screenToCanvas(pos);
    this.ctx.fillRect(
      canvasPos.x - width / 2,
      canvasPos.y - height / 2,
      width,
      height
    );
  }

  drawPath(path: Vector[], width: number, colour: string): void {
    const canvasPath = path.map((v) => this.screenToCanvas(v));

    this.ctx.strokeStyle = colour;
    this.ctx.lineWidth = width;

    this.ctx.beginPath();
    this.ctx.moveTo(canvasPath[0].x, canvasPath[0].y);

    for (let i = 1; i < canvasPath.length; i++) {
      this.ctx.lineTo(canvasPath[i].x, canvasPath[i].y);
    }

    this.ctx.stroke();
  }

  fillCircle(pos: Vector, radius: number, colour: string): void {
    const canvasPos = this.screenToCanvas(pos);
    this.ctx.fillStyle = colour;
    this.ctx.beginPath();
    this.ctx.arc(canvasPos.x, canvasPos.y, radius, 0, Math.PI * 2); //, startAngle, endAngle, anticlockwise);
    this.ctx.fill();
  }

  drawImage(image: HTMLImageElement, pos: Vector): void {
    const canvasPos = this.screenToCanvas(pos);
    this.ctx.drawImage(
      image,
      canvasPos.x - image.width / 2,
      canvasPos.y - image.height / 2
    );
  }

  private screenToCanvas(pos: Vector): Vector {
    var rect = this._canvasElement.getBoundingClientRect();
    return new Vector(pos.x - rect.left, pos.y - rect.top).multiplyScalar(
      this.dpr
    );
  }
}
