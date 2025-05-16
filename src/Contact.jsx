export default function Contact(){
    return(
        <>
            <h1>Contáctanos</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensaje de Consulta</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )
}