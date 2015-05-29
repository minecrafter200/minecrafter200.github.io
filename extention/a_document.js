(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.function1 = function(number) {
        // Code that gets executed when the block is run
       document.title.write(number);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'change title to: %s', 'function1'],
        ],

        menus: {
            Menu1: ["1","3","9","27","81"],
        }
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
