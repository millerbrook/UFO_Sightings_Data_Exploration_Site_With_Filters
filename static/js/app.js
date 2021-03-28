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

//Create the function to run for both events
function runEnter() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");

    //Get the value property of the input element
    var dateValue = dateInput.property("value");
    return dateValue;
}

dateFilter = [];
try {
    tableData.forEach(function(item) {
        console.log(dateValue);
        if (item.datetime === dateValue)
            dateFilter.push(item);
        })
    console.log(dateFilter)
    var printTable = d3.select("#ufo-table")

    dateFilter.forEach( function(dateObject) {
        var row = printTable.append("tr");
        Object.entries(dateObject).forEach(([key, value]) => {
            var cell = row.append("td");
            console.log(value);
            cell.text(value);
        });
    });
}
catch {
    console.log('no data entered');
};