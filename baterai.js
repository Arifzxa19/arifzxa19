charging = false
function animasicas(){
	if (!charging) return console.log('')
	document.getElementById('sisabatre').style.width = 100+'%'
	setTimeout("document.getElementById('sisabatre').style.width = sisabatre", 1000);
	setTimeout("animasicas()", 2000)
}

navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateLevelInfo();
    updateChargeInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    /*(battery.charging ? Swal.fire('', `Selamat mengisi baterai<br>yang tersisa ${battery.level * 100}%`) : "")*/
	if (battery.charging) {
	charging = true
	statuscas = 'tersambung'
	animasicas()
	}else{
	charging = false
	statuscas = 'terputus'
	document.getElementById('sisabatre').style.width = sisabatre
	}
    console.log('charging: '+battery.charging)
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
	document.getElementById('sisabatre').style.width = (battery.level * 100).toFixed(0) + "%"
	document.getElementById('sisabatree').innerText = (battery.level * 100).toFixed(0) + "%"
	warnaprogress('sisabatre','', (battery.level * 100).toFixed(0))
	sisabatre = (battery.level * 100).toFixed(0) + "%"
	console.log("Battery level: "
                + (battery.level * 100).toFixed(0) + "%");
  }
});