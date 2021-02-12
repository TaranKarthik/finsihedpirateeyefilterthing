const array = ["GRAY","NATURE","REDTINT","NORMAL"];
var button3;
var macha;
var eyeX;
var eyeY;



function preload(){
    pirateeye = loadImage("https://i.postimg.cc/kGhywFC4/ughy.png");
}

function setup(){
    c = createCanvas(1000,600);
    c.center();
    
    capture = createCapture(VIDEO);
    capture.size(1000,600)
    
    capture.hide();
    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on("pose",gotPoses);
    
}

function modelLoaded()
{
    console.log("yes.");
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
       
        eyeX = results[0].pose.rightEye.x-200;
        eyeY = results[0].pose.rightEye.y-150;
        
        
    }
}
 
function draw(){
    background(0,0,0);
    image(capture, 0, 0,1000,600);
    image(pirateeye,eyeX,eyeY);
    
    
    
    button2 = createButton('❮');
    button2.position(500,600);
    button2.style("background","#FF0090");
    button2.style("outline","none");
    button2.style("border","none");
    button2.style("padding","14px");
    button2.style("color","white");
    button2.style("border-radius","10px");
    button2.mousePressed(buttonofgrayscaleleftclick)
    button3 = createButton("click on the buttons");
    button3.position(540,600);
    button3.style("background","#FF0090");
    button3.style("outline","none");
    button3.style("border","none");
    button3.style("padding","14px");
    button3.style("color","white");
    button3.style("width","300px");
    button3.style("border-radius","10px");
    button4 = createButton('❯');
    button4.position(845,600);
    button4.style("background","#FF0090");
    button4.style("outline","none");
    button4.style("border","none");
    button4.style("padding","14px");
    button4.style("color","white");
    button4.mousePressed(buttonofgrayscaleclick);
    
    
    
    button4.style("border-radius","10px");
    button5 = createButton('capture');
    button5.position(980,600);
    button5.style("background","#FF0090");
    button5.style("outline","none");
    button5.style("border","none");
    button5.style("padding","14px");
    button5.style("color","white");
    
    button5.style("border-radius","10px");
    button5.mousePressed(capture_Image);

    
    

}



var i = 0;

function buttonofgrayscaleclick(){
    
    i++;
    var nummy = 3;
    if(i>nummy){
        i = 0;
    }
    macha = array[i];
    console.log(macha);
    if(macha == "GRAY"){
        tint("gray")
        button3.value = "gray";
    }else if(macha == "REDTINT"){
        tint("red")
        button3.value = "red";
    }else if(macha == "NORMAL"){
        noTint();
        button3.value = "normal";
    }else if(macha == "NATURE"){
        tint("green")
        button3.value = "nature";
    }

    
}
function buttonofgrayscaleleftclick(){
    
    i = i-1;
    
    if(i < 0){
        i = 3;
    }
    macha = array[i];
    console.log(macha);
    if(macha == "GRAY"){
        tint("gray")
        button3.value = "gray";
    }else if(macha == "REDTINT"){
        tint("red")
        button3.value = "red";
    }else if(macha == "NORMAL"){
        noTint();
        button3.value = "normal";
    }else if(macha == "NATURE"){
        tint("green")
        button3.value = "nature";
    }

    
}

function capture_Image(){
    save('myfilteredpiratepic.png');
}