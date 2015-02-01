window.onload = function(){
    var select = document.getElementById('interval')
    select.value = getValue(INTERVAL_NAME, DEFAULT_INTEVAL)
    select.addEventListener('change', setInterval)
    function setInterval(){
        localStorage[INTERVAL_NAME] = select.value
    }
}