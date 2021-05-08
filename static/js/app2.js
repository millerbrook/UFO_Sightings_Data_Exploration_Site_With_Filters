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

function buildHTMLTable(incomingData) {
  //remove leftover rows
  var oldRows = d3.select("tbody").selectAll("tr");
  oldRows.remove();
  //Print table
  var printTable = d3.select("tbody");
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
};

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
  var countryValue = countryField.property("value");
  var shapeValue = shapeField.property("value");
  var durationValue = durationField.property("value");
  console.log("Date Value is: ", dateValue);
  console.log("City value is: ", cityValue);

  //Filter array for final table
  //Set to full data set to start
  tableFiltered = data;

  //If dateValue.length > 0, filter for date
  let dateFilter = [];
  if (dateValue.length > 0) {
    tableData.forEach(function (item) {
      //console.log(dateValue);
      if (item.datetime === dateValue) {
        dateFilter.push(item);
      }
    });
  }
  //console.log(dateFilter);

  //Check if filter grabbed any values. if so, make tableFiltered the set of those values
  if (dateFilter.length > 0) {
    tableFiltered = dateFilter;
  }

  //Establish array to store filtered by city data
  let cityFilter = [];

  //If cityValue.length > 0, filter for city
  if (cityValue.length > 0) {
    tableFiltered.forEach(function (item) {
      //console.log(cityValue);
      if (item.city === cityValue) {
        cityFilter.push(item);
      }
    });
    tableFiltered = cityFilter;
  }

  //Establish array to store filtered by state data
  let stateFilter = [];

  //If state field has a value, filter for state
  if (stateValue.length > 0) {
    tableFiltered.forEach(function (item) {
      //console.log(stateValue);
      if (item.state === stateValue) {
        stateFilter.push(item);
      }
    });
    tableFiltered = stateFilter;
  }

  //Establish array to store filtered by country data
  let countryFilter = [];

  //If state field has a value, filter for country
  if (countryValue.length > 0) {
    tableFiltered.forEach(function (item) {
      //console.log(stateValue);
      if (item.country === countryValue) {
        countryFilter.push(item);
      }
    });
    tableFiltered = countryFilter;
  }

  //Establish array to store filtered by shape data
  let shapeFilter = [];

  //If state field has a value, filter for shape
  if (shapeValue.length > 0) {
    tableFiltered.forEach(function (item) {
      //console.log(shapeValue);
      if (item.shape === shapeValue) {
        shapeFilter.push(item);
      }
    });
    tableFiltered = shapeFilter;
  }

  //Establish array to store filtered by duration data
  let durationFilter = [];

  //If state field has a value, filter for duration
  if (durationValue) {
    tableFiltered.forEach(function (item) {
      //console.log(stateValue);
      if (item.durationMinutes === durationValue) {
        durationFilter.push(item);
      }
    });
    tableFiltered = durationFilter;
  }
  //console.log(dateFilter);
  //console.log(cityFilter);
  //console.log(tableFiltered);

  //Possibility: none of the filters narrowed down tableFiltered, so original table should be output
  if (tableFiltered === data) {
    buildHTMLTable(tableData);
  } else {
    buildHTMLTable(tableFiltered);
  }
}

buildHTMLTable(tableData);
