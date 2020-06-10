class StudentPasserelleNumerique {
  name: string;
  surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
  code() {
    console.log(this.name + " is coding");
  }
}
let student: StudentPasserelleNumerique = new StudentPasserelleNumerique("Alper", "Akbulut");
console.log(student.code());
