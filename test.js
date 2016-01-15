/***********************************************************/
/***********************************************************/
/*****************Html Three Js Code ***********************/
var sceneWindow = null;
var $3dmodal = null;
var loadingDocument = false;
var htmlCode;
//var htmlCode = "<script>var scene = new THREE.Scene();var cube = null;var camera = new THREE.PerspectiveCamera( 75, document.getElementById('container').offsetWidth/document.getElementById('container').offsetHeight, 0.1, 1000 );var renderer = new THREE.WebGLRenderer();renderer.setSize(document.getElementById('container').offsetWidth,document.getElementById('container').offsetHeight);document.getElementById('container').appendChild( renderer.domElement );var geometry = new THREE.BoxGeometry( 1, 1, 1 );var material = new THREE.MeshbasicMaterial( { color: 0x00ff00 } );cube = new THREE.Mesh( geometry, material );scene.add( cube );cube.rotation.y = 90;cube.rotation.x = 90;camera.position.z = 5;camera.position.y = 1;camera.rotation.x = ( Math.PI / 180);var render = function () {requestAnimationFrame( render );console.log('rendering');if(cube!=null){cube.rotation.x += 0.01;}renderer.render(scene, camera);};//render();</script>";
/*****************Html Three Js Code ***********************/
/***********************************************************/
/***********************************************************/

/***********************************************************/
/***********************************************************/
/***************Extension Local Data ***********************/

    var descriptor = {
        blocks: [],

        menus: {
            
        }
    };

   
/***************Extension Local Data ***********************/
/***********************************************************/
/***********************************************************/
var script = document.createElement('script');
    script.onload = function() {
        console.log("Script loaded and ready");
    };
 //Loads the needed Libaries
    script.src = 'http://scratch3d.github.io/tierTwo/Scratch3D_Beta/server/threeJScontrols/three.js';
    document.getElementsByTagName('body')[0].appendChild(script);

    htmlCode = document.createElement('script');
    htmlCode.onload = function() {
        console.log("Script loaded and ready: ", htmlCode);
    };
    htmlCode.src = 'http://goodwinj14.github.io/Scratch3D_Beta/server/scratch3dScript.js';
    // Register the extension

