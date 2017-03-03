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
}
