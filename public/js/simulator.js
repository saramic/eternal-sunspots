var Sunspots = (function (my) {
    var clock, elem, refreshIntervalId;

    my.TICK_TIME = 100;
    my.COLUMNS = 8;
    my.ROWS = 8;

    my.init = function (divId) {
        clock = 0;

        elem = document.getElementById(divId);
        for (var rowIndex = 0; rowIndex < my.ROWS; rowIndex++) {
            for (var colIndex = 0; colIndex < my.COLUMNS; colIndex++) {
                var node = document.createElement("DIV");
                var id = "x_" + colIndex + "_y_" + rowIndex;
                node.id = id;
                node.className = "sunspot x_" + colIndex + " y_" + rowIndex;
                elem.appendChild(node);
            }
        }
    };

    my.run = function (tickCallback) {
        clear();
        clock = 0;
        refreshIntervalId = setInterval(function () {
            my.draw(tickCallback)
        }, my.TICK_TIME);
    };

    my.draw = function (tickCallback) {
        var matrix = tickCallback(clock, get_matrix());
        for (var rowIndex = 0; rowIndex < my.ROWS; rowIndex++) {
            for (var colIndex = 0; colIndex < my.COLUMNS; colIndex++) {
                var node = document.getElementById("x_" + colIndex + "_y_" + rowIndex);
                var index = (my.COLUMNS * rowIndex) + colIndex;
                var value = matrix[index];
                if (value === 0 || value === "0") {
                    removeClass(node, "active");
                } else {
                    addClass(node, "active");
                }
            }
        }
        clock++;
    }

    function clear() {
        clearInterval(refreshIntervalId);
        for (var rowIndex = 0; rowIndex < my.ROWS; rowIndex++) {
            for (var colIndex = 0; colIndex < my.COLUMNS; colIndex++) {
                var node = document.getElementById("x_" + colIndex + "_y_" + rowIndex);
                removeClass(node, "active");
            }
        }
    }

    function get_matrix() {
        var matrix = [];
        for (var rowIndex = 0; rowIndex < my.ROWS; rowIndex++) {
            for (var colIndex = 0; colIndex < my.COLUMNS; colIndex++) {
                var node = document.getElementById("x_" + colIndex + "_y_" + rowIndex);
                var index = (my.COLUMNS * rowIndex) + colIndex;
                matrix[index] = hasClass(node, 'active') ? 1 : 0;
            }
        }
        return (matrix);
    }

    function toggleNode(node) {
        hasClass(node, "active") ? removeClass(node, "active") : addClass(node, "active");
    }

    function hasClass(node, className) {
        return node.className.match("(?:^|\\s)" + className + "(?!\\S)");
    }

    function removeClass(node, className) {
        node.className = node.className.replace(new RegExp("(?:^|\\s)" + className + "(?!\\S)", "g"), '')
    }

    function addClass(node, className) {
        node.className += " " + className;
    }

    return (my);
}(Sunspots || {}));

document.onload = Sunspots.init('sunspots');
