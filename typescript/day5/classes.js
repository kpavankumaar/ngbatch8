var Engine = /** @class */ (function () {
    function Engine() {
        this.engineType = 'v8';
    }
    Engine.prototype.start = function () {
        console.log("start the engine");
    };
    return Engine;
}());
var car = new Engine();
