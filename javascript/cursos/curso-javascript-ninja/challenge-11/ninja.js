var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( var i = 0; i < arr.length; i++){
    if( i === 5){
        continue;
    }
    console.log(i);
}

console.log('Fim do For', arr.length);