document.getElementById('getSake').addEventListener('click', getSake);
document.getElementById('getCerveza').addEventListener('click', getCerveza);
document.getElementById('getPlatillos').addEventListener('click', getPlatillos);
document.getElementById('getSushi').addEventListener('click', getSushi);
document.getElementById('getRamen').addEventListener('click', getRamen);
document.getElementById('getBebidas').addEventListener('click', getBebidas);

function getSake(){    
    // fetch('platillos.json')
    // // .then((res) => console.log(data))
    // .then((res) => res.json())
    // .then((data) => {
    //     let output = '<h2>Sake</h2>';
    //     console.log(data);

    //     data.forEach(function(sake) {

    //         output +=`
    //             <ul style="list-style: none">                                        
    //                 <li>${sake.opciones}</li>
    //             </ul>
    //         `
    //     });        
    //     document.getElementById('output').innerHTML = output;
    // })

    let out = `
        <h2>Sake</h2>
        <ul style="list-style: none">                                        
            <li>CUP SAKE (COPA DE VINO DE ARROZ) (RICE LIQUOR CUP) </li>
            <li>SAKE ATSUKAN [VINO DE ARROZ CALIENTE / HOT RICE LIQUOR] </li>
            <li> - GEKKEKAN LIGHT  </li>
            <li>SAWANOTSURU JUNMAISHU  </li>
            <li> - TAKASHIMIZU SEISEN  </li>
            <li>SAKE HIYA [VINO DE ARROZ FRIO / COLD RICE LIQUOR] </li>
            <li> - GEKKEKAN LIGHT </li>
        </ul>
    `
    document.getElementById('out').innerHTML = out;
}

function getCerveza(){

}

function getPlatillos(){

}

function getSushi(){

}

function getRamen(){

}

function getBebidas(){

}