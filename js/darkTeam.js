function myFunction() {

    var checkBox = document.getElementById("darkmodeCheck");


    var body = document.getElementById("darkmodeBody");
    var rodape = document.getElementById("darkmodeRodape");
    var linkDev = document.getElementById("linkDev");
    var linkImundo = document.getElementById("linkImundo");
    var linkEbz = document.getElementById("linkEbz");
    var equipe = document.getElementById("About");
  

    if (checkBox.checked == true){
      //text.style.display = "block";
      body.style.backgroundColor = "black";
      equipe.style.color = "white";
      rodape.style.color = "white";
      linkDev.style.color = "white";
      linkImundo.style.color = "white";
      linkEbz.style.color = "white";
        

    } else {
      //text.style.display = "none";
      body.style.backgroundColor = "white";
      equipe.style.color = "black";
      rodape.style.color = "black";
      linkDev.style.color = "black";
      linkImundo.style.color = "black";
      linkEbz.style.color = "black";
      
      
    }
}