let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            let audio = new Audio('./sounds/crash.mp3');
            console.log('Audio: ', audio);
            audio.play();
        });
}

// completed challenge
// document.querySelector('.set').addEventListener('click', handleClick);

// function handleClick() {
//     alert('I got clicked');
// }
