var DEFAULT_INTEVAL = 60
var INTERVAL_NAME = 'interval'

function getValue(name, default_value){
    if(typeof localStorage[name] !== 'undefined'){
        return localStorage[name]
    }
    return default_value  
}

function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  new Notification(hour + time[2] + ' ' + period, {
    icon: 'icon.ico',
    body: 'Water time'
  });
}


if (window.Notification) {
  show()
  setInterval(function() {
    show()
  }, getValue(INTERVAL_NAME, DEFAULT_INTEVAL) * 60 * 1000)
}
