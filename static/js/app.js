// from data.js
var tableData = data;

// YOUR CODE HERE!
date = "1/11/2010";

dateFilter = [];
tableData.forEach(function(item) {
    if (item.datetime === date)
        dateFilter.push(item)
    })

var printTable = d3.select("#ufo-table")

dateFilter.forEach( function(dateObject) {
    var row = printTable.append("tr");
    Object.values(dateObject).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
