(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;

            // Display "X" for multiplication and "÷" for division
            if (value === '*') {
                screen.value += 'X';
            } else if (value === '/') {
                screen.value += '÷';
            } else {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "0";
        } else {
            try {
                // Replace "X" with "*" and "÷" with "/" for evaluation
                let expression = screen.value.replace(/X/g, '*').replace(/÷/g, '/');
                let answer = eval(expression);
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
    });

    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.querySelector('.calculator').classList.toggle('dark-theme');
        document.body.classList.toggle('dark-theme'); // Add this line to toggle the body background color
    });
    
    

})();
