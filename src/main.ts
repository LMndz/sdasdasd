import datosFactura from './datosFactura'
import axios from 'axios'


const {MostrarFactura, filtradoId, filtradoNumero} = datosFactura;

MostrarFactura();
console.log(filtradoId);
console.log(filtradoNumero);

const apiKey= 'uyt5QagE3BidxydT4zxUcTAsfMAbsAn4tD7kjelU'
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
.then((respuesta)=>{return respuesta.json()})
//.then((data)=>{console.log(data)})
//.then(({data})=>{console.log(data)})
.then((data)=>{
  //const url  =data.hdurl;
  //console.log(url);

  console.log(data);
 
  document.querySelector<HTMLDivElement>('#app')!.innerHTML=`<div class="item">
  <span>${data.date}</span>
  <span>${data.title}</span>
  <span>${data.explanation}</span>
  </div>
  <br>
  <br>`
  //const img = document.createElement('img')
  //img.src=url
  //document.body.append(img)
  
})
.catch((error)=>{console.log(error)})


const nasaApi = axios.create({
  baseURL:'https://api.nasa.gov/planetary',
  params:{
    api_key: apiKey
  }
})

//Cuerpo de la llamada
nasaApi.get('/apod').then(resp=>{
  const data = resp.data
  const url = data.hdurl;

  console.log(url)
  const imagen = document.createElement("img")
  imagen.src = url;
  document.body.append(imagen)
}).catch(err=>{
  console.log(err);
})