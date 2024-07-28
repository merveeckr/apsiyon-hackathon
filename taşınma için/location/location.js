
function konumSorgula() {
  document.getElementById('durum_mesaj').innerHTML = `Konum aranıyor....`;
  navigator.geolocation.getCurrentPosition(oldu, olmadi);
}



function oldu(pos) {


  document.getElementById('enlem').innerHTML = pos.coords.latitude;
  document.getElementById('boylam').innerHTML = pos.coords.longitude;
  document.getElementById('dogruluk').innerHTML = `${pos.coords.accuracy} metre`;

  document.getElementById('durum_mesaj').innerHTML = `Konum bulundu!`;


  mapembed = `https://www.google.com/maps?output=embed&z=15&q=${pos.coords.latitude},${pos.coords.longitude}`;
  console.log(mapembed);

  document.getElementById('harita').setAttribute('src', mapembed);


  console.log(pos);
}


function olmadi(hata) {
  document.getElementById('durum_mesaj').innerHTML = `<strong>Hata Kodu</strong> ${hata.code} <br> <strong>Hata mesajı</strong> ${hata.message}`;
  console.log(hata);
}

//console.log(navigator);