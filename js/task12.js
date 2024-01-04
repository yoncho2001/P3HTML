function groupPeople(people) {
    var grouped = [];

    for (let i = 0; i < people.length; i++) {
        var ageKey = people[i].age;

        if (!grouped[ageKey]) {
            grouped[ageKey] = [];
        }
        
        grouped[ageKey].push(people[i]);
    }

    return grouped;
}

var people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'Stoqn', lastname: 'Timov', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 32 },
    { firstname: 'Sefcho', lastname: 'Dimov', age: 81 },
    { firstname: 'Atanas', lastname: 'Canov', age: 81 }
];

var groupedByAge = groupPeople(people);
console.log(groupedByAge);