function preload(){


}
function setup(){
Canvas = createCanvas(700,700);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,100,80,500,500);
fill("green");
stroke("litgh-green");
circle(100,80,50);

rect(600,40,50,50);

}
function tirar_foto(){

    save('foto.png');
}