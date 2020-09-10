document.querySelector('.js-userinput').addEventListener('keydown', function(event){

    if(event.code == 'Enter'){
        let searchInput = document.querySelector('.js-userinput').value;
        console.log(searchInput);

        window.location.href = 'https://www.' + searchInput + '.com';
    }
});

document.querySelector('.js-go').addEventListener('click', function(){

        let searchInput = document.querySelector('.js-userinput').value;
        console.log(searchInput);

        window.location.href = 'https://www.' + searchInput + '.com';
});