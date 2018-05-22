(() => {
   const firstName =  document.getElementById("firstName");
   const lastName =  document.getElementById("lastName");
   const age =  document.getElementById("age"); 
   const addButton = document.getElementById("add");
   const shuffleButton = document.getElementById("shuffle");
   const clearbutton = document.getElementById("clear");  
   let people = []; //array to hold people

   class Person {
      constructor(firstName,lastName,age) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
      }
      personDriving() {
         return `${this.firstName} ${this.lastName} will be your designated driver.`;
      }
      get firstName() {
         return this.firstName();
      }
      firstName() {
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
      age() {
         return this.age;
      }
   }
    
   const addPersonToList = () => {
      let checkAge = parseFloat(age.value); 
      checkInputs(checkAge);
      if(checkAge < 16) {
         console.log(`person is too young to drive`);
         people.pop();
      }  
   };

   const clearInputs = () => {
      firstName.value = "";
      lastName.value = "";
      age.value = "";
   };

   const personPicked = () => {
      for(let i = 0; i < people.length; i++) { //logic for picking driver if the person is under 21 y/o (not old enough to drink)
         let listOfPeopleAges = people[i].age;
         let first = people[i].firstName;
         let last = people[i].lastName;
         if(listOfPeopleAges < 21 && listOfPeopleAges > 16) { 
            return console.log(`${first} ${last} is automatically chosen as your designated driver`);
         }
      }
      let personDriving = people[Math.floor(Math.random() * people.length)];
      console.log(`${personDriving.firstName} was chosen as your designated driver`);
   };

   const clearAllDrivers = () => {
      people = [];
      console.log(people);
      console.log(`all drivers have been removed`);
      alert(`all drivers have been removed`);
      return people;
   }

   const checkInputs = (x) => {
      if(isNaN(x)) {
         alert("not a number!");
         age.value = "";
      }else {
         let checkAge = parseFloat(age.value);             
         let personAdded = new Person(firstName.value, lastName.value, checkAge);
         people.push(personAdded);
         console.log(personAdded);
         console.log(people);
         clearInputs();
      }
    }

    shuffleButton.addEventListener("click" , personPicked);
    addButton.addEventListener("click" , addPersonToList);    
    clearbutton.addEventListener("click" , clearAllDrivers);
})();









