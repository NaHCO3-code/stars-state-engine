import { Vector2 } from "../vector";

export abstract class Body{
  position: Vector2
  mass: number
  velocity: Vector2

  static G = 0.1

  constructor(pos: Vector2, mass: number, velocity: Vector2){
    this.position = pos;
    this.mass = mass;
    this.velocity = velocity;
  }

  updateVelocity(other: Body){    
    this.velocity.add(
      Vector2
        .reduce(other.position, this.position)
        .stretch(Body.G * other.mass / Math.pow(Vector2.distance(this.position, other.position), 2))
    );
  }

  updatePosition(){
    this.position.add(this.velocity);
  }

  abstract draw(basis: Vector2, offset: Vector2): void;
}