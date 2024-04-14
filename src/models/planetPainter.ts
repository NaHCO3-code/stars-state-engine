import { Vector2 } from "../vector";
import { Body } from "./body";
import { Painter } from "./painter";

export class PlanetPainter extends Painter{
  offset: Vector2;
  elCache: Map<Body, HTMLDivElement>;

  constructor(windowSize: Vector2, lenScale: number, sizeScale: number){
    super(windowSize, lenScale, sizeScale);
    this.offset = Vector2.stretch(this.windowSize, 1 / 2);
    this.elCache = new Map();
  }

  paint(body: Body){
    const drawSize = body.mass * this.sizeScale * this.lenScale;
    const drawPos = Vector2
      .reduce(body.position, this.cameraPos)
      .stretch(this.lenScale)
      .add(this.offset);
    
    if(!this.elCache.has(body)){
      const el = document.createElement("div");
      el.classList.add("body");
      document.getElementById("app")?.appendChild(el);
      this.elCache.set(body, el);
    }

    const el = this.elCache.get(body);
    if(
      drawPos.x < 0 
      || drawPos.x >= this.windowSize.x
      || drawPos.y < 0
      || drawPos.y >= this.windowSize.y
    ){
      el?.style.setProperty("display", "none");
      return;
    }
    el?.style.setProperty("display", "block");
    el?.style.setProperty("--x", `${drawPos.x}px`);
    el?.style.setProperty("--y", `${drawPos.y}px`);
    el?.style.setProperty("--size", `${Math.max(drawSize, 10)}px`);
  }
}