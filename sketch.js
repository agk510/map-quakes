var table;

function preload() {
	table = loadTable("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv", "csv", "header");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  	ellipseMode(CENTER);
  	}


function draw() {
	textAlign(CENTER);
	background(193, 235, 250)
 	
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
 	resizeCanvas(windowWidth, windowHeight);
}