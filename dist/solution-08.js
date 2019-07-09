var MyMap = /** @class */ (function () {
    function MyMap() {
        // private map: Array<any> = [];
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    }; // should create a new key-value pair
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    }; // should retrieve the value of the provided key
    MyMap.prototype.clear = function () {
        this.map = {};
    }; // should remove all key-value pairs
    MyMap.prototype.printMap = function () {
        var _this = this;
        Object.keys(this.map).forEach(function (e) {
            console.log(e, _this.map[e]);
        });
    };
    return MyMap;
}()); // should output key-value pairs
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.setItem('apples', 11);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
