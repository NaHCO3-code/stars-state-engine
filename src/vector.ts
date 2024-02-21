export class Vector2{
  x: number
  y: number

  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }

  clone(){
    return new Vector2(this.x, this.y);
  }

  add(v: Vector2){
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  reduce(v: Vector2){
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  stretch(n: number){
    this.x *= n;
    this.y *= n;
    return this;
  }

  distance(v: Vector2){
    return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
  }

  static add(u: Vector2, v: Vector2){
    return new Vector2(u.x + v.x, u.y + v.y);
  }

  static distance(u: Vector2, v: Vector2){
    return Math.sqrt(Math.pow(u.x - v.x, 2) + Math.pow(u.y - v.y, 2));
  }

  static reduce(u: Vector2, v: Vector2){
    return new Vector2(u.x - v.x, u.y - v.y);
  }

  static stretch(v: Vector2, n: number){
    return new Vector2(v.x * n, v.y * n);
  }
}

export function randomInt(min: number, max: number){
  return min + Math.floor(Math.random()*(max-min));
}

export function randomFloat(min: number, max: number){
  return min + Math.random()*(max-min);
}