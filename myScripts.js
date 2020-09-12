for(let i = 0; i < 20; i++){
    setTimeout(function () {
            var box = document.createElement('div');
            box.className = 'box';

        document.querySelector('.container').appendChild(box);

        },500*i)
}

for (let i = 0; i <= 50; i++){
    setTimeout(function (){
        document.write('test number ' + i + "<br> ")
    },200*i)
}