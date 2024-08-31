const footerElement = document.createElement('footer');
document.body.appendChild(footerElement);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `<b><i>Morgan Guarino</i></b> &copy ${thisYear}`

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'GitHub'];

const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

function checkListContents() {
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    if (messageList.children.length === 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}

checkListContents();

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.elements['usersName'].value;
    const email = event.target.elements['usersEmail'].value;
    const message = event.target.elements['usersMessage'].value;

    console.log(name, email, message);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> : ${message} </span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
        checkListContents();
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset(); 

    checkListContents();
});

