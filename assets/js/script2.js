const formulario2 = document.querySelector("#formulario")
const div2 = document.querySelector("#conversion")



const datagrafico = async (moneda) => {
  try {
    const res2 = await fetch(`https://mindicador.cl/api/${moneda}`)
    const data2 = await res2.json()
    return data2

  } catch (error) {
    alert("Fallo la API vuelve a intentarlo")
  }
}


formulario.addEventListener("submit", async (event) => {
  try {
    event.preventDefault()
    let monto = document.querySelector("#monto").value
    let moneda = document.querySelector("#moneda").value
    let result = await datagrafico(moneda)
    //console.log(result.serie)
    let fecha = result.serie.map(item =>{
      let date = new Date(item.fecha)
      return date.toLocaleDateString("es-CL")
    })
    let valores = result.serie.map(item => item.valor)
    //console.log(fecha, valores)

    

    const creargrafico = (fecha, valores)
    document.querySelector("#grafico").innerHTML = ``
    document.querySelector("#grafico").innerHTML = `<canvas id="myChart"></canvas>`
    const ctx = document.getElementById('myChart').getContext(`2d`) ;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: fecha,
        datasets: [{
          label: 'Valores de ' + moneda,
          data: valores,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  } catch (error) {
    alert("Error Grafico")
  }
})
