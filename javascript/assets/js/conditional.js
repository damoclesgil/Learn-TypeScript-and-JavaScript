console.log('hello from external script');

var age = prompt('How old are you? ');

var ageParser = parseInt(age);

if (ageParser >= 18) {
    console.log('You are authorized!');
} else {
    console.log('You are not authorized!');
}

switch (ageParser) {
    case (ageParser >= 18):
        console.log('You are authorized switch!');
        break;
    case (ageParser):
        console.log('You are authorized switch!');
        break;
    default:
        console.log('default function')
}