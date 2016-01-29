var player_s = {}
var circle
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
var mx = 0
var mh = 0
function onMouseMove( event ) {


	var mousex = (( event.clientX / (window.innerWidth * 0.8) ) * 2 );
	var mousey = - (( event.clientY / (window.innerHeight * 0.8) ) * 2 );	
	var mouseh = Math.pow(mousex,2)+Math.pow(mousey,2)
	mh = mouseh
	mx = mousex
	
	theta = (Math.asin(mx/mh))
//console.log("MH " + mh);
//console.log("Mx " + mx);
console.log("Theta " + theta);
	

}

player_s.visual = function() {
	
	//circle.rotation.z = theta
	if(theta!=null){
	circle.rotation.set(new THREE.Vector3( 0, 0, theta));
	}
	circle.translateY(1);
	
	// need to set z to mass. (+mass)
	camera2.position.set(circle.position.x,circle.position.y,10)
}
