var Agar = {}
var Sphere = null;
var camera2
Agar.initSpawn = function(){

	
     for(i=0;i<1000;i++) {
     	x=(Math.random()*90);
     	y=(Math.random()*90);
	     z=(Math.random()*90);
     	var color = new THREE.Color(Math.random(),Math.random(),Math.random());
     	
      var geometry = new THREE.SphereGeometry( 0.25, 8, 8 );
			var material = new THREE.MeshPhongMaterial();
			material.color = color
      Sphere = new THREE.Mesh( geometry, material );
      Sphere.position.z = z
      Sphere.position.x = x
      Sphere.position.y = y
      
      scene.add(Sphere)
     
     }
}
