const person = {
    fristName: "Thanh",
    lastName: "Bui",
    age: 20,
    fullName: function () {
        return "Ho va ten: " + this.lastName + " " + this.fristName + " " + "Tuoi: " + this.age;
    }
};

console.log(person.fullName());