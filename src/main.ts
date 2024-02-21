import { Vector2 } from "./vector"
import { Planet } from './models/planet'
import { Space } from "./models/space"
import { settings } from "./view/setting";

let space = new Space(new Vector2(window.innerWidth, window.innerHeight));

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

// for(let i=0; i<100; ++i){
//   space.add(
//     new Planet(
//       new Vector2(randomInt(-5000, 5000), randomInt(-5000, 5000)), 
//       randomFloat(1,20),
//       new Vector2(randomFloat(-3, 3), randomFloat(-3, 3))
//     ) 
//   );
// }

setInterval(()=>{
  for(let i=0; i<settings.speed; ++i){
    space.update();
  }
  space.draw(space.visualCenter, new Vector2(window.innerWidth/2, window.innerHeight/2));
}, 1);