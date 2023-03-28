// You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.


Object.prototype.hash = function(string) {
    let currentObj = this;
    const propertyArray = string.split(".");
      for(let value of propertyArray){
          if(currentObj[value]){
              currentObj = currentObj[value];
          }
          else{
              return undefined;
          }
      }
      return currentObj;
}

var obj = {
  person: {
    name: 0,
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined