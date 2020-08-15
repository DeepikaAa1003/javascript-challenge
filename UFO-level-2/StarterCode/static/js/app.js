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
    var dateFilter = d3.select("#datetime").property("value");
    var cityFilter = d3.select("#city").property("value").toLowerCase();
    var stateFilter = d3.select("#state").property("value").toLowerCase();
    var countryFilter = d3.select("#country").property("value").toLowerCase();
    var shapeFilter = d3.select("#shape").property("value").toLowerCase();
    
    var filterUFOList = data;

    // Print the value to the console
    if(dateFilter){
        console.log(`Inside Date filter${dateFilter}`);
        filterUFOList = filterUFOList.filter(ufo => ufo.datetime  === dateFilter);
    }
    if(cityFilter){
        console.log(`Inside city filter${cityFilter}`);
        filterUFOList = filterUFOList.filter(ufo => ufo.city  === cityFilter);
    }
    if (stateFilter){
        console.log(`Inside state filter${stateFilter}`);
        filterUFOList = filterUFOList.filter(ufo => ufo.state  === stateFilter);
    }
    if (countryFilter){
        console.log(`Inside country filter${countryFilter}`);
        filterUFOList = filterUFOList.filter(ufo => ufo.country  === countryFilter);
    }
    if (shapeFilter){
        console.log(`Inside shape filter${shapeFilter}`);
        filterUFOList = filterUFOList.filter(ufo => ufo.shape  === shapeFilter);
    }
    





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