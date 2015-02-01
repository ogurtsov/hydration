var DEFAULT_INTEVAL = 60
var INTERVAL_NAME = 'interval'

function getValue(name, default_value){
    if(typeof localStorage[name] !== 'undefined'){
        return localStorage[name]
    }
    return default_value  
}