var player_s = {}
player_s.init = function(scene) {

      var geometry = new THREE.CircleGeometry( 8, 32);
			var material = new THREE.MeshPhongMaterial( {  } );
      var circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
}
