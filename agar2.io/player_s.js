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
var priorX = 0;
var priorY = 0;
var mouseh;
function onMouseMove( event ) {

	delta_x = (( event.clientX / (window.innerWidth * 0.8) ) );
	
	delta_y = ( event.clientY / (window.innerHeight * 0.8));
	
	mouseh = Math.pow(delta_x,2)+Math.pow(delta_y,2);
	
	theta = (Math.atan(delta_y/delta_x))
console.log("delta_y " + delta_y);
console.log("delta_x " + delta_x);
console.log("Theta " + theta);
	

}

player_s.visual = function() {
	
	//circle.rotation.z = theta
	if(circle!=null){
		if(theta>0){
		circle.rotation.z += theta;
		}
	}
	circle.translateY(1);
	
	// need to set z to mass. (+mass)
	camera2.position.set(circle.position.x,circle.position.y,10)
}
