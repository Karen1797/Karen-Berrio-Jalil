//console.log("Hello world");
var persona = {
    name: "Karen",
    lastName: "Berrio",
    gender: "F"
}

persona.myNewPropierty = "new propierty";

//Contructor
function Person (name, lastName, gender){
    //var this ={}
    this.name= name;
    this.lastName = lastName;
    this.gender =gender;
}
var person=  new Person("Karen", "Berrio", "F")

//Métodos
Person.prototype.introduce= function(){
    console.log(`Hi I´m ${this.name} ${this.lastName}`);
}
person.intruduce();

//Heredar
function Developer(name, lastName,gender,yearsOfExperience){
    Person.call(this, name, lastName, gender);
    this.yearsOfExperience=yearsOfExperience;
}
Developer.prototype=Object.create(Person.prototype);

var me = new Developer("Karen", "Berrio", "F", 3);
console.log(me.intruduce());

Developer.prototype.introduceAboutJob= function(){
    console.log(`Hola soy ${this.name} ${this.lastName} y soy desarrolladora web con ${this.yearsOfExperience} of experience`);
}

//Clases
class PersonWithClass{
    constructor(name, lastName, gender){
        this.name =name;
        this.lastName= lastName;
        this.gender= gender;
    }
    intruduce(){
        console.log(`hola soy ${this.name} ${this.lastName}`)
    }
}
var personWC= new PersonWithClass("Karen", "Berrio","F");
console.log(personWC.introduce(), 'introduce');

class DeveloperWC extends Person{
    constructor(name, lastName, gender, yearsOfExperience){
        super(name, lastName, gender);
        this.yearsOfExperience= yearsOfExperience;
    }

    introduceAboutJob(){
        console.log(`hola soy ${this.name} ${this.lastName} y tengo ${this.yearsOfExperience} años de experiencia`);
    }
}

var developerWC = new DeveloperWC("Karen", "Berrio", "F", 3);
console.log(developerWC, "developerWC");
developerWC.introduceAboutJob();