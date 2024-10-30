class Personnage
{
    constructor(pseudo,classe,sante,attaque)
    {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
    evoluer()
    {
        this.niveau += 1;
        console.log(`${this.pseudo} est passe au niveau ${this.niveau}`);
    }

    verifierSante()
    {
        if(this.sante <=0)
            {
                this.sante = 0;
                console.log(`${this.pseudo} a perdu`);
            }
    }
    get informations()
    {
        return `${this.pseudo} est un ${this.classe} ,a ${this.sante} points de vie et est au niveau ${this.niveau}`;
    }
}

class Magicien extends Personnage
{
    constructor(pseudo)
    {
        super(pseudo,"magicien",170,90);
    }
    attaquer(personnage)
    {
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son sort et inflige ${this.attaque} points de degats`);
        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage)
    {
        personnage.sante -= this.attaque * 5;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son coup special puissances des arcanes et inflige ${this.attaque * 5} points de degats`);
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage
{
    constructor(pseudo)
    {
        super(pseudo,"guerrier",350,50);
    }
    attaquer(personnage)
    {
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son epee et inflige ${this.attaque} points de degats`);
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage)
    {
        personnage.sante -= this.attaque * 5;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son coup special haches de guerre et inflige ${this.attaque * 5} points de degats`);
        this.evoluer();
        personnage.verifierSante();
    }
}

let guerrier = new Guerrier("Thor");
let magicien = new Magicien("Gandalf");
console.log(guerrier.informations);
console.log(magicien.informations);
magicien.attaquer(guerrier);
console.log(guerrier.informations);
guerrier.attaquer(magicien);
console.log(magicien.informations);
magicien.coupSpecial(guerrier);