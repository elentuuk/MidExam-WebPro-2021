let student_data = document.getElementById("studentList");
let Search_student = document.getElementById("searchStudent");
let dataStudent = [
    {
        "NIM" : "105021810050",
        "fullName" : "Jake Twist",
        "gender" : "Male",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Informatika"
    },
]

function Add_student() {
    let NIM = document.getElementById("NIM").value;
    let fullName = document.getElementById("FullName").value;
    
    let gender = "";
    if(document.getElementById("genderMale").checked) {
        gender = "Male";
    } else if (document.getElementById("genderFemale").checked)
    {
        gender = "Female";
    }

    let faculty = document.getElementById("faculty").value;
    let programOfStudy = document.getElementById("programOfStudy");
    programOfStudy = programOfStudy.options[programOfStudy.selectedIndex].text;

    dataStudent.push({
        "NIM" : NIM,
        "fullName" : fullName,
        "gender" : gender,
        "faculty" : faculty,
        "programOfStudy" : programOfStudy
    });
}