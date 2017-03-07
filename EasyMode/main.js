window.onload = function () {

  cCYOA.startUp();
}

var cCYOA = (function () {
  
  var scriptCnt = 0,
      promptCnt = 0,
      cOxy = 3,
      cUserName = "", 
      stryList = [
        "s|You wake up to the sound of alarms screaming.",    
        "s|Surrounded by red sand and your head is aching.",
        "s|Your memory is foggy, but you start to remember.",
        "t|Eh... My... My name is...",
        "p|Enter your name.|userName",
        "w|Oxygen Level Critical!!",
        "s|The alarms continue screaming as you notice a crack in your EVA helmet.",
        "p|Choose:\n(1) Try to repair helemt.\n(2) Try and return to Mars Landing Habitat(HAB).\n(3) Wait and see what happens.|act1",
        "t|Ok... That problem is handled for now...",
        "t|What next?",
        "p|Choose:\n(1) Search area.\n(2) Try and return to Mars Landing Habitat(HAB).|act2"
        ];
      
          

    var _OxLevAdj = function (a) {

      var oxy = document.getElementById("cHealth");

      if (a === 'a') {

        cOxy += 1;

      } else {

        cOxy -= 1;

      }

      oxy.innerHTML = (cOxy + " %");

    }  

    var _addScript = function (c) {

      var cSplit = c;
      
      cSplit = cSplit.split("|")

      var scrpt1 = document.getElementById('cStoryScript1');

      var scrpt2 = document.getElementById('cStoryScript2');

      var scrpt3 = document.getElementById('cStoryScript3');

      var scrpt4 = document.getElementById('cStoryScript4'); 

      scrpt1.innerHTML = scrpt2.innerHTML;
      
      scrpt2.innerHTML = scrpt3.innerHTML;

      scrpt3.innerHTML = scrpt4.innerHTML;
        
       
        
         // console.log()

        if (cSplit[0] === "p") { 

            if (cSplit[2] == "userName") {

              cUserName = prompt(cSplit[1]);

              _addScript("t|" + cUserName + " ... My name is " + cUserName);

              scriptCnt += 1;
            }

            if (cSplit[2] == "act1") {

              document.body.onkeyup = null;  

              var thisAct = prompt(cSplit[1]);

                if (thisAct == 1) {

                  _addScript("s|You remove the repar kit from your EVA suit and begin patchng the crack.");

                  setTimeout(function() {_addScript("s|Your helmet hisses as the pressure begins to normalize.");}, 2000);

                  setTimeout(function() {_addScript("t|That should hold for a while...");}, 4000);

                  setTimeout(function() {_addScript("g|Oxygen levels returning to normal.");

                    _OxLevAdj('a'); 

                    scriptCnt = 8;

                  }, 6000);
              
                } else if (thisAct == 2) {

                  _addScript("t|I'll try and make it back the HAB.");

                  setTimeout(function() {_addScript("s|You make it to your feet and get your bearings.");}, 2000);

                  // var thisAct = prompt("Choose:\n(1) Walk\n(2)Run"); 
                  

                } else if (thisAct == 3) {

                  alert("die")

                } else {

                  alert("die Math is hard")

                }

                
              setTimeout(function() {

                document.body.onkeyup = function(e) {

                  if (e.keyCode == 32) {

                    _addScript(stryList[scriptCnt])

                    console.log(scriptCnt);

                  }

                  
                }
              }, 6100);  

              

                

            }

            if (cSplit[2] == "act2") {    
          
              document.body.onkeyup = null;  

              var thisAct = prompt(cSplit[1]);

            }


        } else if (cSplit[0] === "t") {
        
          scrpt4.style.color = "#189FCC"

          scrpt4.innerHTML = cSplit[1];

          scriptCnt += 1;

        } else if (cSplit[0] === "w") {
        
          scrpt4.style.color = "#BA2F25"

          scrpt4.innerHTML = cSplit[1];

          scriptCnt += 1;

        } else if (cSplit[0] === "r") {
        
          scrpt4.style.color = "#E7ED2F"

          scrpt4.innerHTML = cSplit[1];

          scriptCnt += 1;

        } else if (cSplit[0] === "g") {
        
          scrpt4.style.color = "#178A11"

          scrpt4.innerHTML = cSplit[1];

          scriptCnt += 1;

        } else {

          scrpt4.style.color = "#EEE"

          scrpt4.innerHTML = cSplit[1];

          scriptCnt += 1;

        }

      
        if (scriptCnt === 5) {

          _OxLevAdj('s');
        }


    };
      
    return {
          
      ranFunct: function (c) {
        
        

      },
        
      startUp: function () {
        
    
        document.body.onkeyup = function(e) {

          if(e.keyCode == 32){
            
            _addScript(stryList[scriptCnt])

            console.log(scriptCnt);
            
            }
          }
        }
        
        
        
    };
    
})();