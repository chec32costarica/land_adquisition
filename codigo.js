/// ICE AFECTCIONES  ////
const urlIceAfect = "https://script.google.com/macros/s/AKfycbwUsJqLf264ZEb-yfuWL5pZzo72lb2LTy8ASkN9_QV1kTLMqE7UrzaI6NUpH5dbdit49w/exec";

fetch(urlIceAfect)
.then(d => d.json())
.then(d => {
    d.forEach(e => {

        let icon_puentes = L.icon({
        iconUrl: './img/ice.png',
    
        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
        });

        

        let puente = `<h2>电杆：<span class="catastro">${e[4]}<span/><span class="catastro">${e[4]}<span/><h2/>`

      
            L.marker([e[0],e[1]],{icon: icon_puentes}).addTo(map)
            .bindPopup(puente)

            
       
        
    })  
})


const urlIcePostes ="https://script.google.com/macros/s/AKfycbyIN9Txse4IApCoAeNP6fjlxryu0mYAcsGVBxOy2NwcJfm7KP5lq0zp0maGL7VOOVND7A/exec";

fetch(urlIcePostes)
.then(d => d.json())
.then(d => {
    d.forEach(e => {

        

        

        let puente = `<h2>桥梁：<span class="catastro">${e[2]}<span/><h2/>`

      
            
            

            var circlePuente = L.circle([e[0], e[1]], {
            color: "#0055A3",
            fillColor: '#0055A3',
            fillOpacity: 0.05,
            radius: 10,
            weight: 1
        }).addTo(map).bindPopup(puente)
       
        
    })  
})


/// Propiedades en Mapa desde GOOGLE SHEETS ////
const urlExp = "https://script.google.com/macros/s/AKfycbxtUwKz593_-ZGIxGico3nJw5q4ni2yWUWaQ-ted8jiKTpSEQSKtBvUY7CsJpnhKiQt/exec";

fetch(urlExp)
    .then(d => d.json())
    .then(d => {
        d.forEach(e => {

            let icon_entregado = L.icon({
            iconUrl: './img/delivered.svg',
        
            iconSize:     [30, 40], // size of the icon
            iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
            });

            let icon_pendiente = L.icon({
            iconUrl: './img/notDelivered.svg',
        
            iconSize:     [30, 40], // size of the icon
            iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
            });

            let exp = `<h2>地籍图(Plano)：<span class="catastro">${e[3]}<span/><h2/><h2>${e[2]}</h2>`

            if (e[2] == "交付 Entregado") {
                L.marker([e[0],e[1]],{icon: icon_entregado}).addTo(map)
                .bindPopup(exp)
            } else {
                L.marker([e[0],e[1]],{icon: icon_pendiente}).addTo(map)
                .bindPopup(exp)
            } 
            
        })  
    })
// Puentes //

const urlpuentes ="https://script.google.com/macros/s/AKfycbztD4SmNF8B3X0IVzPqlo0lb-3RHQTrFceMiquBni_37aWJeQ7IiGqFXLDTjSm7jsyX/exec";

fetch(urlpuentes)
.then(d => d.json())
.then(d => {
    d.forEach(e => {

        let icon_puentes = L.icon({
        iconUrl: './img/bridge.png',
    
        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
        });

        

        let puente = `<h2>桥梁：<span class="catastro">${e[2]}<span/><h2/>`

      
            L.marker([e[0],e[1]],{icon: icon_puentes}).addTo(map)
            .bindPopup(puente)

            var circlePuente = L.circle([e[0], e[1]], {
            color: "#ffffff",
            fillColor: '#666',
            fillOpacity: 0.05,
            radius: 100,
            weight: 1
        }).addTo(map)
       
        
    })  
})

// PSV //

const urlPsv = "https://script.google.com/macros/s/AKfycbwRND9k2KTsWqEjnWSaE1ZIPKzFq6RBBrj7PsGnx8BjgGmONpDMkStFEviiwfJUUd836A/exec";

            fetch(urlPsv)
            .then(d => d.json())
            .then(d => {
                d.forEach(e => {

                  
                    
                    var circle = L.circle([e[0], e[1]], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.05,
                        radius: 500,
                        weight: 0.5
                    }).addTo(map)
                        .bindPopup(e[2]);
                   
                    
                })  
            })

