import Formu from "../../Forms/Form";
import FormField from "../../Forms/FormField";
import PillButton from "../../Forms/PillButton";
function ContactF(){
    
    return(
    <Formu id="cont">
        <FormField type="text" id="txtname" fname="name" caption="Nombre" required ></FormField>
        <br></br>
        <FormField type="text" id="txtape" fname="lname" caption="Apellido" required></FormField>
        <br></br>
        <label for="product">Selecciona un producto </label>
            <select name="product" id="product">
                <option value="Relojes">Relojes</option>
                <option value="Collares">Collares</option>
                <option value="Pendientes">Pendientes</option>
                <option value="Aretes">Aretes</option>
            </select>
            <br></br>
            <textarea id="consul" name="consulta" placeholder="Escribe tu consulta con más detalle aqui" rows="4" cols="50" className="w-11/12"></textarea>
        <PillButton text="Enviar" click={()=>{var mensaje= "Hola, soy: "+document.getElementById("txtname").value+" "+document.getElementById("txtape").value+" y estoy interesado en "+document.getElementById("product").value+" más especificamente "+document.getElementById("consul").value;
            var uev=encodeURI(mensaje);
            var finished=`https://wa.me/50489937939?text=${uev}`;
            window.location.href=finished;
             alert("Estas siendo redirigido a nuestro whatsapp");}}></PillButton>
    </Formu>);
}
export default ContactF;