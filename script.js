//Ecrire une fonction avec 2 params
//1. un mot
//2. un entier
//but: repeter le mot au tant de fois que l'entier
//exemple: repetermot ('gda',4)=>'gdagdagdagda'
function repeterMot(caractere, entier) {
    let reponse = '';
    for (let i = 0; i < entier; i++) {
        reponse += caractere;
    }
    console.log(reponse);
}
repeterMot('heritier', 4);

//autre methode
function repeterlemot(caractere, entier) {
    console.log(caractere.repeat(entier));
}
//appel de la fonction avec comme argument Lionge et 4
repeterMot('lionge', 4);