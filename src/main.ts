import { Body } from "./models/body";
import { PlanetPaintStyle, PlanetPainter } from "./models/planetPainter";
import { Space } from "./models/space";
import { Vector2 } from "./vector";

const windowSize = new Vector2(window.innerWidth, window.innerHeight);

const space = new Space();
const painter = new PlanetPainter({
  windowSize,
  lenScale: 0.1,
  sizeScale: 1
});

const red: PlanetPaintStyle = {
  color: "#ff7b00",
}
const green: PlanetPaintStyle = {
  color: "#00cc00",
}
const blue: PlanetPaintStyle = {
  color: "#336699",
}

const sun = new Body(new Vector2(0, 0), 1000, new Vector2(0, 0));
const planet1 = new Body(new Vector2(1000, 0), 10, new Vector2(0, 1));
const planet2 = new Body(new Vector2(-4000, 0), 0.1, new Vector2(0, 0.25));
const planet3 = new Body(new Vector2(3000, 0), 10, new Vector2(0, 0.6));
const craft = new Body(new Vector2(3080, 0), 0.001, new Vector2(0, 1));

space.addBody(sun, painter, red);
space.addBody(planet1, painter, red);
space.addBody(planet2, painter, green);
space.addBody(planet3, painter, red);
space.addBody(craft, painter, blue);

space.run({
  calcDelay: 0,
  paintDelay: 10,
  speed: 10,
  paintHandle() {
    painter.setCameraPos(sun.position)
  },
});

window.addEventListener("wheel", (ev)=>{
  if(ev.deltaY < 0){
    painter.lenScale *= 1.1;
  }else{
    painter.lenScale /= 1.1;
  }
  showInfo();
})

window.addEventListener("load", ()=>{
  showInfo();
})

function showInfo(){
  const lenScaleEl = <HTMLParagraphElement>document.querySelector("#len-scale");
  lenScaleEl.innerText = `比例尺：${(1/painter.lenScale).toFixed(0)} m/px`
}