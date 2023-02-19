
function printBox(x, y)
{
    //On dessine le carré de haut en bas
    for(let j=1; j <= y; j++)
    {
        //Pour chaque ligne, on dessine le carré de gauche à droite
        for(let i=1; i <= x; i++)
        {
            //Si on est à la première ou dernière ligne, on dessine
            //Si on est tout à gauche ou tout à droite, on dessine
            if(j==1 || j==y || i==1 || i==x)
            {
                console.log("*");
            }
            //Sinon, on met une case vide
            else
            {
                console.log(" ");
            }
        }//Fin de la deuxième boucle (de gauche à droite)
        //On passe à la ligne suivante
        console.log("\n");
    }//Fin de la première boucle (de haut en bas)
}

printBox(5,4);

module.exports = printBox;