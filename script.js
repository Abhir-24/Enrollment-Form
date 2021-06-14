const enrollBtn = document.getElementById('enroll-btn');

let students =[];
let r = 1;

const getGender = () => {
    const genderClass = document.getElementsByName('gender');
    if (genderClass[0].checked)
        return genderClass[0].value;
    else if (genderClass[1].checked)
        return genderClass[1].value;
}

const getSkills = () => {
    const skills = document.getElementsByClassName('skills');
    let skillsList = [];
    for (var i = 0; i < 3; i++) {
        if (skills[i].checked)
        skillsList.push(skills[i].value);
    }
    return skillsList;
}

enrollBtn.onclick = function enrollStudent(e) {
    e.preventDefault();
    let student = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        website: document.getElementById('form-website').value,
        image: document.getElementById('form-image').value,
        gender: getGender(),
        skillsList: getSkills(),
    };

    if(student.name =="" || student.email == "" || student.website == "" || student.image == "" || student.gender == "")
    {
        alert('Please Enter all the Details!');
        return false;
    }

    
    students.push(student);
    let studentDetails = document.getElementById('student-details');

    let detailsBox = studentDetails.insertRow(r);

    if(r%2==0)
        detailsBox.classList.add('student-details-dark');
    else    
    detailsBox.classList.add('student-details-light');

    let studentInfo = detailsBox.insertCell(0);
    let studentImg = detailsBox.insertCell(1);
    studentImg.classList.add('student-image-container');

    let addName = document.createElement('p');
    addName.innerHTML = student.name;
    addName.classList.add('student-info');
    addName.classList.add('name-bold');
    
    let addEmail = document.createElement('p');
    addEmail.innerHTML = student.email;
    addEmail.classList.add('student-info');
    
    let addWebsite = document.createElement('a');
    let link =document.createTextNode(student.website);
    addWebsite.appendChild(link);
    addWebsite.href = student.website;
    addWebsite.target ="_blank";
    addWebsite.classList.add('website');


    
    let addGender = document.createElement('p');
    addGender.innerHTML = student.gender;
    addGender.classList.add('student-info');
    
    let addSkills = document.createElement('p');
    addSkills.innerHTML = student.skillsList;
    addSkills.classList.add('student-info');
    

    const profileImg = document.createElement('img');
    profileImg.classList.add('student-img');
    profileImg.src=student.image;
    
    

    studentInfo.appendChild(addName);
    studentInfo.appendChild(addGender);
    studentInfo.appendChild(addEmail);
    studentInfo.appendChild(addWebsite);
    studentInfo.appendChild(addSkills);
    studentImg.appendChild(profileImg);
    r++;
    const enrollForm = document.getElementById('enrollment-form');
    enrollForm.reset();
    
}