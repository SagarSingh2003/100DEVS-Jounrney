document.getElementById('check').addEventListener('click' , check);

function check(){
    let day = document.querySelector('#day').value.toLowerCase();

    //Code

    if ( day === "tuesday" || day === "thursday"){
      
      document.getElementById('placeToSee').innerText = 'ClassDay Yaay';

    }else if( day === "saturday" || day === "sunday"){

      document.getElementById('placeToSee').innerText = 'BoringDay // ExcitingDay';

    }else {

      document.getElementById('placeToSee').innerText = 'Weekday';

    }
}