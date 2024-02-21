export const settings = {
  speed: 1,
}

;(function(){
  let speedEl = document.getElementById("speed") as HTMLInputElement;
  if(!speedEl){
    throw new Error("是谁偷偷动了我的DOM?");
  }
  speedEl.addEventListener("input", (_) => {
    settings.speed = parseInt(speedEl.value)
  })
})();