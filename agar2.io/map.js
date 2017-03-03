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
  
}
