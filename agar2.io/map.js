var map = {}
map.grid = {};
map.grid.points = new Array(new Array(new Array()));
map.grid.init = function(){
for(z=0;z<100;z++){
  for(y=0;y<100;y++){
    for(x=0;x<100;x++){
       //map.grid.points[i] = new THREE.Vector3((x*10)-500,(y*10)-500,(z*10)-500);
      map.grid.points[z][y][x] = new THREE.Vector3((x*10)-500,(y*10)-500,(z*10)-500);
    }
  }
  
  }
  console.log("LOOP FINISHED");
}
