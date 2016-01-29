var player_s = {}
var circle = null;
var camera2
player_s.init = function(scene, mass, camera) {
	window.addEventListener( 'mousemove', onMouseMove, false );
      var color = new THREE.Color(Math.random(),Math.random(),Math.random());
      
      var geometry = new THREE.CircleGeometry( ((mass)*10), 64);
			var material = new THREE.MeshPhongMaterial()
			material.color = color
      circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
camera2 = camera;
}
var theta = 0
var delta_x = 0
var delta_y = 0
function onMouseMove( event ) {
	delta_x = ( 0.5 - (event.clientX / (window.innerWidth * 0.8)) );
	
	delta_y = ( 0.5 - (event.clientY / (window.innerHeight * 0.8)));
	
	theta = (Math.atan(delta_x/delta_y))
	console.log(theta);
	if(delta_y<0){
		theta = Math.PI + ((Math.PI/2)-theta);
	}
	

}

player_s.visual = function() {
	
	//circle.rotation.z = theta
	if(circle!=null){
		
		circle.rotation.z = theta;
		
	}
	circle.translateY(1);
	
	// need to set z to mass. (+mass)
	camera2.position.set(circle.position.x,circle.position.y,10)
}
