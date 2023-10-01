import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

//exercice 1 (fonctionnait)
/*function start() {

    const etapes = [
        {title : "Commence à faire le café", duree : 0},
        {title : "Mouds les grains de café", duree : 5},
        {title : "Fait chauffer l'eau", duree : 1},
        {title : "Infuse les grains de café moulus", duree : 5},
        {title : "Verse le café dans une tasse", duree : 5},
        {title : "Ajoute un peu de lait dans la tasse", duree : 5},
        {title : "Le café est terminé.", duree : 5},
    ]

    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(etapes, laListe)

}*/

function arrondi(nombre){
    let res = Math.round(nombre*10);
    return (res/10);
}

//exercice 2 (fonctionnait)
/*function start() {
    const ingredient = [
        {title : "L d'eau", quantite : arrondi(0.2*text.value)},
        {title : "L de lait", quantite : arrondi(0.05 * text.value)},
        {title : "g de grains de cafe", quantite : 15 * text.value}
    ]

    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(ingredient, laListe)

}*/

/*
//exercice 3 (fonctionnait)
function calcul_nb_cafes(){
    console.log(eau);
    console.log(lait);
    console.log(cafe);
    let nb_cafes = 0;
    while(eau>0.2 && lait>0.05 && cafe>75){
        eau -= 0.2;
        lait -= 0.05;
        cafe -= 75;
        nb_cafes += 1;
    }
    return nb_cafes;
}
function start(){
    if (question.innerText == "Quelle est la quantité d'eau en stock (en litres) ?"){
        eau = text.value;
        question.innerText = "Quelle est la quantité de lait en stock (en litres) ?";
    }
    else if (question.innerText == "Quelle est la quantité de lait en stock (en litres) ?"){
        lait = text.value
        question.innerText = "Quelle est la quantité de grains de café en stock (en grammes) ?";
    }
    else if (question.innerText == "Quelle est la quantité de grains de café en stock (en grammes) ?"){
        cafe = text.value
 
        question.innerText = "Combien de cafés désirez vous ?";
    }
    else if (question.innerText == "Combien de cafés désirez vous ?"){
        let nb_cafes_dispo = calcul_nb_cafes();
        let nb_cafes_demandes = text.value;
        let difference = nb_cafes_dispo - nb_cafes_demandes;
        console.log(nb_cafes_dispo);
        console.log(nb_cafes_demandes);
        console.log(difference);
        if (difference < 0){
            question.innerText = "Non, je ne peux faire que " + nb_cafes_dispo + " cafés";
        }
        else if (difference == 0){
            question.innerText = "Oui, je peux faire cette quantités de cafes";
        }
        else{
            question.innerText = "Oui, je peux faire cette quantités de cafes, et meme " + difference + " de plus que cela";
        }
        firstbutton.innerHTML = "Recommencer"
    }
    else{
        firstbutton.innerHTML = "Valider";
        question.innerText = "Quelle est la quantité d'eau en stock (en litres) ?";
    }
    text.value = "";
}
let eau;
let lait;
let cafe;
*/

/**
 * Injecte des éléments de type li
 * @param {[Ingredient]}ingredient
 * @param {HTMLElement}laListe
 */


//valider via le bouton
document.querySelector('#start').addEventListener('click', start)

let question = document.createElement('section');
question.innerText = "Quelle est la quantité d'eau en stock (en litres) ? ";
let text = document.createElement("input"); 
let controle = document.querySelector("#controle")
controle.prepend(text);
controle.prepend(question);
let firstbutton = document.querySelector("#start");
firstbutton.innerHTML = "Valider"


//valider via la touche entrée
text.addEventListener("keypress", TestEnterStart);
function TestEnterStart(e) {
  if (e.code == 'Enter'){
    start();
  };
}

//Etape 4
function majquantite(){
    quantite.innerHTML = "argent = " + argent + " euros <br> eau = " + eau + "" + " ml <br> lait = "
    + lait + " ml <br> grains de café = " + grains + "g <br> tasses jetables= " + tasses
}
let argent = 550;
let eau = 400;
let lait = 540;
let grains = 120;
let tasses = 9;
let quantite = document.createElement('section');
controle.prepend(quantite);
majquantite();
question.innerText = "Quelle action souhaitez vous effectuer ?";
firstbutton.style.display = "none";
text.style.display = "none";
let Achatbutton = document.createElement('button');
Achatbutton.innerText = "Acheter";
let Remplirbutton = document.createElement('button');
Remplirbutton.innerText = "Remplir";
let Prendrebutton = document.createElement('button');
Prendrebutton.innerText = "Prendre";
controle.append(Achatbutton, Remplirbutton, Prendrebutton);
Achatbutton.addEventListener('click', acheter);
Remplirbutton.addEventListener('click', remplir);
Prendrebutton.addEventListener('click', prendre);

