function start(){
     document.body.style.background = ("black");
     var begingame = document.getElementById("begingame")
     begingame.style.display = "block"
     var startstatement = document.getElementById("startstatement");
     startstatement.innerHTML = "You are not suppose to survive. This game is made to loop the player around until the player can find the randomly generated exit. Yet you are going to Die Now hit begin"
     startstatement.style.display = "block"
     starter.style.display = "none";
     var he = document.getElementById("he");
     he.style.display = "none";
     var question = document.getElementById("firstquestion");
     question.style.display = "none";
     var second = document.getElementById("secondquestion");
     second.style.display = "none";
     var leftquestion = document.getElementById("leftquestion");
     leftquestion.style.display = "none";
     setTimeout(function(){
          alert("Made by TripleJGames/JalenJordan")
          }, 1000, intro());
}
function begin(){
     var startstatement = document.getElementById("startstatement");
     startstatement.style.display = "none";
     var beginner = document.getElementById("beginner");
     beginner.style.display = "none";
     document.body.style.backgroundImage = "url(css/background.jpg)"
     document.body.style.backgroundSize = "100%"
     var question = document.getElementById("firstquestion");
     question.style.display = "block";
     var startover = document.getElementById("startover");
     startover.style.display = "none"
     var youdie = document.getElementById("youdied");
     youdie.style.display = "none"
}
function first(){
     var type = document.getElementsByName("choice");
     var startover = document.getElementById("startover");
     startover.style.display = "none"
     if(type[0].checked){
          document.body.style.backgroundImage = "url(css/oldlady.jpg)"
          document.body.style.backgroundSize = "100%"
          var question = document.getElementById("firstquestion");
          question.style.display = "none";
          var second = document.getElementById("secondquestion");
          second.style.display = "block"
     }
     if(type[1].checked){
          document.body.style.backgroundImage = "url(css/fightingludwig.jpg)"
          document.body.style.backgroundSize = "100%"
          var question = document.getElementById("firstquestion")
          question.style.display = "none";
          var leftquestion = document.getElementById("leftquestion");
          leftquestion.style.display = "block"
          beast()
     }
     if(type[2].checked){
          document.body.style.backgroundImage = "url(css/fightingabhorrentbeast.jpg)";
          document.body.style.backgroundSize = "100%";
          var question = document.getElementById("firstquestion")
          question.style.display = "none";
          var farleftquestion = document.getElementById("farleftquestion");
          farleftquestion.style.display = "block"
          enemy();
     }
     if(type[3].checked){
          var question = document.getElementById("firstquestion")
          question.style.display = "none";
          var rightquestion = document.getElementById("rightquestion");
          rightquestion.style.display = "block";
          document.body.style.background = "black"
     }
}
function goingleft(){
     var type = document.getElementsByName("choice3");
     if(type[0].checked){
          var leftquestion = document.getElementById("leftquestion");
          leftquestion.style.display = "none"
          youdie()
     }
     if(type[1].checked){
          var leftquestion = document.getElementById("leftquestion")
          leftquestion.style.display = "none";
          fight();
     }
     if(type[2].checked){
          var leftquestion = document.getElementById("leftquestion")
          leftquestion.style.display = "none"
          die();
     }
}
function goingfarleft(){
     var type = document.getElementsByName("choice4");
     if(type[0].checked){
          var farleftquestion = document.getElementById("farleftquestion");
          farleftquestion.style.display = "none";
          backwards()
     }
     if(type[1].checked){
          var farleftquestion = document.getElementById("farleftquestion");
          farleftquestion.style.display = "none";
          fight()
     }
     if(type[2].checked){
          var farleftquestion = document.getElementById("farleftquestion");
          farleftquestion.style.display = "none";
          youdie()
     }
}
function goingright(){
     var type = document.getElementsByName("choice5");
     if(type[0].checked){
          var rightquestion = document.getElementById("rightquestion");
          rightquestion.style.display = "none";
          document.body.style.backgroundImage = "url(css/pitfall.jpg)"
          document.body.style.backgroundSize = "100%"
          var startover = document.getElementById("startover");
          startover.style.display = "block"
          deathspike()
     }
     if(type[1].checked){
          var rightquestion = document.getElementById("rightquestion");
          rightquestion.style.display = "none";
          begin()
     }
}
function backwards(){
     var max = 1
     var back = Math.round(Math.random() * (max) -1);
     console.log(back)
     if(back === -1){
          fight()
     }
     if(back === 0){
          begin()
     }
}
function die(){
     document.body.style.backgroundImage = "url(css/blooddied.jpg)"
     var youdie = document.getElementById("youdied");
     youdie.style.display = "block"
     youdie.innerHTML = "YOU DIED and don't get the option to startover has died too"
     setTimeout(function(){
          alert("ACHIEVEMENT: Y")},1000,crybaby());
}
function fight(){
     var max = 2;
     var min = 1;
     var win = 1;
     var lose = 0;
     var outcome = Math.round(Math.random() * (max - min));
     if(outcome === win){
          document.body.style.backgroundImage = "url(css/exit.jpg)"
          var youdie = document.getElementById("youdied");
          youdie.style.display = "block"
          youdie.innerHTML = "YOU WON AND FOUND THE EXIT"
          var startover = document.getElementById("startover")
          startover.style.display = "block";
          setTimeout(function(){
               alert("ACHIEVEMENT:YOU WON....BARELY")},1000,isee());
     }
     if(outcome === lose){
          var youdie = document.getElementById("youdied");
          youdie.style.display = "block"
          youdie.innerHTML = "YOU DIED"
          var startover = document.getElementById("startover")
          startover.style.display = "block";
          setTimeout(function(){
               alert("ACHIEVEMENT: GOOD JOB YOU LOSS")},1000);
     }
     if(outcome === -1){
          var youdie = document.getElementById("youdied");
          youdie.style.display = "block"
          youdie.innerHTML = "You both died"
          var startover = document.getElementById("startover")
          startover.style.display = "block";
     }
}
function middlechoice(){
     var type = document.getElementsByName("choice2");
     if(type[0].checked){
          var second = document.getElementById("secondquestion");
          second.style.display = "none";
          youdead()
     }
     if(type[1].checked){
          var second = document.getElementById("secondquestion")
          second.style.display = "none";
          youdie();
     }
     if(type[2].checked){
          var second = document.getElementById("secondquestion")
          second.style.display = "none";
          getitem();
     }
}
function getitem(){
     document.body.style.backgroundImage = "url(css/oldlady.jpg)";
     var youdied = document.getElementById("youdied");
     youdied.innerHTML = "She gave you a sword and a pistol"
     youdied.style.display = "block"
     var startover = document.getElementById("startover");
     startover.style.display = "block"
     setTimeout(function(){
          alert("READY UP!")
          }, 1000, special());
}
function youdead(){
     var youdied = document.getElementById("youdied");
     document.body.style.backgroundImage = "url(css/youdied.jpg)"
     document.body.style.backgroundSize = "50%"
     youdied.innerHTML = "she whisper that YOU SHALL DIE OF GUILT"
     youdied.style.display = "block"
     var startover = document.getElementById("startover");
     startover.style.display = "block"
     setTimeout(function(){
          alert("WHAT GOES AROUND COMES AROUND!")
          }, 1000, failure());
     
}
function crybaby(){
     var audio = new Audio("java/cry_baby.wav")
     audio.play()
}
function intro(){
     var audio = new Audio("java/telop.wav")
     audio.play()
}
function scream(){
     var audio = new Audio("java/scream.wav")
     audio.play()
}
function beast(){
     var audio = new Audio("java/clericbeast.mp3");
     audio.play()
}
function special(){
     var audio = new Audio("java/youareafriend.wav");
     audio.play()
}
function drowned(){
     var audio = new Audio("java/drowned.wav");
     audio.play()
}
function failure(){
     var audio = new Audio("java/iwillnotdie.wav");
     audio.play()
}
function deathspike(){
     var audio = new Audio("java/theyfailed.wav");
     audio.play()
}
function church(){
     var audio = new Audio("java/thehealingchurch.wav");
     audio.play()
}
function wrap(){
     var audio = new Audio("java/Warp2.wav");
     audio.play();
}
function enemy(){
     var audio = new Audio("java/enemy.wav");
     audio.play()
}
function bell(){
     var audio = new Audio("java/bell.wav")
     audio.play()
}
function pecular(){
     var audio = new Audio("java/youarepecular.wav")
     audio.play()
}
function isee(){
     var audio = new Audio("java/isee.wav")
     audio.play()
}
function anything(){
     var audio = new Audio("java/anything.wav")
     audio.play();
}
function youdie(){
     var youdie = document.getElementById("youdied");
     var min = 1;
     var max = 8;
     var ways = Math.round(Math.random() * (max - min)) - min;
     if(ways === -1){
          startover.style.display = "block"
     }
     if(ways === 0 ){
          document.body.style.backgroundImage = "url(css/pitfall.jpg)"
          youdied.innerHTML= "Fell Down a Pit"
          var startover = document.getElementById("startover");
          youdie.style.display = "block"
          startover.style.display = "block"
          setTimeout(function(){
               alert("Congrats!")
               }, 1000, deathspike());
     }
     if(ways === 1){
          document.body.style.backgroundImage= "url(css/ludwig.jpg)"
          document.body.style.backgroundSize = "100%"
          youdie.innerHTML= "You ran into Ludwig and died";
          var startover = document.getElementById("startover");
          youdie.style.display = "block"
          startover.style.display = "block"
          beast()
     }
     if(ways === 2){
          document.body.style.backgroundImage = "url(css/eatenbychest.png)"
          document.body.style.backgroundSize = "100%"
          youdie.innerHTML = "You went to hide and died to a chest"
          var startover = document.getElementById("startover");
          youdie.style.display = "block";
          startover.style.display ="block";
          pecular()
     }
     if(ways === 3){
          document.body.style.backgroundImage = "url(css/background.jpg)"
          document.body.style.backgroundSize = "90%"
          youdie.innerHTML = "You went to the beginning"
          youdie.style.display = "block"
          var startover = document.getElementById("startover");
          startover.style.display = "block";
          wrap()
     }
     if(ways === 4){
          document.body.style.backgroundImage = "url(css/beast.jpg)"
          document.body.style.backgroundSize = "100%"
          youdie.innerHTML = "Ran into Abhorrent beast and died";
          var startover = document.getElementById("startover");
          youdie.style.display = "block"
          startover.style.display = "block"
          enemy()
     }
     if(ways === 5){
          document.body.style.backgroundImage = "url(css/rock.png)"
          document.body.style.backgroundSize = "100%"
          youdie.innerHTML = "Died by stepping on a rock";
          var startover = document.getElementById("startover");
          youdie.style.display = "block";
          startover.style.display = "block";
          drowned()
     }
     if(ways === 6){
          document.body.style.backgroundImage = "url(css/ice.jpg)"
          document.body.style.backgroundSize = "100%"
          youdie.innerHTML = "You slipped on a icecube";
          var startover = document.getElementById("startover");
          youdie.style.display = "block";
          startover.style.display = "block";
          drowned()
     }
     if (ways === 7){
          document.body.style.backgroundImage = "url(css/exit.jpg)"
          youdie.innerHTML = "you found the exit";
          var startover = document.getElementById("startover");
          youdie.style.display = "block";
          startover.style.display = "block";
          anything()
     }
}