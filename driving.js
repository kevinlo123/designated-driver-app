(() => {

    const firstName =  document.getElementById("firstName");
    const lastName =  document.getElementById("lastName");
    const age =  document.getElementById("age"); 
    const addButton = document.getElementById("add");
    const shuffleButton = document.getElementById("shuffle");  
    let people = []; //array to hold people

    class Person {

        constructor(firstName,lastName,age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        personDriving() {
            return this.firstName + " " + this.lastName + " will be your designated driver.";
        }

        get firstName() {
            return this.firstName();
        }

        firstName(){
            return this.firstName;
        }

        get lastName() {
            return this.lastName();
        }

        lastName(){
            return this.lastName;
        }
    
        get age() {
            return this.age();
        }

        age(){
            return this.age;
        }

    }
    
    const addPersonToList = () => {
        let personAdded = new Person(firstName.value, lastName.value, age.value);
        people.push(personAdded);
        console.log(personAdded);
        console.log(people);
        clearInputs();
    };

    const clearInputs = () => {
        firstName.value = "";
        lastName.value = "";
        age.value = "";
    };

    const personPicked = () => {
        for(let i = 0; i < people.length; i++){ //logic for automatically picking driver if the person is under 21 y/o
            let listOfPeopleAges = people[i].age;
            let first = people[i].firstName;
            let last = people[i].lastName;
            if(listOfPeopleAges < 21){
                console.log(first + " " + last + " is automatically chosen as your designated driver");
            }
        }
        let personDriving = people[Math.floor(Math.random() * people.length)];
        console.log(personDriving.firstName + " was chosen as your designated driver");
    };

    shuffleButton.addEventListener("click" , personPicked);
    addButton.addEventListener("click" , addPersonToList);    

})();








