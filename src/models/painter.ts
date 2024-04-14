import { Vector2 } from "../vector";
import { Body } from "./body";

export interface ViewConf{
  windowSize: Vector2;
  lenScale: number;
  sizeScale: number;
}

export interface PaintStyle{}

export abstract class Painter{
  windowSize: Vector2;
  lenScale: number;
  sizeScale: number;
  cameraPos: Vector2;

  constructor(conf: ViewConf){
    this.windowSize = conf.windowSize;
    this.lenScale = conf.lenScale;
    this.sizeScale = conf.sizeScale;
    this.cameraPos = new Vector2(0, 0);
  }

  setCameraPos(pos: Vector2){
    this.cameraPos = pos;
  }

  abstract paint(body: Body, conf: PaintStyle): void;
}