async function load() {
    const url = 'https://rickandmortyapi.com/api/character/';
    try{
    	const response = await fetch(url);
      	const datos = await response.json();
		console.log(datos.results);
		let content = "";
		for(let i = 0; i < datos.results.length; i++){
			let current = datos.results[i];
			content += `
				<div>
					<img src="${current.image}"></img>
				</div>
				<div>
					<p> Nombre: ${current.name} </p>
					<p> Género: ${current.gender} </p>
					<p> Locación: ${current.location.name} </p>
					<p> Origen: ${current.origin.name} </p>
					<p> Especie: ${current.species} </p>
					<p> Status: ${current.status} </p>
				</div>
			`
		}
		document.getElementById("info").innerHTML = content;
	}
	catch(error){
		console.error('Error:', error);
	}
}
document.addEventListener('DOMContentLoaded', () => {
    load();
});