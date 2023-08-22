// let random= Math.floor(Math.random()*100);
// let tentative=0;

// function calculMentalist(a){
//     while(a!=random){
//         tentative ++;
//     };
// };

// Correction //
const nbrATrouve = numberRandom();
let numTour = 0;
let tentative = 0;
let reussite = false;
trouverLeNbr();
function trouverLeNbr(){
    while(!reussite && numTour<10){
        tentative = parseInt(prompt('Choisir un nombre'));
        numTour++;
        if(tentative==nbrATrouve){
            reussite = true;
        }
        else if(tentative>nbrATrouve){
            alert('Le nombre est trop grand');
        }
        else{
            alert('Le nombre est trop petit');
        }
    }
    if(reussite){
        if(numTour==1){
            alert('Le nombre est : '+tentative+' réussi en un seul essai');
        }
        else{
            alert('Le nombre est : '+tentative+' réussi en : '+numTour+' essais');
        }
    }
    else{
        alert('Perdu il faut changer de métier');
    }
}
function numberRandom(){
    return Math.floor(Math.random() * 100 + 1);
}