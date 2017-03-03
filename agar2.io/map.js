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
  
}
