var array1 =["iteration", "vague", "repetition.",  "default", "mechanical.", "happy", "installation", "handwritten", "drawing", "forms", "I have practiced a lot", "a cliché", "get a feeling.", "moving people",  "solving problems by hand", "teaching new skills", "sketch a lot", "maybe I should get back into that", "get out of the default", "getting a response out of people", "a foundational principle", "making as many different versions of something", "tried to learn about the past", "lots of different topics", "something new", "development of your voice or your style", "I'm looking for things to collect",  "find data", "a funny question", "it lives in many different places", "immersive setups and installations", "multiple formats", "the opportunity to make art", "something to latch onto", "trying to decipher between design and art", "playing with different mediums", "multimedia sharing", "experiencing joy", "endorphin burst", "reconnected with old friends", "addiction", "true states of happiness", "fill up a room with drawings", "a drawing machine", "if no one was watching", "what are my ideas?"]

var array2 =["iteration", "vague", "repetition.",  "default", "mechanical.", "happy", "installation", "handwritten", "drawing", "forms", "I have practiced a lot", "a cliché", "get a feeling.", "moving people",  "solving problems by hand", "teaching new skills", "sketch a lot", "maybe I should get back into that", "get out of the default", "getting a response out of people", "a foundational principle", "making as many different versions of something", "tried to learn about the past", "lots of different topics", "something new", "development of your voice or your style", "I'm looking for things to collect",  "find data", "a funny question", "it lives in many different places", "immersive setups and installations", "multiple formats", "the opportunity to make art", "something to latch onto", "trying to decipher between design and art", "playing with different mediums", "multimedia sharing", "experiencing joy", "endorphin burst", "reconnected with old friends", "addiction", "true states of happiness", "fill up a room with drawings", "a drawing machine", "if no one was watching", "what are my ideas?"]

var array3 =["iteration", "vague", "repetition.",  "default", "mechanical.", "happy", "installation", "handwritten", "drawing", "forms", "I have practiced a lot", "a cliché", "get a feeling.", "moving people",  "solving problems by hand", "teaching new skills", "sketch a lot", "maybe I should get back into that", "get out of the default", "getting a response out of people", "a foundational principle", "making as many different versions of something", "tried to learn about the past", "lots of different topics", "something new", "development of your voice or your style", "I'm looking for things to collect",  "find data", "a funny question", "it lives in many different places", "immersive setups and installations", "multiple formats", "the opportunity to make art", "something to latch onto", "trying to decipher between design and art", "playing with different mediums", "multimedia sharing", "experiencing joy", "endorphin burst", "reconnected with old friends", "addiction", "true states of happiness", "fill up a room with drawings", "a drawing machine", "if no one was watching", "what are my ideas?"]

var colorarray = []

for (x=0; x<25; x++){
colorarray[x] = Math.floor(Math.random() * 255)
}    

