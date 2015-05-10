var Demo2 = (function(my){
    my.tick = function(clock, matrix) {
        var col = clock % Sunspots.COLUMNS;
        var colIndexOn = col;
        for(var rowIndex = 0; rowIndex < Sunspots.ROWS; rowIndex++) {
            for(var colIndex = 0; colIndex < Sunspots.COLUMNS; colIndex++) {
                var value = 0;
                if (colIndex === colIndexOn) {
                    value = 1;
                }
                var index = (rowIndex * Sunspots.COLUMNS) + colIndex;
                matrix[index] = value;
            }
        }
        return(matrix);
    };

    return(my)
}(Demo2 || {}));
