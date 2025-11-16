/**
 * Define the Course and Assignment concepts using class notation
 */

//assignment class
class Assignment {
    //assignment constructor
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    //method to print assignment info
    printAssignment() {
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

//course class
class Course {
    //course constructor
    constructor(courseName, instructor, creditHours, assignments) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments; //assignment is an array
    }

    //method to print course info
    courseInfo() {
        console.log('Course: ' + this.courseName +
                    ' | Instructor: ' + this.instructor +
                    ' | Credit Hours: ' + this.creditHours);
        console.log('Assignments >>>'); 
        for (let a of this.assignments) //for loop goes through all elements in array
            a.printAssignment();
    }
}

//creates assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//creates course object c1
let c1 = new Course(
    'Software Engineering',
    'Dr. Pepper',
    3,
    [a1, a2]
);

//creates course obect c2
let c2 = new Course(
    'Data Science',
    'Dr. Evil',
    6,
    [a3, a4]
);

//prints info for c1 and c2
c1.courseInfo();
c2.courseInfo();
