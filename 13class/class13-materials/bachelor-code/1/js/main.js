document.querySelector('#claire').addEventListener('click', hideNikkiSharleen )
document.querySelector('#nikki').addEventListener('click', hideSharleenClaire )
document.querySelector('#sharleen').addEventListener('click', hideClaireNikki )

function hideNikkiSharleen(){
	document.querySelector('#claire').style.margin = ' 0 0 0 600px '
	document.querySelector('#nikki').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}


function hideSharleenClaire(){
	document.querySelector('#nikki').style.margin = '0 0 0 600px'
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}


function hideClaireNikki(){
	document.querySelector('#sharleen').style.margin = '0 0 0 600px'
	document.querySelector('#nikki').style.display = 'none'
	document.querySelector('#claire').style.display = 'none'
}