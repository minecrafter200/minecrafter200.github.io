var map = {}
map.grid = {};
map.grid.points = new Array();
map.grid.init = function(){
  var xfragment = "uniform vec3 color;"+
      "uniform float opacity;"+
      "varying vec3 vColor;"+
      "void main() {" +
      "gl_FragColor = vec4( vColor * color, opacity);"+
      "}";
  
   var xvertext = "uniform float amplitude;"+
            "attribute vec3 displacement;"+
            "attribute vec3 customColor;"+
            "varying vec3 vColor;"+
            "void main() {"+
            "vec3 newPosition = position + amplitude * displacement;"+
            "vColor = customColor;"+
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 ); }";
  uniforms = {
    aplitude: {value:5.0},
    opacity: {value:0.3},
    color: {value: new THREE.Color( 0xff0000 )}
  };
  var shaderMaterial = new THREE.ShaderMaterial( {
    
    uniform: uniforms,
    vertexShader: xvertext,
    fragmentShader: xfragment,
    blending: THREE.AdditiveBlending,
    depthTest: false
    transparent: True;
  });
  var geometry = new THREE.SphereGeometry(2,40,40);
 var vertices = geometry.vertices
 
 
 var buffergeometry = new THREE.BufferGeometry();

			var position = new THREE.Float32BufferAttribute( vertices.length * 3, 3 ).copyVector3sArray( vertices );
			buffergeometry.addAttribute( 'position', position );

			var displacement = new THREE.Float32BufferAttribute( vertices.length * 3, 3 );
			buffergeometry.addAttribute( 'displacement', displacement );

			var customColor = new THREE.Float32BufferAttribute( vertices.length * 3, 3 );
			buffergeometry.addAttribute( 'customColor', customColor );

			var color = new THREE.Color( 0xffffff );

			for( var i = 0, l = customColor.count; i < l; i ++ ) {

				color.setHSL( i / l, 0.5, 0.5 );
				color.toArray( customColor.array, i * customColor.itemSize );

			}

			object = new THREE.Line( buffergeometry, shaderMaterial );
			object.rotation.x = 0.2;
			scene.add( object );
}