$( document ).ready(function() {
  var randomsentence0 = ''
  var randomsentence1 = ''
  var randomsentence2 = ''
  var randomsentence3 = ''
  var randomsentence4 = ''
  var randomsentence5 = ''
  var randomsentence6 = ''
  var randomsentence7 = ''
  var randomsentence8 = ''
  var randomsentence9 = ''
  var randomsentence10 = ''
  var randomsentence11 = ''
  var randomsentence12 = ''
  var randomsentence13 = ''
  var randomsentence14 = ''
  var randomsentence15 = ''
  var randomsentence16 = ''
  var randomsentence17 = ''
  var randomsentence18 = ''
  var randomsentence19 = ''
  var randomsentence20 = ''
  var randomsentence21 = ''
  var randomsentencearray =[randomsentence0, randomsentence1, randomsentence2, randomsentence3, randomsentence4, randomsentence5, randomsentence6, randomsentence7, randomsentence8, randomsentence9, randomsentence10, randomsentence11, randomsentence12, randomsentence13, randomsentence14, randomsentence15, randomsentence16, randomsentence17, randomsentence18, randomsentence19, randomsentence20, randomsentence21]
  

function typeWriter(l,s,i){
  var track = "";
  var len = s.length;
  var n = 0;
  $(l).text("");
  var si = setInterval(function(){
  var res = track + s.charAt(n);
  $(l).text(res);
  track = res;
  if(n===len-1){
      clearInterval(si);
  }
  n = n + 1;
},i);
}

function newsent(name, ID, arrayname, CLASS, color){
  for (x=0 ; x<2; x++){
        var randomnum = Math.floor(Math.random() * arrayname.length)
        name = name + " " + arrayname[randomnum]
        arrayname.splice(randomnum, 1)
    }
    $(CLASS).css("background-color", `rgb(0,255,${color})`)  
    // console.log(name.length)
    typeWriter(ID, name, 50)
    arrayname = array2
}

var html = ""
for(x=0; x< 20; x++){
  html = html + `<div class = "container d${x}" id="type${x}"></div>`
  $("body").html(html)
  // $("body").append(`hello`)
}

console.log(colorarray)



setTimeout(() => {newsent(randomsentencearray[0], `#type0`, array1, `.d0`, colorarray[0])}, 0*1000);
setTimeout(() => {newsent(randomsentencearray[1], `#type1`, array1, `.d1`, colorarray[1])}, 1*1000 + 200);
setTimeout(() => {newsent(randomsentencearray[2], `#type2`, array1, `.d2`, colorarray[2])}, 2*1000 + 200);
setTimeout(() => {newsent(randomsentencearray[3], `#type3`, array1, `.d3`, colorarray[3])}, 3*1000);
setTimeout(() => {newsent(randomsentencearray[4], `#type4`, array1, `.d4`, colorarray[4])}, 4*1000);
setTimeout(() => {newsent(randomsentencearray[5], `#type5`, array1, `.d5`, colorarray[5])}, 5*1000 + 500);
setTimeout(() => {newsent(randomsentencearray[6], `#type6`, array1, `.d6`, colorarray[6])}, 6*1000);
setTimeout(() => {newsent(randomsentencearray[7], `#type7`, array1, `.d7`, colorarray[7])}, 7*1000);
setTimeout(() => {newsent(randomsentencearray[8], `#type8`, array1, `.d8`, colorarray[8])}, 8*1000);
setTimeout(() => {newsent(randomsentencearray[9], `#type9`, array1, `.d9`, colorarray[9])}, 9*1000);
setTimeout(() => {newsent(randomsentencearray[10], `#type10`, array1, `.d10`, colorarray[10])}, 10*1000);
setTimeout(() => {newsent(randomsentencearray[11], `#type11`, array1, `.d11`, colorarray[11])}, 11*1000);
setTimeout(() => {newsent(randomsentencearray[12], `#type12`, array1, `.d12`, colorarray[12])}, 12*1000);
setTimeout(() => {newsent(randomsentencearray[13], `#type13`, array1, `.d13`, colorarray[13])}, 13*1000);
setTimeout(() => {newsent(randomsentencearray[14], `#type14`, array1, `.d14`, colorarray[14])}, 14*1000);
setTimeout(() => {newsent(randomsentencearray[15], `#type15`, array1, `.d15`, colorarray[15])}, 15*1000);
setTimeout(() => {newsent(randomsentencearray[16], `#type16`, array1, `.d16`, colorarray[16])}, 16*1000);
setTimeout(() => {newsent(randomsentencearray[17], `#type17`, array1, `.d17`, colorarray[17])}, 17*1000);
setTimeout(() => {newsent(randomsentencearray[18], `#type18`, array1, `.d18`, colorarray[18])}, 18*1000);
setTimeout(() => {newsent(randomsentencearray[19], `#type19`, array1, `.d19`, colorarray[19])}, 19*1000);
setTimeout(() => {newsent(randomsentencearray[20], `#type20`, array1, `.d20`, colorarray[20])}, 20*1000);


// for(x=0; x< 20; x++){
//   setTimeout(() => {newsent(randomsentencearray[x], `#type${x}`, array1, `d${x}`, colorarray[x])}, x*1000);
// }



// setTimeout(() => {newsent(randomsentence2, "#twotype", array2, ".d2", colorarray[1])}, 2000);
// setTimeout(() => {newsent(randomsentence3, "#threetype", array3, ".d3", colorarray[2])}, 3000);
// setTimeout(() => {newsent(randomsentence4, "#fourtype", array1, ".d4", colorarray[3])}, 4000);
// setTimeout(() => {newsent(randomsentence5, "#fivetype", array1, ".d5", colorarray[4])}, 6000);
// setTimeout(() => {newsent(randomsentence6, "#sixtype", array1, ".d6", colorarray[5])}, 7000);
// console.log(randomsentence1)

  
  
  





});

