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
       $('title').text(number);
    };
    ext.function2 = function(number) {
        // Code that gets executed when the block is run
        while (1 == 1) {
       $('title').text() = number;
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [null, 'change title to: %s', 'function1'],
            ['h', 'when the title is %s', 'function2'],
        ],

        menus: {
            Menu1: ["1","3","9","27","81"],
        }
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
