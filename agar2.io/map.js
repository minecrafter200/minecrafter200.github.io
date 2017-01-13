var map = {}
map.grid = {};
map.grid.points = new Array();
map.grid.init = function(){
map.grid.curvearrays = {};
  map.grid.curvearrays.a = new Array();
  map.grid.curvearrays.b = new Array();
  map.grid.curvearrays.c = new Array();
  map.lines = new THREE.Object3D();
console.log(curve)
  var curve = new THREE.CatmullRomCurve3( [
    new THREE.Vector3(10,10,10)
    new Three.vector3(0,0,0)
    ] );
  var geometry = new THREE.Geometry();
  geometry.verticies - curve.getPoints( 50 ):
  var material = new THREE.LineBasicMaterial( { color : 0x000000 } );
  var curveObject - new THREE.Line(geometry, material);
  map.lines.add(curveObject);
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
