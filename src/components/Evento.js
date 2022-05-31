import Button from './evento/Button'


function Evento(){

    function meuEvento() {
        console.log(`Ativando o primeiro evento `)
    }

    function segundoEvento() {
        console.log ('Ativando segundo evento!')
    }

    return(
        <div>
            <p>Clique paara disparar um evento</p>
            <Button event={meuEvento} text='Primerio Evento'/>
            <Button event={segundoEvento} text='Segundo Evento'/>
        </div>
    )
    
}

export default Evento