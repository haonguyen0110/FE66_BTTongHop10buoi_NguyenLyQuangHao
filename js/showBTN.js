var newBTN= document.querySelector('#newBTN');
var popBTN= document.querySelector('#popBTN');
var videoBTN=document.querySelector('#videoBTN');

newBTN.onclick = function (event){
    event.preventDefault();
    var new__content = document.querySelector('.new__Content');
    new__content.style.display='block';
    newBTN.style.display='none';
}

popBTN.onclick = function (event){
    event.preventDefault();
    var popular__content = document.querySelector('.popular__Content');
    popular__content.style.display='block';
    popBTN.style.display='none';
}

videoBTN.onclick = function (event){
    event.preventDefault();
    var video__content = document.querySelector('.video__Content');
    video__content.style.display='block';
    videoBTN.style.display='none';
}