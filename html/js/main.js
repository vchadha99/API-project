function message()
{
  alert("Enter your name first");
}



function openPage(pageUrl)
{
  window.open(pageUrl);
}



function loadplannets() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://swapi.co/api/planets/", true);
    var data;
      xhttp.onreadystatechange = function()
       {
        if (this.readyState == 4 && this.status == 200)
         {
           var name = "";
           data= JSON.parse(this.responseText);
           for(var i = 0 ; i < data.results.length ; i++)
           {
            name = "<div class = 'plannet' style= 'color:skyblue; font-size: 35px;'>" + 
            name + data.results[i].name + "<p style = 'color:green ; font-size: 25px'> Terrain : " + 
            data.results[i].terrain + "<p style = 'color:white; font-size: 25px'> Population : " + 
            data.results[i].population +"</div>" + "<br><br>"  ;
           }
         }
        document.getElementById('planets').innerHTML = name ;
      };
      
      xhttp.send();
}



function loadfilms() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://swapi.co/api/films/", true);
    var data;
      xhttp.onreadystatechange = function()
       {
        if (this.readyState == 4 && this.status == 200)
         {
           var title = "";
           data= JSON.parse(this.responseText);
           for(var i = 0 ; i < data.results.length ; i++)
           {
            title = "<div class = 'film' style= 'color:skyblue; font-size: 35px;'>" + 
            title + data.results[i].title + "<p style = 'color: rgb(162, 243, 96); font-size: 25px'> Director : " + 
            data.results[i].director + "<p style = 'color:white ; font-size: 25px'> Release Date : " + 
            data.results[i].release_date +"</div>" + "<br>"  ;
           }
         }
        document.getElementById('films').innerHTML = title ;
      };
      
      xhttp.send();
}



function loadships() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://swapi.co/api/starships/", true);
    var data;
      xhttp.onreadystatechange = function()
       {
        if (this.readyState == 4 && this.status == 200)
         {
           var name = "";
           data= JSON.parse(this.responseText);
           for(var i = 0 ; i < data.results.length ; i++)
           {
            name = "<div class = 'starship' style= 'color:navy; font-size: 35px;'>" + 
            name + data.results[i].name + "<p style = 'color: rgb(0, 73, 30); font-size: 25px'> Manufacturer : " + 
            data.results[i].manufacturer + "<p style = 'color:white ; font-size: 25px'> Rating : " + 
            data.results[i].hyperdrive_rating +"</div>" + "<br>"  ;
           }
         }
        document.getElementById('ships').innerHTML = name ;
      };
      
      xhttp.send();
}



function loadvehicles() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://swapi.co/api/vehicles/", true);
    var data;
      xhttp.onreadystatechange = function()
       {
        if (this.readyState == 4 && this.status == 200)
         {
           var name = "";
           data= JSON.parse(this.responseText);
           for(var i = 0 ; i < data.results.length ; i++)
           {
            name = "<div class = 'starship' style= 'color:navy; font-size: 35px;'>" + 
            name + data.results[i].name + "<p style = 'color: rgb(0, 73, 30); font-size: 25px'> Manufacturer : " + 
            data.results[i].manufacturer + "<p style = 'color:white ; font-size: 25px'> Crew Size : " + 
            data.results[i].crew +"</div>" + "<br>" ;
           }
         }
        document.getElementById('Vehicles').innerHTML = name ;
      };
      
      xhttp.send();
}