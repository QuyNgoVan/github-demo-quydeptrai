var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];
function showMenu(){
    console.log('1. Show all student');
    console.log('2. Create a new student data');
    console.log('3. Save and Exit');
    var option = readlineSync.question('Nhap lua chon cua ban: >');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case'2':
            showCreateStudent();
           
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;

    }
}

function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);

}
function showStudents(){
    for( var student of students){
        console.log(student.name, student.age );
    
    }

}
function showCreateStudent(){
    var name = readlineSync.question('Name: ');
    var age  = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)

    };
    students.push(student);


}
function saveAndExit(){
    var content = JSON.stringify(students);
    console.log(content);
    fs.writeFileSync('./data.json', content,{encoding: 'utf-8'});

}
function main() {
    loadData();
    
    showMenu();
    

}
main();
console.log('anh quy dep trai');
