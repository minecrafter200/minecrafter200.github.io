var map = {}
map.grid = {};
map.grid.points = new Array();
map.grid.init = function(){
var curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3( -10, 0, -10 )
]);
console.log(curve)
var i = 0;
for(z=0;z<100;z++){
  for(y=0;y<100;y++){
    for(x=0;x<100;x++){
      map.grid.points[i] = new THREE.Vector3((x*10)-500,(y*10)-500,(z*10)-500);
    i++
    }
  }
  
  }
  console.log("LOOP FINISHED");
}
