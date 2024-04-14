import { Body } from "./body";
import { Painter } from "./painter";

export class Space{
  bodies: Map<Body, Painter>;

  G = 1;

  constructor(){
    this.bodies = new Map();
  }

  addBody<T extends Body, U extends Painter>(body: T, painter: U){
    this.bodies.set(body, painter);
    body.G = this.G;
  }

  calcEffect(){
    for(let b1 of this.bodies.keys()){
      for(let b2 of this.bodies.keys()){
        if(b1 === b2){
          continue;
        }
        b1.calcEffect(b2);
      }
    }
  }

  updatePositions(){
    for(let b of this.bodies.keys()){
      b.updatePosition();
    }
  }

  paint(){
    for(let [body, painter] of this.bodies){
      painter.paint(body);
    }
  }

  run(conf: runConf){
    setInterval(()=>{
      for(let i = 0; i < conf.speed; i++){

        this.calcEffect();
        this.updatePositions();
      }
      conf.calcHandle?.call(this);
    }, conf.calcDelay);
    setInterval(()=>{
      this.paint();
      conf.paintHandle?.call(this);
    }, conf.paintDelay);
  }
}

interface runConf{
  calcDelay: number, 
  paintDelay: number, 
  speed: number,
  calcHandle?: ()=>void, 
  paintHandle?: ()=>void
}