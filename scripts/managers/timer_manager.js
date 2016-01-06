/*
 * Timer manager
 *
 * Creates timers and keeps references to them.
 */
(function() {
  "use strict";

  window.TimerManager = {
    timers: [],

    /*
     * Creates a timer and returns the Timer object. Ticks are added to current time.
     */
    create_timer: function(ticks, repeat, action) {
      this.timers.push(new Timer(ticks, repeat, action));
    },

    /*
     * Creates a timer based on input UTC time.
     */
    create_utc_timer: function(time, repeat, action) {
      time = time.split(':');

      var target = new Date();
      target.setUTCHours(time[0]);
      target.setUTCMinutes(time[1]);
      target.setUTCSeconds(0);
      target = target.getTime();

      current_ticks = new Date().getTime();
      if(target < current_ticks) target += 1000 * 60 * 60 * 24;
      this.create_timer(target, repeat, action);
    },

    garbage_collect: function(timer) {
      var index = this.timers.indexOf(object);
      if(index != -1) this.timers.splice(index, 1);
    },
  };
})();