// Kilometros //

const urlKmGrande = "https://script.google.com/macros/s/AKfycbzsDH0ycWxo_a8-4ytgjI4z00XSxajd-87DKqIsfcebqOR01A5LHxr6OYe7P80JeSkrfQ/exec";

        
            fetch(urlKmGrande)
            .then(d => d.json())
            .then(d => {
                d.forEach(e => {

                  
                        L.marker([e[0],e[1]],{icon: 
                        
                          L.icon({
                              iconUrl: e[3],
                              iconSize:     [100, 200], // size of the icon
                              iconAnchor:   [50, 200], // point of the icon which will correspond to marker's location
                          })
                        
                        
                        }).addTo(map)
                   
                    
                })  
            })

// Marcadores //

var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
    

// Agrupar Marcadores //

var cities = L.layerGroup([littleton, denver, aurora, golden]);
// Control Layers//

// Tiles //

var grayscale = 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),

    streets   = 
    L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	maxZoom: 19,
    subdomains:['mt0','mt1','mt2','mt3']
    });

// Group 

var map = L.map('map', {
    center: [10.199693537539707, -83.7957653227987],
    zoom: 13,
    layers: [grayscale, cities]
});

var baseMaps = {
    "Calles": grayscale,
    "Satelital": streets
};

var overlayMaps = {
    "Cities": cities,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

/// Boton Menu y Close Sidebar ////

function openNav() {
    document.getElementById("mySidebar").style.width = "auto";
    document.getElementById("main").style.marginLeft = "400px";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.display="inline";
  }

/// Boton Menu y Close Sidebar FIN ////

// Link google sheets Base de Datos Expropiaciones //
const dataweb = "https://script.google.com/macros/s/AKfycbzbQJmAoOhetRrhSYAK0CWUmT8QWkFgDYMaKm7Lx6fjfntiJQ4WZRlWiDQiC46cQCLY/exec"

fetch(dataweb)
            .then(d => d.json())
            .then(d => {
                d.forEach(e => {
                    document.getElementById("listado").innerHTML += 
                    `
                    <li>
                        <div class="card">
                            <h2><span class="mapa-title">地籍图: </span>${e[3]}</h2>
                            <p><span>状态：</span>${e[2]}</p>
                            <p><span>编号：</span>${e[4]}</p>
                            <p><span>地方：</span>${e[5]}</p>
                            ${
                                (() => {
                                    if(e[6] != "") {
                                        return `<p><span>交付函件：</span>${e[6]}</p>`;
                            
                                    } else {
                                        return `<p><span>交付函件：</span>无</p>`;
                            
                                    }
                            
                                })()
                            }
                            
                        </div>
                    </li>
                    `
                })  
            })
////// fin //////

// Fly to PSV //

document.getElementById("select-psv").addEventListener('change', function(e){
    map.flyTo(e.target.value.split(","),19);
})

// Fly to PSV FIN //

// Fly to KM //

document.getElementById("select-Km").addEventListener('change', function(e){
    map.flyTo(e.target.value.split(","),17);
})

// Fly to PSV KM //



// Localizador //

if(!navigator.geolocation){
    console.log("Your browser dont support geolocation")
}else{
  setInterval(()=>{
    navigator.geolocation.getCurrentPosition(getPosition)
  }, 5000)
  
}

let marker, circle;

function getPosition(position){ 
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let accuracy = position.coords.accuracy;

  if(marker){
    mymap.removeLayer(marker);
  }

  if(circle){
    map.removeLayer(circle);
  }

  let positionIcon = L.icon({
                    iconUrl: './img/currentLocation_icon.svg',
                
                    iconSize:     [90, 90], // size of the icon
                    iconAnchor:   [45,75], // point of the icon which will correspond to marker's location
                    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
                    });

  marker = L.marker([lat,long], {icon: positionIcon})
  circle = L.circle([lat,long,{radius: accuracy}])

  


  let featureGroup = L.featureGroup([marker, circle]).addTo(map)

}

// boton location //

function Action2(){ 
    navigator.geolocation.getCurrentPosition(getPosition)

    function getPosition(position){ 
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    map.flyTo([lat,long], 15);
    }
  }