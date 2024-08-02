document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('black').onclick = partyBlack;


function partyPurple() {

  document.querySelector('body').style.background = 'rgba(241,63,247,1)';
  document.querySelector('body').style.color = 'white';

}

function partyGreen (){
  document.querySelector('body').style.background = 'rgba(0,253,81,1)';
  document.querySelector('body').style.color = 'white';
}


function partyBlue (){
  document.querySelector('body').style.background = 'rgba(0,254,255)';
  document.querySelector('body').style.color = 'white';
}


function partyBlack (){
  document.querySelector('body').style.background = 'rgb(0 , 0 , 0)';
  document.querySelector('body').style.color = 'white';
}