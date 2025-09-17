// in another life 
// digital poem by aileen lian
// sept 2023

//----------------------------------------------------//

var page;

var r = 255, g = 255, b = 255; 
var a = 255, c = 255, d = 255; 
var titleClick = ["i am", "you are", "we are"];

// all of the possible phrases 

var phrase1 = [
    "i ask you to go stargazing again", 
    "i know how to tell you what i want", 
    "i’m comfortable with taking up space in your life", 
    "i don’t have this much baggage", 
    "i see you at the right time", 
    "i know how you fold your clothes", 
    "i make you fried eggs for breakfast", 
    "i never move to california", 
    "i never move to san diego",
    "i never move to new york city",
    "i never move out of new york city",
    "i meet you at a new year’s eve party",
    "i move to seattle",
    "i move to boston",
    "i move to colorado",
    "i move to tacoma",
    "i move to portland",
    "i move to chicago",
    "i stay in san diego",
    "i meet you at a bar",
    "i know how you take your tea",
    "i wear your t-shirts to sleep",
    "i sing you silly songs when i'm sleepy",
    "i read you angsty poetry from my notes app",
    "i buy you brunch",
    "i leave my umbrella at your apartment",
    "i know what i want",
    "i leave my umbrella in your car",
    "i forget my scarf at your apartment",
    "i kiss you at midnight",
    "i sing you a song i wrote",
    "i tell you that i miss you",
    "i hold the door open for you",
    "i meet you at a coffee shop",
    "i see you at a museum",
    "i tell you what's on my mind", 
    "i tell you what's actually on my mind", 
    "i show you what i'm working on", 
    "i tell you how i feel", 
    "i'm ready when you are", 
    
    
];

var phrase2 = [
    "you meet me at the farmer’s market on saturdays",
    "you meet me at the farmer's market on sundays",
    "you know where my mugs are", 
    "you know how i take my coffee", 
    "you know my favorite shades of green", 
    "you know how to tell me what you want",
    "you’re comfortable with taking up space in my life", 
    "you see me at the right time", 
    "you ask me to go stargazing again", 
    "you call me when you’re driving", 
    "you always kiss me good morning",
    "you always kiss me good night",
    "you watch the bachelorette with me on mondays",
    "you bring me soup when i'm sick",
    "you let me have the bigger piece",
    "you grab dinner for us on your way home",
    "you bring me bubble tea when i'm sad",
    "you pick up my laundry for me",
    "you buy me dinner",
    "you meet me at my subway stop",
    "you tell me that you love me",
    "you pick me up from the airport",
    "you sing to me in the car",
    "you know what you want",
    "you see me on the train",
    "you find me at a party",
    "you stroke my hair as i fall asleep",
    "you see me at a concert",
    "you call me in the morning",
    "you take me to a gallery opening",
    "you drive me to the train station",
    "you ask me to stay",
    "you change my windshield wipers for me",
    "you ask if you can hold my hand",
    "you kiss the freckles on my nose",
    "you tell me what's on your mind", 
    "you tell me what's actually on your mind", 
    "you tell me how you're feeling", 
    "you ask me to come with you",
    "you write me little notes", 
    "you invite me over for dinner", 
    
];

var phrase3 = [
    "we know how to do this without hiding from each other", 
    "we have enough thread to tie up loose ends", 
    "we never run out of time", 
    "we go grocery shopping on friday mornings",
    "we french braid each other's hair",
    "we adopt another cat",
    "we visit taiwan with my mom",
    "we find our new couch on facebook marketplace",
    "we facetime on the toilet",
    "we nap with the windows open",
    "we're better at being vulnerable with each other",  
    "we roll down the hills at storm king",
    "we stay up late talking about our parents",
    "we picnic in our favorite park",
    "we eat breakfast for dinner",
    "we have a hammock in our backyard",
    "we file our taxes early every year",
    "we take turns doing the dishes",
    "we get lost in amsterdam",
    "we stay up late talking about our families",
    "we stay in bed all day",
    "we stay up late looking at the moon",
    "we have more time",
    "we have enough time",
    "we host dinner parties on sundays",
    "we curl up on the couch and listen to the rain",
    "we have enough time to sort things out",
    "we don't have to wonder about how things could be different",
    "we take weekend trips to the city",
    "we know how to hold space for each other",
    "we meal prep on sundays",
    "we paint our kitchen olive green",
    "we go for walks during golden hour",
    "we contemplate moving to ireland",
    "we eat ice cream for dinner",
    "we learn how to be soft with each other", 
    "we make up for lost time", 
    "we're not afraid of getting old", 
    "we dance around my apartment", 
    
];


