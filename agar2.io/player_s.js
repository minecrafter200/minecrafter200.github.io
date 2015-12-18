var player_s = {}
player_s.init = function() {

      var geometry = new THREE.CircleGeometry( 5, 32,);
			var material = new THREE.MeshPhongMaterial( { map : texture } );
      var circle = new THREE.Mesh( geometry, material );
}
