(function() {
   var aidingApplication = $("#aiding-application");
   aidingApplication.onclick = function() {
     var input = aidingApplication.find("input");
     for (i in input) {
   	   input[i].value = "";
     }
   }
})