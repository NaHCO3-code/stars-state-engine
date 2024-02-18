import { Vector2 } from "./vector"
import { Planet } from './models/planet'
import { Space } from "./models/space"

let space = new Space();

space.add(
  new Planet(
    new Vector2(0, 0),
    3,
    new Vector2(0, 0)
  )
);

space.add(
  new Planet(
    new Vector2(200, 200), 
    1, 
    new Vector2(0, 1)
  ) 
);

const speed = 4;

setInterval(()=>{
  for(let i=0; i<speed; ++i){
    space.update();
  }
  space.draw(space.visualCenter, new Vector2(window.innerWidth/2, window.innerHeight/2));
}, 1);