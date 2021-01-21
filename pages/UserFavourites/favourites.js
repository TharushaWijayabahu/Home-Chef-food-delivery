window.onload = function() {
    if(localStorage.getItem("isFavourite")){
        console.log("set");
    
        if(JSON.parse(localStorage.getItem("isFavourite"))===true){
            document.getElementById("item1").style.display="block";
        }
        else if(JSON.parse(localStorage.getItem("isFavourite"))===false){
            document.getElementById("item1").style.display="none";
        }
    }
    else{
        localStorage.setItem("isFavourite", false);
        document.getElementById("item1").style.display="none";
    }
  };

