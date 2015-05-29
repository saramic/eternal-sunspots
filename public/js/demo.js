var Demo = (function(my){

    function fetchJs(path, callback) {
        var request = new XMLHttpRequest();
        request.open("GET", path, true);
        request.onreadystatechange = function() {
            if (request.readyState != 4 || request.status != 200) return;
            callback(request.responseText);
        };
        request.send();
    }

    function writeToSimulatorInput(elementId, text, runText) {
        document.getElementById(elementId).value = text + runText;
    }

    my.fetchJs = function(elementId, jsPath, call) {
        var runText = "\n\nSunspots.run(" + call + ")";
        fetchJs("/js/" + jsPath, function(text) { writeToSimulatorInput(elementId, text, runText) })
    };

    my.eval = function(elementId) {
        eval(document.getElementById(elementId).value);
    };
    return(my);

}(Demo || {}));

Demo;