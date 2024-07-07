const formulario = document.querySelector("#formulario")
const div = document.querySelector("#conversion")

const obtenerdata = async (moneda)=>{
try {
    const res = await fetch("https://mindicador.cl/api/")
    const data = await res.json()
    //console.log(data[moneda])
    return data[moneda]
} catch (error) {
    alert("Fallo la API vuelve a intentarlo")
}
}

formulario. addEventListener("submit", async(event)=>{
try {
    event.preventDefault()
    let monto = document.querySelector("#monto").value
    let moneda = document.querySelector("#moneda").value
    let result = await obtenerdata(moneda)
    let datoconversion = result.valor
    let resultadoconversion = (monto / datoconversion).toFixed(2)
    let html = ""
    html += `<p>Resultado ${resultadoconversion} ${result.codigo}</p>`
    div.innerHTML = html
} catch (error) {
    alert("Error en Calculo, vuelve a intentarlo")
}
})
