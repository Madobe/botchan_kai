(function() {
  "use strict";

  window.Timer = function(ticks, repeat, action) {
    this.ticks = ticks;
    this.repeat = repeat;
    this.action = action;

    var current_time = new Date.getTime();
    this.timer = setTimeout($.proxy(this.run, this), this.ticks - current_time);
  };

  Timer.prototype.run = function() {
    clearTimeout(this.timer);
    this.action.call();
    if(this.repeat) {
      this.ticks += this.repeat;
      this.timer = setTimeout($.proxy(this.run, this), this.repeat);
    } else {
      TimerManager.garbage_collect(this);
    }
  };

  Timer.prototype.change = function(ticks) {
    clearTimeout(this.timer);
    this.ticks = new Date().getTime() + ticks;
    this.timer = setTimeout($.proxy(this.run, this), ticks);
  };

  Timer.prototype.stop = function() {
    clearTimeout(this.timer);
    TimerController.garbage_collect(this);
  };

  Timer.prototype.remaining = function() {
    var remaining = this.ticks - new Date().getTime();
    remaining /= 1000;

    var hours = Math.floor(remaining / 3600);
    remaining %= 3600;
    if(hours < 10) hours = "0" + hours;

    var minutes = Math.floor(remaining / 60);
    remaining %= 60;
    if(minutes < 10) minutes = "0" + minutes;

    if(remaining < 10) remaining = "0" + Math.floor(remaining);
    else remaining = Math.floor(remaining);

    return hours + ":" + minutes + ":" + remaining;
  };
})();
