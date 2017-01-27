var map = {}
map.grid = {};
map.grid.points = new Array();
map.grid.init = function(){
map.grid.curvearrays = {};
  map.grid.curvearrays.a = new Array();
  map.grid.curvearrays.b = new Array();
  map.grid.curvearrays.c = new Array();
  map.lines = new THREE.Object3D();
  var material = new THREE.LineBasicMaterial( { color : 0xffffff } );
var i = 0;
for(z=0;z<100;z++){
  for(y=0;y<100;y++){
    
    for(x=0;x<100;x++){
      map.grid.points[i] = new THREE.Vector3((x*10)-500,(y*10)-500,(z*10)-500);
    i++
    }
    var temp = new THREE.CatmullRomCurve3( map.grid.points.slice((y*100)+(z*100),((y*100)+(z*100))+99));
    
    
    console.log(map);
    var tempGeo = new THREE.Geometry();
    tempGeo.vertices = temp.getPoints(50);
    var curveObject = new THREE.Line( tempGeo, new THREE.LineBasicMaterial( { color : 0xffffff } ));
    map.lines.add(curveObject);
    
  }
  }
  }


