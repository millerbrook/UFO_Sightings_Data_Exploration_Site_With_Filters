// from data.js
var tableData = data;

// YOUR CODE HERE!
//Select date field and button

var button = d3.select('#filter-btn');
var form = d3.select('#date-form')
//Test with hard coded date;
//date = "1/10/2010";

//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

function buildHTMLTable(incomingData) {
    //remove leftover rows
    var oldRows = d3.select("#ufo-table").selectAll("tr");
    oldRows.remove();
    //Print table
    var printTable = d3.select("#ufo-table");
    incomingData.forEach(function (tableObject) {
      //Make a row for each object in table
      var row = printTable.append("tr");
      //Print values within each object
      Object.entries(tableObject).forEach(([key, value]) => {
        var cell = row.append("td");
        console.log(value);
        cell.text(value);
      });
    });
}

//Create the function to run for both events
function runEnter() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");

    //Get the value property of the input element
    var dateValue = dateInput.property("value");

    
      dateFilter = [];
    if (dateValue){
    tableData.forEach(function(item) {
        console.log(dateValue);
        if (item.datetime === dateValue){
            dateFilter.push(item);
        };
    });
        console.log(dateFilter)
        buildHTMLTable(dateFilter);
    };
};

    buildHTMLTable(tableData);