
window.addEventListener("load", () => {
   setTimeout(() => {
      document.getElementsByClassName("main-wrapper")[0].style.opacity = "1";
      document.getElementsByClassName("header")[0].classList.add("animate");
      document.getElementsByClassName("header-desktop")[0].classList.add("animate");                           
      document.getElementsByClassName("sk-circle")[0].style.display = "none";
   },2000);
});

(() => {
   const firstName =  document.getElementById("firstName");
   const lastName =  document.getElementById("lastName");
   const userAge =  document.getElementById("age");
   const form = document.getElementById("driversForm");
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

   const checkInputs = (x) => {
      if(isNaN(x)) {
         alert("not a number!");
         age.value = "";
      }else {
         age = userAge.options[userAge.selectedIndex].value;         
         let checkAge = parseFloat(age);             
         let personAdded = new Person(firstName.value, lastName.value, checkAge);
         people.push(personAdded);
         console.log(personAdded);
         console.log(people);
         clearInputs();
      }
   }
    
   const addPersonToList = (e) => {
      e.preventDefault();
      const age = userAge.options[userAge.selectedIndex].value; 
      const checkAge = age;      
      checkInputs(checkAge);
      if(checkAge < 16) {
         console.log(`person is too young to drive`);
         people.pop();
      }  
   };

   const personPicked = (e) => {
      e.preventDefault();
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

   const clearAllDrivers = (e) => {
      e.preventDefault();
      people = [];
      console.log(people);
      console.log(`all drivers have been removed`);
      alert(`all drivers have been removed`);
      return people;
   }
   
   const clearInputs = () => {
      firstName.value = "";
      lastName.value = "";
   };

   form.addEventListener("submit" , addPersonToList); 
   shuffleButton.addEventListener("click" , personPicked);   
   clearbutton.addEventListener("click" , clearAllDrivers);
})();