//Youngest person

function findYoungest(people) {
    if (!people || people.length === 0) return "No people provided";

    let youngest = people[0];

    for (let i = 1; i < people.length; i++) {
        if (people[i].age < youngest.age) {
            youngest = people[i];
        }
    }

    return youngest.firstname + " " + youngest.lastname;
}

var people = [
    { firstname: 'Gosho', lastname: 'Kirov', age: 39 },
    { firstname: 'Bay', lastname: 'Ivan', age: 51 },
    { firstname: 'Pencho', lastname: 'Simov', age: 22 }
];

alert(findYoungest(people));