//     // Themes:
//     // • why we are intereseted in back and forth between physical and digital?
//     // • repetition and multiples as a key aspect of printmaking and programming
//     // • difference between art and design is a question I've been thinking about



//     var array1 =["iteration", "vague", "repetition.",  "default", "mechanical.", "happy", "installation", "handwritten", "drawing", "forms", "I have practiced a lot", "a cliché", "get a feeling.", "moving people",  "solving problems by hand", "teaching new skills", "sketch a lot", "maybe I should get back into that", "get out of the default", "getting a response out of people", "a foundational principle", "making as many different versions of something", "tried to learn about the past", "lots of different topics", "something new", "development of your voice or your style", "I'm looking for things to collect",  "find data", "a funny question", "it lives in many different places", "immersive setups and installations", "multiple formats", "the opportunity to make art", "something to latch onto", "trying to decipher between design and art", "playing with different mediums", "multimedia sharing", "experiencing joy", "endorphin burst", "reconnected with old friends", "addiction", "true states of happiness", "fill up a room with drawings", "a drawing machine", "if no one was watching", "what are my ideas?"]
//     var randcolor = Math.floor(Math.random() * 255)

//     var randomsentence1 = ''
//     // var randomsentence2 = []
//     // var name;

// function myfunction(name){
//   for (x=0 ; x<2; x++){
//     var randomnum = Math.floor(Math.random() * array1.length)
//     name = name + " " + array1[randomnum]
//     array1.splice(randomnum, 1)
//     // console.log(randomsentence1)
//     // console.log(randomnum)
// }
// }

//     myfunction(randomsentence1);
    

//     // function sentencegen(arrayname){
//     //     for (x=0 ; x<2; x++){
//     //       var randomnum = Math.floor(Math.random() * array1.length)
//     //       arrayname = arrayname + " " + array1[randomnum]
//     //       array1.splice(randomnum, 1)
//     //       console.log(randomsentence1)
//     //       console.log(randomnum)
//     //   }
//     // }


   
    
    
//     var i = 0;
//     var txt = randomsentence1;
//     var speed = 50;

//     new TypeIt("#type", {
//       cursorChar:"",
//       speed: 70,
//       strings: randomsentence1,
//     }).go();

//     new TypeIt("#twotype", {
//       strings: "This is what will be typed!",
//     }).go();

//     new TypeIt("#threetype", {
//       strings: "This is what will be typed!",
//     }).go();

//     new TypeIt("#fourtype", {
//       strings: "This is what will be typed!",
//     }).go();

//     new TypeIt("#fivetype", {
//       strings: "This is what will be typed!",
//     }).go();

//     new TypeIt("#sixtype", {
//       strings: "This is what will be typed!",
//     }).go();

//     new TypeIt("#seventype", {
//       strings: "This is what will be typed!",
//     }).go();



//   });
    

//   //   function typeWriter() {
//   //     if (i < txt.length) {
//   //       document.getElementById("type").innerHTML += txt.charAt(i);
//   //       i++;
//   //       setTimeout(typeWriter, speed);
//   //     }

//   //     else i =0;
//   //   }

//   //   typeWriter();

//   // });
   

//     // function typeWriter() {
//     //     var addon = " "
//     //     $(".container").css("background-color", `rgb(0,255,${randcolor})`)  
//     //       for (i=0; i < txt.length; i++) {
//     //         addon = addon + txt.charAt(i)
//     //         console.log(addon)
//     //         setTimeout($("#type").html(addon), 50) 
//     //       }
//     //   }
    




