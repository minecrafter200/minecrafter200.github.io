var player_s = {}
player_s.init = function(scene, mass) {
      var color = new THREE.color(Math.rand(),Math.rand(),Math.rand())
      var geometry = new THREE.CircleGeometry( mass, 32);
			var material = new THREE.MeshPhongMaterial()
			material.color = color
      var circle = new THREE.Mesh( geometry, material );
      circle.position.z = 0.5
      scene.add(circle)
}
