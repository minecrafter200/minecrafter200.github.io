var map = {}
map.grid = {};
map.grid.points = new Array();
map.grid.init = function(){
for(i=0;i<1000000;i++){
  map.grid.points[i] = new THREE.Vector3(0,0,0);
  }
  console.log("LOOP FINISHED");
}
