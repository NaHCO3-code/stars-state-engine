import { Body } from "./body";
import { Vector2 } from "../vector";

export class Planet extends Body{
  element: HTMLDivElement
  scale: number
  sizeScale: number

  constructor(pos: Vector2, mass: number, velocity: Vector2){
    super(pos, mass, velocity);
    
    this.scale = 1/5;
    this.sizeScale = 10;
    this.element = document.createElement("div");
    this.element.setAttribute("class", "body");

    document.getElementById("app")?.appendChild(this.element);
  }

  draw(basis: Vector2, offset: Vector2){
    let drawSize = this.mass * this.sizeScale;
    let drawPos = Vector2
      .reduce(this.position, basis)
      .stretch(this.scale)
      .add(offset)
      .reduce(new Vector2(drawSize, drawSize).stretch(1/2));

    this.element.style.setProperty("--x", `${drawPos.x}px`);
    this.element.style.setProperty("--y", `${drawPos.y}px`);
    this.element.style.setProperty("--size", `${drawSize}px`);
  }

  static init(){}
}