function setup(){    
    createCanvas(800, 500);
    randomizeIntroColors();
    randomizeTitleClick();
    randomizePoemColors();
    randomizePhrase1();
    randomizePhrase2();
    randomizePhrase3();
    frameRate(60);
    page = 1;
    textSize(15);
    noStroke();
}


function draw(){    
// *** page 1 = title page *** //
    
if (page == 1){
    background(r, g, b);
    textAlign(LEFT,LEFT);
    fill(255);
    text("in another life", 50, 450); 

// button to advance 
    if(mouseX > 20 && mouseX < 180 && mouseY > 420 && mouseY < 480){     
        background(r, g, b);
        fill(r + 100, g + 100, b + 100);
        text(titleClick, 50, 450);
    }
    
// button to advance    
    if(mouseIsPressed && mouseX > 20 && mouseX < 180 && mouseY > 420 && mouseY < 480){
        page = 2;
    } 
}


// *** page 2 = description page *** //

if (page == 2){
    background(190);
    fill(255);
    textAlign(LEFT,LEFT);
    text("a digital poem about", 50, 50);
    textAlign(RIGHT,LEFT);
    text("how things would be different", 750, 50);
    text("if they were different", 750, 70);
    textAlign(LEFT,RIGHT);
    text("(song credit: memory storage // ghost orchard)", 50, 450);
    textAlign(RIGHT,RIGHT);
    text("(click on text that changes when you hover)", 750, 450);
    fill(73, 120, 103);
    textAlign(CENTER,LEFT);
    text("start", 400, 250);
    
// text for start button changes when you hover 
if(mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 300){
    fill(190);
    rect(300, 200, 200, 100);
    fill(73, 120, 103);
    textAlign(CENTER,LEFT);
    text("start", 400, 250);
    fill(220);
    text("(again)", 400, 270);
}
    
// button to advance 
if(mouseIsPressed && mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 300){
    page = 3;
    }
       
}

// *** page 3 = poem page 1 *** //
    
if(page == 3){
    background(a, c, d);
    textAlign(LEFT,CENTER);
    fill(a + 100, c + 100, d + 100);
    text("in another life,", 100, 100);
    fill(255);
    text(randPhrase1 + ";", 100, 150);
    text(randPhrase2 + ";", 100, 200);
    text(randPhrase3 + ".", 100, 250);
    textAlign(RIGHT,CENTER);
    fill(a + 100, c + 100, d + 100);
    text("try again?", 700, 400);
    
// button to try again
    
if(mouseX > 590 && mouseX < 740 && mouseY > 355 && mouseY < 445){
    fill(a, c, d);
    rect(590, 355, 150, 90);
    textAlign(RIGHT,CENTER);
    fill(a - 50, c - 50, d - 50);
    text("try again?", 700, 400);
    }    
}
    
    
  
// final draw bracket 
}


// randomly chooses background color for intro page/page 1
function randomizeIntroColors() {
    r = random(210);
    g = random(210);
    b = random(210);
}

// randomly chooses text to be displayed when you hover over the intro page/page 1 button; randomly generated from setup and not each time you hover 
function randomizeTitleClick(){
    titleClick = random(titleClick);
}

// randomly chooses background color for poem page 1
function randomizePoemColors(){
    a = random(210);
    c = random(210);
    d = random(210); 
}

// randomly chooses "i" phrase 
function randomizePhrase1(){
    randPhrase1 = random(phrase1);
}

// randomly chooses "you" phrase
function randomizePhrase2(){
    randPhrase2 = random(phrase2);
}
    
// randomly chooses "we" phrase 
function randomizePhrase3(){
    randPhrase3 = random(phrase3);
}

function mousePressed(){
    if(mouseX > 590 && mouseX < 740 && mouseY > 355 && mouseY < 445){
    randomizePoemColors();
    randomizePhrase1();
    randomizePhrase2();
    randomizePhrase3();
    }
}
