function openFullscreen() {
	var elem = document.documentElement;
    if (elem.requestFullscreen) {
    	elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
    	/* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
    	elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem = window.top.document.body; //To break out of frame in IE
        elem.msRequestFullscreen();
    }
}

document.addEventListener('fullscreenchange', async (event) => {
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
  } else {
    Swal.fire('Hello').then((result) => {
    	openFullscreen()
    })
  }
});
window.onload = function() {
Swal.fire('Hello').then((result) => {
    	openFullscreen()
    })
}
window.setTimeout("fungsiip()",1000);
function fungsiip(){
	document.getElementById('limitipp').innerText = `${sisaip}`
	document.getElementById('limitip').style.width = sisaip*10+'%'
	warnaprogress('limitip','',sisaip*10)
	console.log(sisaip)
}