//creation du bouton menu principal
let Menubutton = document.createElement('button');
Menubutton.innerText = "Menu";
controle.prepend(Menubutton);
Menubutton.addEventListener('click', menu);
//creation des div
let div1 = document.createElement('div');
controle.append(div1);
div1.style.display = "none";
let div2 = document.createElement('div');
controle.append(div2);
div2.style.display = "none";
//creation des radios buttons pour l'achat
let expresso = document.createElement('input');
let latte = document.createElement('input');
let cappuccino = document.createElement('input');
creerradiobuttons();
let radios = document.getElementsByName('cafe');
//creation des input pour le remplissage
let inputEau = document.createElement('input');
let inputLait = document.createElement('input');
let inputGrains = document.createElement('input');
let inputTasses = document.createElement('input');
creerinput();
//creation du bouton valider
let Validerbutton = document.createElement('button');
Validerbutton.innerText = "Valider";
controle.append(Validerbutton);
Validerbutton.style.display = "none";
//creation de la zone de texte si il n'y a pas assez d'ingredients
let pas_assez = document.createElement('section');
pas_assez.innerText = "Il n'y a pas assez d'ingrédients pour produire ce cafe.";
pas_assez.style.color = "red";
pas_assez.style.display = "none";
div1.append(pas_assez);


function menu(){
    Achatbutton.style.visibility = "visible";
    Remplirbutton.style.visibility = "visible";
    Prendrebutton.style.visibility = "visible";
    div1.style.display = "none";
    div2.style.display = "none";
    Validerbutton.style.display = "none";
    pas_assez.style.display = "none";
}
function creerradiobuttons(){
    let divE = document.createElement('div');
    div1.append(divE);
    expresso.type = "radio";
    expresso.value = "1";
    expresso.name = "cafe";
    let labelE = document.createElement('label');
    labelE.innerText = "Expresso";
    divE.append(expresso);
    divE.append(labelE);

    let divL = document.createElement('div');
    div1.append(divL);
    latte.type = "radio";
    latte.value = "2";
    latte.name = "cafe";
    let labelL = document.createElement('label');
    labelL.innerText = "Latte";
    divE.append(latte);
    divE.append(labelL);

    let divC = document.createElement('div');
    div1.append(divC);
    cappuccino.type = "radio";
    cappuccino.value = "3";
    cappuccino.name = "cafe";
    let labelC = document.createElement('label');
    labelC.innerText = "Cappuccino";
    divE.append(cappuccino);
    divE.append(labelC);
}
function acheter(){
    Remplirbutton.style.visibility = "hidden";
    Prendrebutton.style.visibility = "hidden";
    div1.style.display = "block";
    Validerbutton.style.display = "block";
    Validerbutton.removeEventListener('click', valider_remplissage)
    Validerbutton.addEventListener('click', valider_achat)
}
function valider_achat(){
    pas_assez.style.display = "none";
    for (let radio of radios){
        if (radio.checked && radio.value == "1"){
            if (eau >= 250 && grains >=16 && tasses >= 1){
                eau -= 250;
                grains -= 16;
                tasses -=1;
                argent += 4;
            }
            else{
                pas_assez.style.display = "block";
            }
        }
        else if (radio.checked && radio.value == "2"){
            if (eau >= 350 && lait >= 75 && grains >=20 && tasses >= 1){
                eau -= 350;
                lait -= 75;
                grains -= 20;
                tasses -=1;
                argent += 7;
            }
            else{
                pas_assez.style.display = "block";
            }
        }
        else if (radio.checked && radio.value == "3"){
            if (eau >= 200 && lait >= 100 && grains >=12 && tasses >= 1){
                eau -= 200;
                lait -= 100;
                grains -= 12;
                tasses -=1;
                argent += 6;
            }
            else{
                pas_assez.style.display = "block";
            }
        }
        majquantite();
    }
}
function creerinput(){
    inputEau.type = "number"
    inputEau.step = "5";
    inputEau.min = "0";
    inputEau.style.width = "200px";
    inputEau.placeholder = "Quantité d'eau en ml";
    div2.append(inputEau);

    inputLait.type = "number"
    inputLait.step = "5";
    inputLait.min = "0";
    inputLait.style.width = "200px";
    inputLait.placeholder = "Quantité de lait en ml"
    div2.append(inputLait);

    inputGrains.type = "number"
    inputGrains.min = "0";
    inputGrains.style.width = "200px";
    inputGrains.placeholder = "Quantité de grains en g"
    div2.append(inputGrains);

    inputTasses.type = "number"
    inputTasses.min = "0";
    inputTasses.style.width = "200px";
    inputTasses.placeholder = "Nombre de tasses"
    div2.append(inputTasses);
}
function remplir(){
    Achatbutton.style.visibility = "hidden";
    Prendrebutton.style.visibility = "hidden";
    div2.style.display = "block";
    Validerbutton.style.display = "block";
    Validerbutton.removeEventListener('click', valider_achat)
    Validerbutton.addEventListener('click', valider_remplissage)
}
function valider_remplissage(){
    eau += Number(inputEau.value);
    lait += Number(inputLait.value);
    grains += Number(inputGrains.value);
    tasses += Number(inputTasses.value);
    majquantite();
}
function prendre(){
    alert(argent + " euros issus de la vente de café ont été retirés !")
    argent = 0;
    majquantite();
}