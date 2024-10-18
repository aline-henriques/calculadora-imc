const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight= document.getElementById('weight').value;
    const height= document.getElementById('height').value;

    const bmi= (weight / (height * height)).toFixed(2);

    const value= document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description= 'Você está abaixo do peso!'
    }  
   
    else if (bmi >= 18.5 && bmi <= 25)
    {
      description= 'Você está com o peso ideal!'
      value.classList.remove('attention');
      value.classList.add('normal');
    } 
    
    else if (bmi > 25 && bmi <= 30)
    {
        description= 'Você está acima do peso!'
    } 
    
    else if (bmi >  30 && bmi <= 35)
    { 
        description= 'Você está com obesidade grau I.'
    }

    else if (bmi > 35 && bmi <= 40) {
        description= 'Você está com obesidade grau II (severa).'
    }

    else {
        description= 'Você está com obesidade grau III (mórbida).'
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;

});