import { Body } from "./models/body";
import { PlanetPainter } from "./models/planetPainter";
import { Space } from "./models/space";
import { Vector2 } from "./vector";

const windowSize = new Vector2(window.innerWidth, window.innerHeight);

const space = new Space();
const painter = new PlanetPainter(windowSize, 0.4, 10);
const body1 = new Body(new Vector2(0, 0), 10, new Vector2(0, 0));
const body2 = new Body(new Vector2(300, 0), 0.1, new Vector2(0, 0.1));
const body3 = new Body(new Vector2(600, 0), 0.1, new Vector2(0, 0.15));

space.addBody(body1, painter);
space.addBody(body2, painter);
space.addBody(body3, painter);

space.run({
  calcDelay: 0,
  paintDelay: 0,
  speed: 10,
  paintHandle() {
    painter.setCameraPos(body1.position)
  },
});