(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.init = function(){
         /*var fileSelector = document.createElement('button');
        fileSelector.setAttribute('id', 'file');
    document.body.appendChild(fileSelector);
    var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      fileSelector.dispatchEvent(evt);
      console.log(document.getElementById('file'));*/

var inputElement = null;
function CreateFromTemplate(elementId, templateId, elementType, appendTo, wrapper, data) {
    elementType = elementType || "div";
    appendTo = appendTo || "body";
    data = data || {};

    var $element = $(document.getElementById(elementId));
    if (!$element.length) {
        var templateContent = "";
            
            templateContent += $(document.getElementById(templateId)).html(); 
                templateContent = "<dialog id='main' class='modal-inner' style='height: 400px; width: 500px;'><section id='Holder' style='background-color: #cbffcc; padding: 0px; margin: 0px;'><div id='container' style='height: 361px; width: 482px; background-color: #ccffcc; margin-left: -19px; margin-top: 48px;'><button>Close</button><button id='expand'>fullScreen</button></div></section></dialog>";
                //templateContent = htmlCode;

        $template = _.template(templateContent);
        $element = $("<dialog></dialog>")
            .attr("id", elementId)
            .html($template);
        $element.appendTo(appendTo);
        document.getElementById("Holder").appendChild(htmlCode);
    }
    //var $element = $(document.getElementById(elementId));
    return $element;
};


  function sModal(templateId, data) {
    /*
     * Copies the HTML referenced by data-template into a new element,
     * with id="modal-[template value]" and creates an overlay on the
     * page, which when clicked will close the popup.
     */

    var zIndex = 100;
    var modalId = ("modal-" + templateId).replace(",", "-");
    //var templateId = "<dialog class='extension-warning with-icon'><section><h2>Warning</h2><p>The extensions on this site are experimental</p></section><section><p>The Scratch Team is <strong>not</strong> responsible for the extensions and projects on this site. Please use caution when using these extensions. <a href='#faq'>Learn More</a></p><input type='file' id='upload'/><button data-action='show' data-target='home'>Back to ScratchX home</button><button class='success'>I understand, continue</button></section></dialog>"


    var $modal =  CreateFromTemplate(modalId, templateId, "div", "body", null, data);
    
    $modal.addClass("modal");
    $modal.addClass("visible");
    $modal.click(function(e){if ($(e.target).is($(this))) $(this).trigger("modal:exit")});
    /*$(".modal-fade-screen", $modal)
        .addClass("visible")
        .click(function(e){if ($(e.target).is($(this))) $(this).trigger("modal:exit")});*/

    $(".modal-close", $modal).click(function(e){
        e.preventDefault();
        $(document).trigger("modal:exit")
    });
    
    $("body").addClass("modal-open");

    $(document).one("modal:exit page:show editor:extensionLoaded", function(e){
        $("body").removeClass("modal-open");
        Scratch.FlashApp.ASobj.ASsetModalOverlay(false);
        $modal.remove();
    });
    return $modal;
}

      $modal = sModal("template-warning", null);
      console.log("Modal: ",$modal[0]);

    $("button", $modal).click(function(e){
        if(e.delegateTarget.id=="expand"){
            document.getElementById("main").style.width = "1100px";
            document.getElementById("Holder").style.width = "1100px";
            document.getElementById("container").style.width = "1100px";
            document.getElementById("main").style.height = "700px";
            document.getElementById("Holder").style.height = "700px";
            document.getElementById("container").style.height = "700px";
            Scratch3d.updateWindow();
            console.log("Enter Full Screen",e);
        }else{
        Scratch3d.windowActive = false;
        e.preventDefault();
        $(document).trigger("modal:exit")
        }
    });
      /*fileSelector = document.createElement('input');
      fileSelector.setAttribute('type', 'file');
      document.body.appendChild(fileSelector);
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
     zxzx fileSelector.dispatchEvent(evt);*/
    }

    ext.runScratch3d = function(){

    };


    ext.uploadFile = function(){
         /*var fileSelector = document.createElement('button');
        fileSelector.setAttribute('id', 'file');
    document.body.appendChild(fileSelector);
    var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      fileSelector.dispatchEvent(evt);
      console.log(document.getElementById('file'));*/

var inputElement = null;
function CreateFromTemplate(elementId, templateId, elementType, appendTo, wrapper, data) {
    elementType = elementType || "div";
    appendTo = appendTo || "body";
    data = data || {};

    var $element = $(document.getElementById(elementId));
    if (!$element.length) {
        var templateContent = "";
        if (typeof(templateId) != "string") {
            for (var id in templateId) {
                templateContent += $(document.getElementById(templateId[id])).html();

            }
            console.log("if: ", templateContent);
        } else {

            templateContent += $(document.getElementById(templateId)).html();
                templateContent = "<dialog class='extension-warning with-icon'><section><h2>Warning</h2><p>The extensions on this site are experimental</p></section><section><p>The Scratch Team is <strong>not</strong> responsible for the extensions and projects on this site. Please use caution when using these extensions. <a href='#faq'>Learn More</a></p><input type='file' id='upfile'/><output type='file' id='subfile'/><button data-action='show' data-target='home'>Back to ScratchX home</button><button >Uplaod File</button></section></dialog>"
        }
        $template = _.template(templateContent);
        $element = $("<"+elementType+"></"+elementType+">")
            .attr("id", elementId)
            .html($template(data));
        if (wrapper) $element.wrapInner(wrapper);
        $element.appendTo(appendTo)
    }
    return $element;
};


  function sModal(templateId, data) {
    /*
     * Copies the HTML referenced by data-template into a new element,
     * with id="modal-[template value]" and creates an overlay on the
     * page, which when clicked will close the popup.
     */

    var zIndex = 100;
    var modalId = ("modal-" + templateId).replace(",", "-");
    //var templateId = "<dialog class='extension-warning with-icon'><section><h2>Warning</h2><p>The extensions on this site are experimental</p></section><section><p>The Scratch Team is <strong>not</strong> responsible for the extensions and projects on this site. Please use caution when using these extensions. <a href='#faq'>Learn More</a></p><input type='file' id='upload'/><button data-action='show' data-target='home'>Back to ScratchX home</button><button class='success'>I understand, continue</button></section></dialog>"

//<input type='file' id='upload'/>
    $modalwrapper = $("<div class='modal-fade-screen'><div class='modal-inner'></div></div>");
    var $modal = CreateFromTemplate(modalId, templateId, "dialog", "body", $modalwrapper, data);

    $modal.addClass("modal");

    $(".modal-fade-screen", $modal)
        .addClass("visible")
        .click(function(e){if ($(e.target).is($(this))) $(this).trigger("modal:exit")});

    $(".modal-close", $modal).click(function(e){
        e.preventDefault();
        console.log("modal-close ");
        $(document).trigger("modal:exit")
    });
    
    $("body").addClass("modal-open");

    $(document).one("modal:exit page:show editor:extensionLoaded", function(e){
        $("body").removeClass("modal-open");
        Scratch.FlashApp.ASobj.ASsetModalOverlay(false);
        $modal.remove();
    });
    console.log("returned1");
    return $modal;
}

      $modal = sModal("template-warning", null);
      inputElement = document.getElementById("upfile");
      inputElement.addEventListener("change", function(event){
        file = inputElement.files,
        fsize = file.length;

    for (i=0; i < fsize; i++) {
        console.log("Filename: " + file[i].name);
        console.log("Type: " + file[i].type);
        console.log("Size: " + file[i].size + " bytes");
    }

    var reader = new FileReader();
        reader.onload = function(event) {
            var contents = event.target.result;
            console.log("File contents: " + contents);
            };
        reader.readAsText(file[0]);

      },false);
    $("button", $modal).click(function(e){
       // e.preventDefault();
        console.log("modal-button 2");
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        document.getElementById("upfile").dispatchEvent(evt);
        
        //$(document).trigger("modal:exit")
    });
      /*fileSelector = document.createElement('input');
      fileSelector.setAttribute('type', 'file');
      document.body.appendChild(fileSelector);
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
     zxzx fileSelector.dispatchEvent(evt);*/
    }

    ext.newShape = function() {
        Scratch3d.windowActive = true;
        Scratch3d.init();
        if(sceneWindow!=null){
        console.log("ScratchExtensions", ScratchExtensions);
        sceneWindow.addShape();
        updateExtension();
       return "loaded";
   }else{
       return "not loaded";
   }
    };

    //Reloads The extention to update block data
    function updateExtension(){
    ScratchExtensions.unregister('scratch3d');
    ScratchExtensions.register('scratch3d', descriptor, ext);
    }

    // Block and block menu descriptions
        descriptor.blocks.push([' ', 'New 3D World %m.Scenes', 'init']);
        descriptor.blocks.push(['r', 'New Shape', 'newShape']);
        descriptor.blocks.push(['null', 'Upload', 'uploadFile']);
    //

    ScratchExtensions.register('scratch3d', descriptor, ext);
})({});
