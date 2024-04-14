import { Vector2 } from "../vector";

export class Body{
  position: Vector2
  mass: number
  velocity: Vector2

  G = 0.1;

  constructor(pos: Vector2, mass: number, velocity: Vector2){
    this.position = pos;
    this.mass = mass;
    this.velocity = velocity;
  }

  calcEffect(other: Body){
    const distance2 = Vector2.distance2(this.position, other.position);
    const distance3 = distance2 * Math.sqrt(distance2);

    this.velocity.add(
      Vector2
        .reduce(other.position, this.position)
        .stretch(this.G * other.mass / distance3)
    );
  }

  updatePosition(){
    this.position.add(this.velocity);
  }
}