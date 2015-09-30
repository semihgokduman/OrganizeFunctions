(function (w) {
  "use strict";
  var s = {
    loadEvents : [
      function first() {console.log("1"); },
      function second() {console.log("2"); }
    ],
    addFunction: function sAddFunction(functoAdd, index) {
      var _this = this;
      var arry = _this.loadEvents;

      if (arguments.length > 1) {
        arry.splice(index, 0, functoAdd);
      } else {
        _this.loadEvents.push(functoAdd);
      }
      return _this;
    }, //end addFunction
    removeFunction: function sRemoveFunction() {
      // byname ? by index
      console.log(arguments);
    },
    clear: function sClear() {
      //clear all functions
      console.log(arguments);

    },
    removeAll: function sRemoveAll() {
      this.clear();
      console.log(arguments);
    },
    runAll: function sRunAll() {
      var _this = this;
      var arry = _this.loadEvents;
      var _i = 0;

      if (arry.length) {
        for (_i; _i < arry.length; _i++) {
          arry[_i].apply(w);
        }
      }
    }
  };

  w.s = {
    loadEvents : s.loadEvents,
    addFunction : s.addFunction,
    removeFunction : s.removeFunction,
    clear: s.clear,
    removeAll : s.removeAll,
    runAll : s.runAll
  };
}(window));


//s.addFunction(function added() { console.log(123); }, 2).runAll();



