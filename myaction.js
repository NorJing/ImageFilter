var originalImage = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var goldFrameImage = null;
var canvas = null;
var loadImageInput = null;

function loadImage(){
    loadImageInput = document.getElementById("loadimage");
    canvas = document.getElementById("field");
    originalImage = new SimpleImage(loadImageInput);
    grayImage = new SimpleImage(loadImageInput);
    redImage = new SimpleImage(loadImageInput);
    goldFrameImage = new SimpleImage(loadImageInput);
    rainbowImage = new SimpleImage(loadImageInput);
    originalImage.drawTo(canvas);
}

function imageIsLoaded(image){
    if (image == null || ! image.complete()){
	alert("Image not loaded!");
	return false;
    }else{
	return true; 
    }
}

function makegrayImage(){
    if(imageIsLoaded(grayImage)){
	doGrayImage();
	grayImage.drawTo(canvas);
    }
}

function doGrayImage(){
    for(var pixel of grayImage.values()){
	var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
	pixel.setRed(avg);
	pixel.setGreen(avg);
	pixel.setBlue(avg);
    }
}

function makerainbowImage(){
    if(imageIsLoaded(rainbowImage)){
	doRainbowImage();
	rainbowImage.drawTo(canvas);
    }
}

function doRainbowImage(){
    for(var pixel of rainbowImage.values()){
	var y = pixel.getY();
	var red = pixel.getRed();
	var green = pixel.getGreen();
	var blue = pixel.getBlue();
	var avg = (red + green + blue)/3;
	var threshold = 128;
	if(y < rainbowImage.getHeight()/7){
	    if (avg < threshold){
		pixel.setRed(2*avg);
		pixel.setGreen(0);
		pixel.setBlue(0);
	    }else{
		pixel.setRed(255);
		pixel.setGreen(2*avg-255);
		pixel.setBlue(2*avg-255);
	    }
	}
	if(y >= rainbowImage.getHeight()/7 && y < 2*rainbowImage.getHeight()/7){
	    if (avg < threshold){
		pixel.setRed(2*avg);
		pixel.setGreen(0.8*avg);
		pixel.setBlue(0);
	    }else{
		pixel.setRed(255);
		pixel.setGreen(1.2*avg-51);
		pixel.setBlue(2*avg-255);
	    }
	}
	if(y >= 2*rainbowImage.getHeight()/7 && y < 3*rainbowImage.getHeight()/7){
	    if (avg < threshold){
		pixel.setRed(2*avg);
		pixel.setGreen(2*avg);
		pixel.setBlue(0);
	    }else{
		pixel.setRed(255);
		pixel.setGreen(255);
		pixel.setBlue(2*avg-255);
	    }
	}
	if(y >= 3*rainbowImage.getHeight()/7 && y < 4*rainbowImage.getHeight()/7){
	    if (avg < threshold){
		pixel.setRed(0);
		pixel.setGreen(2*avg);
		pixel.setBlue(0);
	    }else{
		pixel.setRed(2*avg - 255);
		pixel.setGreen(255);
		pixel.setBlue(2*avg-255);
	    }
	}
	if(y >= 4*rainbowImage.getHeight()/7 && y < 5*rainbowImage.getHeight()/7){
	    if (avg < threshold){
		pixel.setRed(0);
		pixel.setGreen(0);
		pixel.setBlue(2*avg);
	    }else{
		pixel.setRed(2*avg-255);
		pixel.setGreen(2*avg-255);
		pixel.setBlue(255);
	    }
	}
	if(y >= 5*rainbowImage.getHeight()/7 && y < 6*rainbowImage.getHeight()/7){
	    if (avg < threshold){
		pixel.setRed(0.8*avg);
		pixel.setGreen(0);
		pixel.setBlue(2*avg);
	    }else{
		pixel.setRed(1.2*avg-51);
		pixel.setGreen(2*avg-255);
		pixel.setBlue(255);
	    }
	}
	if(y >= 6*rainbowImage.getHeight()/7 && y < rainbowImage.getHeight()){
	    if (avg < threshold){
		pixel.setRed(1.6*avg);
		pixel.setGreen(0);
		pixel.setBlue(1.6*avg);
	    }else{
		pixel.setRed(0.4*avg+153);
		pixel.setGreen(2*avg-255);
		pixel.setBlue(0.4*avg+153);
	    }
	}
    }
}

function makeRedImage(){
    if(imageIsLoaded(redImage)){
	doRedImage();
	redImage.drawTo(canvas);
    }
}

function doRedImage(){
    for(var pixel of redImage.values()){
	var red = pixel.getRed();
	var green = pixel.getGreen();
	var blue = pixel.getBlue();
	var avg = (red + green + blue)/3;
	if (avg < 128){
	    pixel.setRed(avg * 2);
	    pixel.setGreen(0);
	    pixel.setBlue(0);
	}else{
	    pixel.setRed(255);
	    pixel.setGreen(avg * 2 - 255);
	    pixel.setBlue(avg * 2 - 255);
	}
    }
}

function makeGoldYFrame(){
    if(imageIsLoaded(goldFrameImage)){
	doGoldFrameImage();
	goldFrameImage.drawTo(canvas);
    }
}

function doGoldFrameImage(){
    for(var pixel of goldFrameImage.values()){
	var x = pixel.getX();
	var y = pixel.getY();
	if (x < 100 || (x > goldFrameImage.getWidth() - 100)){
	    pixel.setRed(255);
	    pixel.setGreen(215);
	    pixel.setBlue(0);
	}
    }
}

function resetImage(){
    if(imageIsLoaded(originalImage)){
	originalImage.drawTo(canvas);
	grayImage = new SimpleImage(loadImageInput);
	redImage = new SimpleImage(loadImageInput);
	goldFrameImage = new SimpleImage(loadImageInput);
	rainbowImage = new SimpleImage(loadImageInput);
    }
}
