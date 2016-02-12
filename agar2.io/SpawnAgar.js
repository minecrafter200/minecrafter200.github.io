var Agar = {}
var circle = null;
var camera2
Agar.initSpawn = function(){

	
     for(i=0;i<3000;i++) {
     	x=(Math.random()-Math.random())*((1/2)*11180.3);
     	y=(Math.random()-Math.random())*((1/2)*11180.3);
     	var color = new THREE.Color(Math.random(),Math.random(),Math.random());
     	
      var geometry = new THREE.CircleGeometry( (10), 64);
			var material = new THREE.MeshPhongMaterial()
			material.color = color
      circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.4
      circle.position.x = x
      circle.position.y = y
      
      scene.add(circle)
     
     }
}
