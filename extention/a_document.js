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
        number();
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', '@greenFlag my first block %n','Block1'],
            ['w', '@stop my first block %m.Menu1', 'Block2'],
            [' ', '@turnRight my first block %s', 'function1', "alert()", 'Block3'],
            ['R', '@turnLeft my first block %b', 'Block4'],
            ['h', 'my first block %c', 'Block5'],
        ],

        menus: {
            Menu1: ["1","3","9","27","81"],
        }
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
