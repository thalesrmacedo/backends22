function initMap() {
  const localizacaoLoja = { lat: -23.561684, lng: -46.655981 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: localizacaoLoja,
    zoom: 15,
  });

  new google.maps.Marker({
    position: localizacaoLoja,
    map,
    title: "Loja Exemplo",
  });
}
