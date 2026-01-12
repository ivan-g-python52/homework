'use strict';

const userName = document.getElementById('user-name');
const userTitle = document.getElementById('user-title');
const userBio = document.getElementById('user-bio');
const nameInput = document.getElementById('name-input');
const titleInput = document.getElementById('title-input');
const bioInput = document.getElementById('bio-input');
const userProfile = document.getElementById('user-profile');

function updateName() {
    const newName = nameInput.value.trim();
    if (newName !== "") {
        userName.textContent = newName;
        nameInput.value = "";
    } else {
        alert("Пожалуйста, введите имя");
    }
}

function updateTitle() {
    const newTitle = titleInput.value.trim();
    if (newTitle !== "") {
        userTitle.textContent = newTitle;
        titleInput.value = "";
    } else {
        alert("Пожалуйста, введите должность");
    }
}

function updateBio() {
    const newBio = bioInput.value.trim();
    if (newBio !== "") {
        userBio.textContent = newBio;
        bioInput.value = "";
    } else {
        alert("Пожалуйста, введите описание");
    }
}

function highlightProfile() {
    userProfile.style.backgroundColor = "#f0f8ff";
    userProfile.style.border = "2px solid #4a90e2";
    userProfile.style.borderRadius = "10px";
    userProfile.style.padding = "20px";
    userProfile.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
}

function resetProfile() {
    userName.textContent = "Иван Иванов";
    userTitle.textContent = "Студент";
    userBio.textContent = "Люблю изучать JavaScript";
    
    nameInput.value = "";
    titleInput.value = "";
    bioInput.value = "";
    
    userProfile.style.backgroundColor = "";
    userProfile.style.border = "";
    userProfile.style.borderRadius = "";
    userProfile.style.padding = "";
    userProfile.style.boxShadow = "";
    
}