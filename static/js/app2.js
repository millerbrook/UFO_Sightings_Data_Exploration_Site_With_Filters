// from data.js
var tableData = data;

// YOUR CODE HERE!
//Select date field and button

var button = d3.select("#filter-btn");
var form = d3.select("#date-form");
//Test with hard coded date;
//date = "1/10/2010";

//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Create the function to run for both events...
//function wraps everything that follows
function runEnter() {
  //Prevent the page from refreshing
  d3.event.preventDefault();

  //Select the input element and get the raw HTML node
  var dateField = d3.select("#datetime");
  var cityField = d3.select("#cityInput");
  var stateField = d3.select("#stateInput");
  var countryField = d3.select("#countryInput");
  var shapeField = d3.select("#shapeInput");
  var durationField = d3.select("#durationInput");
     

  //Get the value property of the input element
  var dateValue = dateField.property("value");
  var cityValue = cityField.property("value");
  var stateValue = stateField.property("value");
  var countryValue = countryyField.property("value");
  var shapeValue = shapeField.property("value");
  var durationValue = durationField.property("value");
  console.log("Date Value is: ", dateValue);
  console.log("City value is: ", cityValue);
  //Filter array for final table
  //Set to full data set to start
  tableFiltered = data;

  //If dateValue.length > 0, filter for date
  dateFilter = [];
  if (dateValue.length > 0) {
    tableData.forEach(function (item) {
        //console.log(dateValue);
        if (item.datetime === dateValue) {
        dateFilter.push(item);
        }
    });
  };
  //console.log(dateFilter);

  //Check if filter grabbed any values. if so, make tableFiltered the set of those values
  if (dateFilter.length > 0) {
    tableFiltered = dateFilter;
  };

  //establish array to store filtered by city data
  cityFilter = [];

  //If cityValue.length > 0, filter for city
  if (cityValue.length > 0) {
  tableFiltered.forEach(function (item) {
    //console.log(cityValue);
    if (item.city === cityValue) {
      cityFilter.push(item);
    }
    });
    tableFiltered = cityFilter;  
  };
  
    //console.log(dateFilter);
  //console.log(cityFilter);
  //console.log(tableFiltered);
//Possibility: none of the filters narrowed down tableFiltered, so nothing should be output
if (tableFiltered === data) {
    //PRINT "No Records Found" to "#no-output" div (tucked below... or put something in an make it hidden, then change to visible?)
}
else {
  //Print final filtered table
  var printTable = d3.select("#ufo-table");
  tableFiltered.forEach(function (tableObject) {
    //Make a row for each object in table
    var row = printTable.append("tr");
    //Print values within each object
    Object.entries(tableObject).forEach(([key, value]) => {
      var cell = row.append("td");
      console.log(value);
      cell.text(value);
    });
  });
};
};
// need to delete old table if a new search is conducted