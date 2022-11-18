str = "One: 'Hi .Mary.' Two: 'Oh, hi.'\
One: 'How are you doing?'\
Two: 'I'm doing alright. How about you?'\
    One: 'Not too bad. The weather is great isn't it?'\
    Two: 'Yes. It's absolutely beautiful today.'\
One: 'I wish it was like this more frequently.'\
Two: 'Me too.'\
One: 'So where are you going now?'\
Two: 'I'm going to meet a friend of mine at the department store.'\
One: 'Going to do a little shopping?'\
Two: 'Yeah, I have to buy some presents for my parents.'\
One: 'What's the occasion?'\
    Two: 'It's their anniversary.'\
One: 'That's great. Well, you better get going. You don't want to be late.'\
Two: 'I'll see you next time.'\
One: 'Sure. Bye.'"


// Задание 1
console.log(str.replace(/'/g,'"'));

// Задание 2
console.log(str.replace(/\B'|'\B/g,'"'));

// Задание 3
function checkName(str) {
    return str.match(/^[a-zа-яё]+$/i);
};

function checkPhone(str) {
    return str.match(/^\+7\(\d{3}\)\d{3}-\d{4}$/);
};

function checkEmail(str) {
    return str.match(/^[\w.-]+@\w+\.[a-z]{2,4}$/i);
};

function checkInputs(formData) {
    let errors = [checkName(formData.get('name')), checkPhone(formData.get('phone')), checkEmail(formData.get('email'))];
    return errors;
};

function checkForm() {
    document.querySelector('.formButton').addEventListener('click', e => {       
        let formBlock = document.querySelector('.formBlock');
        let formData = new FormData(formBlock);
        let errors = checkInputs(formData);
        let errorFlag;
        for (let i = 0; i < errors.length; i++) {
            if (!errors[i]) {
                formBlock[i].classList.add('errorInput');
                errorFlag = true;
            } else {
                formBlock[i].classList.remove('errorInput');
            }
        }
        if (errorFlag) {
            e.preventDefault();
            alert('Incorrect data');
        }
    });
}
checkForm();

