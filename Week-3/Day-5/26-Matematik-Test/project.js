const correctAnswer = ['8','10','3','25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const button = document.querySelector('.btn');

console.log(form);
console.log(result);


form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    ];

    let score = 0;

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 25;
        }
    });

    result.classList.remove('d-none')
    result.querySelector('#percentage').textContent = `${score}%`;


    if(score == 100){
        successMessage.classList.remove('d-none');
        button.setAttribute('disabled','')
    }
    console.log(result.classList);
});

