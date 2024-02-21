import { Vector2 } from "../vector";
import { Body } from "./body";

export class Space{
  bodies: Body[] = [];
  windowSize: Vector2;

  constructor(windowSize: Vector2){
    this.windowSize = windowSize;
  }

  add<T extends Body>(body: T){
    this.bodies.push(body);
  }

  update(){
    for(const i of this.bodies){
      for(const j of this.bodies){
        if(i === j){
          continue;
        }
        i.updateVelocity(j);
      }
    }
    for(const i of this.bodies){
      i.updatePosition();
    }
  }

  draw(basis: Vector2, offset: Vector2){
    for(const i of this.bodies){
      i.draw(basis, offset, this.windowSize);
    }
  }

  get massCenter(){
    let center = new Vector2(0, 0);
    let mass = 0;
    for(let i of this.bodies){
      center.add(Vector2.stretch(i.position, i.mass));
      mass += i.mass
    }
    return center.stretch(1 / mass)
  }

  get visualCenter(){
    let center = new Vector2(0, 0);
    let r = 0;
    for(let i of this.bodies){
      center.add(Vector2.stretch(i.position, Math.pow(i.mass, Math.E)));
      r += Math.pow(i.mass, Math.E);
    }
    return center.stretch(1 / r);
  }

  get center(){
    let center = new Vector2(0, 0);
    for(let i of this.bodies){
      center.add(i.position);
    }
    return center.stretch(1 / this.bodies.length);
  }
}