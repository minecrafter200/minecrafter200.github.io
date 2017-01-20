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
    var temp = new THREE.CatmullRomCurve3( map.grid.points.slice((y*100),((y*100)+99)));
    var tempGeo = new THREE.Geometry();
    tempGeo.vertices = temp.getPoints(50);
    map.lines.add(new THREE.Line(tempGeo,new THREE.LineBasicMaterial( { color : 0xffffff } )));
  }
  
  }
  //Create a closed wavey loop
var curve = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( -10, 0, 10 ),
	new THREE.Vector3( -5, 5, 5 ),
	new THREE.Vector3( 0, 0, 0 ),
	new THREE.Vector3( 5, -5, 5 ),
	new THREE.Vector3( 10, 0, 10 )
] );

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints( 50 );

var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

// Create the final object to add to the scene
var curveObject = new THREE.Line( geometry, material );
  map.lines.add(curveObject);
}
