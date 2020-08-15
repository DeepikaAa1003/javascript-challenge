// get data from data.js
var tableData = data;
//Locate tbody using ID
var tbody = d3.select("#ufoBody");

//Locate button using filter-btn ID
var buttonFilter = d3.select("#filter-btn")
buttonFilter.on("click", handleChange);

// Function to handle input change
function handleChange(event) {
    
    //Clear the table
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the date time textbox
    var dateFilter = d3.select("#datetime");

    // Get the value property of the input element
     var inputValue = dateFilter.property("value");

    // Print the value to the console
    //console.log(inputValue);
    filterUFOList = data.filter(ufo => {
        //console.log(ufo.datetime);
        return ufo.datetime  === inputValue;
      
    });

    console.log(filterUFOList);





    filterUFOList.forEach((ufoData) => {
        //add a row to the table body 
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
        //Add a column to the row
        var cell = row.append("td");
        console.log(value);
        //set the column value
        cell.text(value);
        });
    });
}