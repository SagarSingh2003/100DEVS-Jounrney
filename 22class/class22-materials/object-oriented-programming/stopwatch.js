function stopwatch() {
    let startTime = 0;
    let stopTime = 0;
  
    this.start = function () {
      if (startTime != 0) {
        throw new Error("invalid");
      }
  
      startTime = Date.now();
      console.log("stopwatch started");
    };
  
    this.stop = function () {
  
      if (stopTime != 0) {
        throw new Error("invalid");
      }
  
      stopTime = Date.now();
      console.log("stopwatch stopped");
    };
  
    Object.defineProperty(this, "duration", {
      get: function () {
        console.log((stopTime - startTime) / 1000);
      },
    });
  
    this.reset = function () {
      startTime = 0;
      stopTime = 0;
      console.log("stopwatch has been reset");
    };
  }
  
  let sw = new stopwatch();