//permissão para a localização
navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location, 'fetched');
});
//permissão para a notificação
Notification.requestPermission(function (result) {
$status.innerText = result;
});
 
