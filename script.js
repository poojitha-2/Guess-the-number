let msg1 = document.getElementById('message1');
let msg2 = document.getElementById('message2');
let msg3 = document.getElementById('message3');
let answer = Math.floor((Math.random() * 100) + 1);
let no_of_guesses = 0;
let guessed_num = [];
play = () =>{
    let user_guess = document.getElementById('input').value;
    let guess_btn = document.getElementById('guess');
    
    if(user_guess < 0 || user_guess > 100 || user_guess == ''){
        alert('Please enter a number between 1 to 100.');
    }
    else{
        guessed_num.push(user_guess);
        no_of_guesses+=1;
        if(user_guess < answer){
            msg1.textContent ='you guess is too low';
            msg2.textContent = 'No.of guess :' + no_of_guesses;
            msg3.textContent = 'Guessed number are :' + guessed_num;
        }
        else if(user_guess > answer){
            msg1.textContent ='you guess is too high';
            msg2.textContent = 'No.of guess :' + no_of_guesses;
            msg3.textContent = 'Guessed number are :' + guessed_num;
        }
        else{
            msg1.textContent ='your guess is absoloutely right!';
            msg2.textContent = 'the number is ' + answer;
            msg3.textContent = 'you guessed it in ' + no_of_guesses + ' guesses';
        }
    }
    guess_btn.addEventListener('click' , (event) =>{
        event.preventDefault();
        let user_guess = document.getElementById('input');
        user_guess.value = '';
    })


}