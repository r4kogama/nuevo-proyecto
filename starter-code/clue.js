// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];



//rellenar array con los  objetos de personajes

 var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
 }

 var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
 }

 var profPlum = {  
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
 }

 var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
 }
  
var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
}

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
//rellenar array con los  objetos de armas


var arma1 = {name: "rope",   weight: 10,}
var arma2 = {name: "knife",  weight: 8,}
var arma3 = {name: "candlestick",  weight: 2,}
var arma4 = {name: "dumbbell",  weight: 30,}
var arma5 = {name: "poison",   weight: 2,}
var arma6 = {name: "axe",   weight: 15,}
var arma7 = {name: "bat",    weight: 13,}
var arma8 = {name: "trophy",   weight: 25,}
var arma9 = {name: "pistol",   weight: 20,}

weaponsArray.push(arma1,arma2,arma3,arma4,arma5,arma6,arma7,arma8,arma9);
//rellenar array con los  objetos de habitaciones




var room1 = {name: "Dinning Room"}
var room2 = {name: "Conservatory"}
var room3 = {name: "Kitchen"}
var room4 = {name: "Study"}
var room5 = {name: "Library"}
var room6 = {name: "Billiard Room"}
var room7 = {name: "Lounge"}
var room8 = {name: "Ballroom"}
var room9 = {name: "Hall"}
var room10 = {name: "Spa"}
var room11 = {name: "Living Room"}
var room12 = {name: "Observatory"}
var room13 = {name: "Theater"}
var room14 = {name: "Guest House"}
var room15 = {name: "Patio"}

roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12,room13, room14, room15);


function aleatorio (array){
    var indiceRandom = Math.floor(Math.random() * array.length); 
    var elemento = array[indiceRandom];
    //retorno  del elemento del array
    return elemento;
}

//funcion llama a la  anterior"aleatorio"
function almacenarDatos(){
    var arrayCartas = [];
    //llamada dentro de push
    arrayCartas.push(aleatorio(charactersArray));
    arrayCartas.push(aleatorio(weaponsArray));
    arrayCartas.push(aleatorio(roomsArray));
    //return del array
    return arrayCartas;
}


function revelarMisterio(){
    //llamada a la funcion  donde recibe el retorno del  array
    var cartas = almacenarDatos();
    document.write("El asesino ha sido "+cartas[0].first_name+" con un "+cartas[1].name+ " en "+cartas[2].name+" con una fuerza de "+cartas[1].weight);
}

revelarMisterio();
