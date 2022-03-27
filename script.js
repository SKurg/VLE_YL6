(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            

            if (h > 12) {
                h = h - 12;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let eesnimi = document.getElementById("fname");
        let perenimi = document.getElementById("lname");
        let checkBox1 = document.getElementById("v1");
        let checkBox2 = document.getElementById("v2");
        let linn = document.getElementById("linn");
        let radio = document.getElementById("radio");
        let k1 = 0;
        let k2 = 0;
        let k3 = 0;
        let vastus = 0;
        let asula = {"tln": 0.00, "trt": 2.50, "nrv": 2.50, "prn": 3.00};
        
        if (eesnimi.value === "") {            
            alert("Palun sisestage oma Eesnimi");
            linn.focus();
            return;
        
        } else if (perenimi.value === "") {
            alert("Palun sisestage oma Perekonnanimi");
            linn.focus();
            return;
   
        } else if (linn.value === "") {
            alert("Palun valige linn nimekirjast");
            linn.focus();
            return;
                    
        } else {
            
            if (checkBox1.checked) {
                k1 = 5.00;
                //alert( "On ju!" + k1);
            }

            if (checkBox2.checked) {
                k2 = 1.00;
                //alert(k1 + k2);
            }

            if (linn.value != "") {
                k3 = asula[linn.value]
                vastus = (k1+k2+k3).toFixed(2);
                alert("Teie tellimuse summa on " + vastus + " eurot");
                e.innerHTML = vastus + " &euro;";
                
            } 
            
            if (document.getElementById("rahul").checked) {
                alert("Aitäh");

            } else if (document.getElementById("Niinaa").checked) {
                alert("Aitäh");

            } else if (document.getElementById("ei").checked) {
                alert("Aitäh");
            
            
            } else {
                alert("Palun anna tagasisidet kuidas sulle sobis vormide lahendus!");
                linn.focus();
                return;
            }
            
            

        }        
        
        

        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";

    let centerPoint = new Microsoft.Maps.Location(
            58.36271517127748, 
            25.587261372172556
        );
    
    let p1 = new Microsoft.Maps.Location(58.38104,26.71992);
    let p2 = new Microsoft.Maps.Location(58.38539138962764,24.496721240002714);
    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 9,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    let pin = new Microsoft.Maps.EntityCollection();

    
    pin.push(new Microsoft.Maps.Pushpin(p1));
    pin.push(new Microsoft.Maps.Pushpin(p2));

    map.entities.push(pin);
    }   
  




// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

