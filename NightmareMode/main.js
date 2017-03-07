window.onload = function () {

  cCYOA.startUp();

}

var cCYOA = (function () {
  
  var scriptCnt = 0,
      cUser = "",
      cInpRet = "none", 
      stryList = [
        "s|You wake up to the sound of alarms screaming.",    
        "s|Surrounded by red sand and your head is aching.",
        "s|Your memory is foggy, but you start to remember.",
        "t|Eh... My... My name is...",
        function () { 

          _keySwtch(0);

          _Prompt("Enter your name.")

          
          document.getElementById("cInpInp").onkeyup = function () {

          cUser = document.getElementById("cInpInp").value; 



          }



        },

        function () { 

          var tStrng = "t|" + cUser + "... My name is " + cUser;

          _addScript(tStrng);

         },
        "w|Oxygen Level Critical!!",
        "s|The alarms continue screaming as you notice a crack in your EVA helmet.",
        function () { 

          _keySwtch(0);

          _Prompt("Choose:<br>(1) Try to repair helemt.<br>(2) Wait and see what happens.")

          
          document.getElementById("cInpInp").onkeyup = function (e) {

            if (e.keyCode == 49) { 

              _HidePrompt();

              _keySwtch(1);

              _health("5 %")

              scriptCnt +=1;

              _addScript(stryList[scriptCnt])

            } else if (e.keyCode == 50) { 

              _HidePrompt();

              _keySwtch(1);

              scriptCnt = 16;

              _addScript(stryList[scriptCnt])   

              _endGame();           

            }
          }

          

        },
        "s|You pull the repair kit from your EVA and begin repairing the crack.",
        "s|Your helmet hisses and whistle as the leak seals.",
        "t|Ok... That problem is handled for now...",
        "t|What next?",
        function () { 

          _keySwtch(0);

          _Prompt("Choose:<br>(1) Search area.<br>(2) Try and return to Mars Landing Habitat(HAB).")

          
          document.getElementById("cInpInp").onkeyup = function (e) {

            if (e.keyCode == 49) { 

              _HidePrompt();

              _keySwtch(1);

              scriptCnt += 1;


              _addScript(stryList[scriptCnt])

            } else if (e.keyCode == 50) { 

              _HidePrompt();

              _keySwtch(1);

              scriptCnt = 17; 

              _addScript(stryList[scriptCnt])              

            }
          }

          

        },
        "w|You look around for any supplies and trip!",
        function () { 

          _health("0 %")

          var tStrng = "s|" + cUser + " dies of Dysentery.";

          _addScript(tStrng);

          document.body.onkeyup = function () {}

          _endGame(); 

         },
         "s|You sufficate to death... And then die of Dysentery.", // 16
         "s|You make it to your feet and get your bearings.",
         function () { 

          _keySwtch(0);

          _Prompt("Choose:<br>(1)Walk.<br>(2)Run.")

          document.getElementById("cInpInp").onkeyup = function (e) {

            if (e.keyCode == 49) { 

              _HidePrompt();

              _keySwtch(1);

              scriptCnt = 19;

              _health("100 %")

              _addScript(stryList[scriptCnt])

              _endGame(); 

            } else if (e.keyCode == 50) { 

              _HidePrompt();

              _keySwtch(1);

              scriptCnt = 16;

              _health("0 %")

              _addScript(stryList[scriptCnt])   

              _endGame();            

            }
          }

        
        },
        "g|You made it to saftey!! Chicken Dinner!" // 19
        ];
      
          

      var _keySwtch = function (c) {

        if (c === 1) {

        document.getElementById("cInst").innerHTML = ("Press C to [C]ontinue");

          document.body.onkeyup = function (e) {

            if (e.keyCode == 67) {
            
              if (typeof stryList[scriptCnt] === "function") {

                stryList[scriptCnt]();  

              } else {

                _addScript(stryList[scriptCnt]);

              }
            }
          }

        } else {

          document.body.onkeyup = function (e) {

            if (e.keyCode == 13) {              

              document.getElementById("cInst").innerHTML = ("[Press Enter] to continue");

              _HidePrompt();

              _keySwtch(1);

              scriptCnt +=1

                // alert(scriptCnt)
                // alert(stryList[scriptCnt]);

              stryList[scriptCnt]();           
              
            }
          }
        } 
      }


      var _HidePrompt = function () {

        var par = document.getElementById("cInpSec"); 

        var child1 = document.getElementById("cInpInp"); 

        var child2 = document.getElementById("cInpBG"); 

        var child3 = document.getElementById("cInpInst"); 

        par.removeChild(child1);

        par.removeChild(child2);

        par.removeChild(child3);

      }

      var _Prompt = function (c) {

      var inpStage = document.getElementById("cInpSec");

      var inpBg = document.createElement('div'); 

      inpBg.id = "cInpBG";

      inpStage.appendChild(inpBg);

      inpBg.style.cssText = ("position: absolute; height:100%; width: 100%; top: 0px; left: 0px; background-color: #000; opacity: 0.8;");
  

      var inpInp = document.createElement('input'); 

      inpInp.id = "cInpInp";

      inpInp.type = "text";

      inpStage.appendChild(inpInp);

      inpInp.style.cssText = ("position: absolute; height: 40px; width: 200px; top: 200px; left: 280px; background-color: #666;");
  
      inpInp.focus();
      //inpInp.innerHTML = c;

      var inpInst = document.createElement('div'); 

      inpInst.id = "cInpInst";

      inpStage.appendChild(inpInst);

      inpInst.style.cssText = ("position: absolute; padding-top: 20px; height: 110px; width: 500px; top: 50px; left: 120px; color: #FFF; background-color: #C77314; text-align: center; border: 2px solid #FFF;");
  
      inpInst.innerHTML = c;

    }
 

    var _endGame = function (c) {

    document.getElementById("cInst").innerHTML = ("[Press [R] to Try Again");

    document.body.onkeyup = function (e) {

      if (e.keyCode == 82) {
      
        window.location.reload()
      
      }

     };

     var scrpt1 = document.getElementById('cStoryScript1');

      var scrpt2 = document.getElementById('cStoryScript2');

      var scrpt3 = document.getElementById('cStoryScript3');

      var scrpt4 = document.getElementById('cStoryScript4'); 

     

      scrpt1.innerHTML = ""

      scrpt2.innerHTML = ""

      scrpt3.innerHTML = ""

      scrpt4.style.fontSize = ("45px")

      scrpt4.style.paddingTop = ("30px")

      // scrpt4.style.color = ("#7D1515")


    }

    var _health = function (c) {

     document.getElementById("cHealth").innerHTML = (c);
     
    }

    var _addScript = function (c) {

      var cSplit = c;
      
      cSplit = cSplit.split("|")

      var scrpt1 = document.getElementById('cStoryScript1');

      var scrpt2 = document.getElementById('cStoryScript2');

      var scrpt3 = document.getElementById('cStoryScript3');

      var scrpt4 = document.getElementById('cStoryScript4'); 

      scrpt1.style.color = scrpt2.style.color

      scrpt1.innerHTML = scrpt2.innerHTML;

      scrpt2.style.color = scrpt3.style.color
      
      scrpt2.innerHTML = scrpt3.innerHTML;

      scrpt3.style.color = scrpt4.style.color

      scrpt3.innerHTML = scrpt4.innerHTML;


      if (cSplit[0] === "t") {
        
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

    };

      
    return {
          
      calebIsAwesome: function (c) {
        // note ...
      },
        
      startUp: function () {
        
        // var insrStage = document.getElementById("cInpSec");

        

        _keySwtch(1);

      }
        
        
        
    };
    
})();