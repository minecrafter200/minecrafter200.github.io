var Agar = {}
var Sphere = null;
var camera2
Agar.initSpawn = function(){

	
     for(i=0;i<3000;i++) {
     	x=(Math.random()-Math.random())*((1/2)*11180.3);
     	y=(Math.random()-Math.random())*((1/2)*11180.3);
     	var color = new THREE.Color(Math.random(),Math.random(),Math.random());
     	
      var geometry = new THREE.SphereGeometry( 5, 32, 32 );
			var material = new THREE.MeshPhongMaterial()
			material.color = color
      Sphere = new THREE.Mesh( geometry, material );
      Sphere.position.z = 0.4
      Sphere.position.x = x
      Sphere.position.y = y
      
      scene.add(Sphere)
     
     }
}
