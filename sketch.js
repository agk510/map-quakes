var table;

function preload() {
	table = loadTable("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv", "csv", "header");
}

function setup() {
	createCanvas(windowWidth, 400 + table.getRowCount() * 400);
  	ellipseMode(CENTER);
  	}


function draw() {
	textAlign(CENTER);
	background(193, 235, 250)
 	
	//load all the magnitudes
	var allMags = [];
	for (var i = 0; i < table.getRowCount(); i++) {
		allMags.push(table.get(i,4));
	}		

	//count number of quakes at each Mercalli intensity
	var mercalliI = 0;
	var mercalliIItoIII = 0;
	var mercalliIVtoV = 0;
	var mercalliVItoVII = 0;
	var mercalliVIItoIX = 0;
	var mercalliVIIIplus = 0;
	for (var j = 0; j < allMags.length(); j++) {

	} 

 	//print total number of earthquakes in last hour
	fill(241,57,109, 255);
	textSize(20);
	  	
  	if (table.getRowCount() === 1) {
    	text("In the last hour, " + table.getRowCount() + " earthquake has occurred...", width/2, 100);
  	}
  	else {
    	text("In the last hour, " + table.getRowCount() + " earthquakes have occurred...", width/2, 100);
  	}

}

function windowResized() {
 	resizeCanvas(windowWidth, 400 + table.getRowCount() * 400);
}