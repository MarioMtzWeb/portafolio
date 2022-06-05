const d = document;


export function formSubmit (form){
    
    const $form = d.querySelector(form);
    
    console.log($form);

    fetch("https://formsubmit.co/ajax/mario_marz11@hotmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${$form.name.value}`,
            email: `${$form.email.value}`,
            message: `${$form.message.value}`,
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(()=> {
        console.log('Hola');
    })
}


