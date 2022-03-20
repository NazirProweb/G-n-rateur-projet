function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tableau de citations
let citations = [
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg",true],
    ["Il y a ta bonté marine comme un fjord de douceur, et le sapin qui reste vert sous la mort blanche Debout dans la tempête Il veille quand tremblent les bouleaux Tandis que hurlent loup et lynx", "leopold Sedar Senghor",true],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan",false],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi",false],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain",false],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot",false],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais",false],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain",false],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy",false],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum",false],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher",false],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick",false],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson",false],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso",false],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill",false],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki",false],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar",false],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy",false],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt",false],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis",false],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill",false]
];

// Récupération des élements
let div_citation = document.querySelector("#citation");
let div_auteur = document.querySelector("#auteur");
let btn_citation = document.querySelector("#nouveau");

let dernier = null;
let nombreAleatoire;



btn_citation.addEventListener('click', () => {
    let citation_passer = 0;
    citations.forEach(function (element) {
        if (element[2] == true) {
            citation_passer++;
        }
    });

    if (citation_passer == citations.length) {
        citations.forEach(function (element) {
            element[2] = false;
        });
        citation_passer = 0;
    }

    nombreAleatoire = random(0, citations.length - 1);
    
    while (citations[nombreAleatoire][2] == true) {
        nombreAleatoire = random(0, citations.length - 1);
    }
    
    let tableauCitation = citations[nombreAleatoire];
    let citation = tableauCitation[0];
    let auteur = tableauCitation[1];

    div_citation.textContent = citation;
    div_auteur.textContent = auteur;
    citations[nombreAleatoire][2] = true;
    console.clear();
    citations.forEach(function (element) {
        if (element[2] == false) {
            console.log(element[0]);
        }
    });

});
