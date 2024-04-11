let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            alert('I got clicked!');
        });
}

// completed challenge
// document.querySelector('.set').addEventListener('click', handleClick);

// function handleClick() {
//     alert('I got clicked');
// }
