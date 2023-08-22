let prixChoco= 1.40;

function calculChoco(choco){
    if(choco<11){
        return prixChoco;
    }else if (choco<21){
        return prixChoco - 0.10;
    } else
        return prixChoco - 0.20;
};

console.log(calculChoco(4));
