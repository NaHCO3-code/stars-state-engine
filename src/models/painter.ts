import { Vector2 } from "../vector";
import { Body } from "./body";

export abstract class Painter{
  windowSize: Vector2;
  lenScale: number;
  sizeScale: number;
  cameraPos: Vector2;

  constructor(windowSize: Vector2, lenScale: number, sizeScale: number){
    this.windowSize = windowSize;
    this.lenScale = lenScale;
    this.sizeScale = sizeScale;
    this.cameraPos = new Vector2(0, 0);
  }

  setCameraPos(pos: Vector2){
    this.cameraPos = pos;
  }

  abstract paint(body: Body): void;
}