class Student{
    constructor(firstName, secondName, yearOfBirth) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.yearOfBirth = yearOfBirth;
        this.grades = [];
        this.visiting = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        const ageStudent = currentYear - this.yearOfBirth;
        return `Вік студента: ${ageStudent}`;
    }

    setGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        for(let i = 0; i < this.visiting.length; i++){
            if(this.visiting[i] === null) {
                this.visiting[i] = true;
                break;
            }
        }
    }

    absent() {
        for(let i = 0; i < this.visiting.length; i++ ) {
            if(this.visiting[i] === null) {
                this.visiting[i] = false;
                break;
            }
        }
    }

    averageGrade() {
        if(this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / this.grades.length;
        return `Середній бал навчання: ${average}`;
    }

    summary() {
        const averageGrade = parseFloat(this.averageGrade().match(/\d+(\.\d+)?/)[0]);
        const visitedLessons = this.visiting.filter((value) => value === true).length;
        const visitedStatistics = visitedLessons / this.visiting.length;
        
        if(averageGrade > 90 && visitedStatistics > 0.9) {
            return "Молодець";
        } else if (averageGrade > 90 || visitedStatistics > 0.9) {
            return "Добре, але можна краще";
          } else {
            return "Редиска";
          }
    }
}

const firstStudent = new Student("Іван", "Медведовський", 2003);
firstStudent.setGrade(95);
firstStudent.setGrade(95);
firstStudent.setGrade(90);

firstStudent.present();
firstStudent.present();
firstStudent.present();
firstStudent.present();


const firstStudentAge = firstStudent.getAge();
const firstStudentAverageGrade = firstStudent.averageGrade();
const firstStudentSummary = firstStudent.summary();


console.log(`Студент: ${firstStudent.firstName} ${firstStudent.secondName}\n${firstStudentAge}\n${firstStudentAverageGrade}\n${firstStudentSummary}`);


const secondStudent = new Student("Микола", "Новіков", 1997);
secondStudent.setGrade(35);
secondStudent.setGrade(45);
secondStudent.setGrade(38);
secondStudent.setGrade(66.98);

secondStudent.present();
secondStudent.present();
secondStudent.present();
secondStudent.present();

const secondStudentAge = secondStudent.getAge();
const secondStudentAverageGrade = secondStudent.averageGrade();
const secondStudentSummary = secondStudent.summary();

console.log(`Студент: ${secondStudent.firstName} ${secondStudent.secondName}\n${secondStudentAge}\n${secondStudentAverageGrade}\n${secondStudentSummary}`);


const thirdStudent = new Student("Відмінник", "Відмінников", 2000);
thirdStudent.setGrade(100);
thirdStudent.setGrade(100);
thirdStudent.setGrade(100);
thirdStudent.setGrade(100);
thirdStudent.setGrade(100);

thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();
thirdStudent.present();

const thirdStudentAge = thirdStudent.getAge();
const thirdStudentAverageGrade = thirdStudent.averageGrade();
const thirdStudentSummary = thirdStudent.summary();

console.log(`Студент: ${thirdStudent.firstName} ${thirdStudent.secondName}\n${thirdStudentAge}\n${thirdStudentAverageGrade}\n${thirdStudentSummary}`);




