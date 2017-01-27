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
var slice1 = new THREE.Object3D();

//for(z=0;z<100;z++){
  //for(y=0;y<100;y++){
    
    for(x=0;x<100;x++){
      map.grid.points[i] = new THREE.Vector3((x*10)-500,-500,-500);
    i++
    }
    var temp = new THREE.CatmullRomCurve3( map.grid.points);
    var clone1 = new Object();
     var tempGeo = new THREE.Geometry();
    tempGeo.vertices = temp.getPoints(50);
    var curveObject = new THREE.Line( tempGeo, new THREE.LineBasicMaterial( { color : 0xffffff } ));
    map.lines.add(curveObject);
    for(x=0;x<100;x++){
      var temp2 = curveObject.clone();
      temp2.position.x = clone1.position.x+10;
      slice1.add(temp2);
    }
       
   
    
    console.log(map.lines);
      slice1.add(curveObject)
  //}
  //}
  }


