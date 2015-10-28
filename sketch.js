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
 	
 	//print total number of earthquakes in last hour
	fill(241,57,109, 255);
	textSize(20);
	  	
  	if (table.getRowCount() === 1) {
    	text("In the last hour, " + table.getRowCount() + " earthquake has occurred...", width/2, 100);
  	}
  	else {
    	text("In the last hour, " + table.getRowCount() + " earthquakes have occurred...", width/2, 100);
  	}

	//load all the magnitudes
	var allMags = [];
	for (var i = 0; i < table.getRowCount(); i++) {
		allMags.push(table.get(i,4));
	}		

	//count number of quakes at each Mercalli intensity
	// http://earthquake.usgs.gov/learn/topics/mag_vs_int.php
	// Magnitude	Typical Maximum
	// Modified Mercalli Intensity
	// 1.0 - 3.0	I                    unnoticeable
	// 3.0 - 3.9	II - III             slightly noticeable
	// 4.0 - 4.9	IV - V               little damage likely
	// 5.0 - 5.9	VI - VII             moderate damage likely
	// 6.0 - 6.9	VII - IX             considerable damange likely
	// 7.0 and higher	VIII or higher   severe damage likely
	var mercalliI = 0;
	var mercalliIItoIII = 0;
	var mercalliIVtoV = 0;
	var mercalliVItoVII = 0;
	var mercalliVIItoIX = 0;
	var mercalliVIIIplus = 0;
	for (var i = 0; i < allMags.length; i++) {
		if (allMags[i] < 3.0)
			mercalliI++;
		else if (3.0 <= allMags[i] && allMags[i] < 4.0)
			mercalliIItoIII++;
		else if (4.0 <= allMags[i] && allMags[i] < 5.0)
			mercalliIVtoV++;
		else if (5.0 <= allMags[i] && allMags[i] < 6.0)
			mercalliVItoVII++;
		else if (6.0 <= allMags[i] && allMags[i] < 7.0)
			mercalliVIItoIX++;
		else
			mercalliVIIIplus++;
	} 

	//draw concentric circles to visualize all quakes
	for (var i = 0; i < 3; i++) {
		fill(241,57,109, 150 - i * 10);
		ellipse(width/3, 300, 75 + 75 * i, 75 + 75 * i);
	}




 	

}

function windowResized() {
 	resizeCanvas(windowWidth, 400 + table.getRowCount() * 400);
}