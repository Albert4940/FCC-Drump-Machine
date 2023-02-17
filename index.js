$(document).ready(function(){

    const audioName = {
      "Q":"Heater 1",
      "W":"Heater 2",
      "E":"Heater 3",
      "A":"Heater 4",
      "S":"Clap",
      "D":"Open-HH",
      "Z":"Kick-n'-Hat",
      "X":"Kick",
      "C":"Closed-HH",
    }
    $(".drum-pad").click(function(e){
           $(this).children('audio').trigger('pause');
      $(this).children('audio').trigger('play');
  
       $("#display").text(audioName[$(this).text()]);
    })
  
   $(document).keypress(function(e){
      //console.log()
     const key = e.key.toUpperCase();
     $("#" + key).trigger('play')
      //console.log(audioName[key])
     $("#display").text(audioName[key]);
    }); 
    
  })