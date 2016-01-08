var player_s = {}
player_s.init = function(scene, mass) {
      var color = new THREE.color(Math.random(),Math.random(),Math.random())
      var geometry = new THREE.CircleGeometry( mass, 32);
			var material = new THREE.MeshPhongMaterial()
			material.color = color
      var circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
}
