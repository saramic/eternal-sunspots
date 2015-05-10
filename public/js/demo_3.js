var Demo3 = (function(my){

    my.tick = function(clock, matrix) {
        var duration = 16,
            effects = 4,
            index = parseInt((clock % (duration * effects))/duration);
        switch(index) {
            case 0:
                return(my.tickRowDown(clock, matrix));
            case 1:
                return(my.tickColumnAcross(clock, matrix));
            case 2:
                return(my.blink(clock, matrix));
            case 3:
                return(my.tickOneByOneAllOnThenOff(clock, matrix));
            default:
                return(my.blink(clock, matrix));
        }
    };

    my.tickOneByOneAllOnThenOff = function(clock, matrix) {
        var index = clock % matrix.length;
        matrix[index] = matrix[index] === 0 ? 1 : 0;
        return(matrix);
    };

    my.tickRowDown = function(clock, matrix) {
        var row = clock % Sunspots.ROWS;
        var rowIndex = Sunspots.ROWS * row;
        matrix = clear(matrix);
        for(var colIndex = 0; colIndex < Sunspots.COLUMNS; colIndex++) {
            matrix[rowIndex + colIndex] = 1;
        }
        return(matrix);
    };

    my.tickColumnAcross = function(clock, matrix) {
        var col = clock % Sunspots.COLUMNS;
        var colIndex = Sunspots.ROWS * col;
        matrix = clear(matrix);
        for(var rowIndex = 0; rowIndex < Sunspots.ROWS; rowIndex++) {
            matrix[(rowIndex * Sunspots.ROWS) + col] = 1;
        }
        return(matrix);
    };

    my.blink = function(clock, matrix) {
        var value = 0
        if(matrix[0] === 0) {
            value = 1;
        }
        return(fill(matrix, value));
    };

    function clear(matrix) {
        var ary = new Array(matrix.length);
        return(fill(ary, 0));
    }

    function fill(ary, value) {
        return(Array.apply(null, ary).map(function() { return value }));
    }

    return(my);

}(Demo3 || {}));
