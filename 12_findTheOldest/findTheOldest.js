const findTheOldest = function(people) {
    peopleAge = people.map((person) => {
        let deathYear;
        if ("yearOfDeath" in person){
            deathYear = person.yearOfDeath;
        }else{
            deathYear = new Date().getFullYear();
        }
        return deathYear - person.yearOfBirth;
    });
    console.log(peopleAge);
    let biggest = 0;
    for (let i = 0; i < peopleAge.length; i++){
        if (peopleAge[biggest] < peopleAge[i]){
            biggest = i;
        }
    }
    console.log(biggest);
    return people[biggest];
};

// Do not edit below this line
module.exports = findTheOldest;
