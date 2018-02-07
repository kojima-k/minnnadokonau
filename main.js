var connection = new WebSocket('ws://localhost:9999');

$(".name_send").click(function(){
  $(".name_send").val("GPS取得中");
  $(".name_send").prop('disabled', true);
  $(".name").prop('disabled', true);
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      successCallback, errorCallback
    );
  } else {
    console.log('使えない');
  }
});



 /* geolocation is available */
function successCallback(position) {
  var user_name = $(".name").val();
  $(".name_send").val("GPS取得完了！");
  connection.send(JSON.stringify({name:user_name,lat:position.coords.latitude , lon:position.coords.longitude}
    ));
  var gl_text = "緯度：" + position.coords.latitude + "<br>";
  gl_text += "経度：" + position.coords.longitude + "<br>";
  gl_text += "高度：" + position.coords.altitude + "<br>";
  gl_text += "緯度・経度の誤差：" + position.coords.accuracy + "<br>";
  gl_text += "高度の誤差：" + position.coords.altitudeAccuracy + "<br>";
  gl_text += "方角：" + position.coords.heading + "<br>";
  gl_text += "速度：" + position.coords.speed + "<br>";
  document.getElementById("show_result").innerHTML = gl_text;

  var map = document.getElementById("gmap");
  var options = {
    zoom: 16,
    center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
   maps = new google.maps.Map(map, options);
   marker = new google.maps.Marker({
    position: { lat:position.coords.latitude, lng:position.coords.longitude },
    map: maps
  });
// websocket
// Log messages from the server
connection.onmessage =  (e)=> {
  console.log(JSON.parse(e.data));
   getmes = JSON.parse(e.data)
   var marker = new google.maps.Marker({
    position: { lat:getmes.lat, lng:getmes.lon},
    map: maps
  });
};
}

 /* geolocation IS NOT available */
function errorCallback(error) {
  var err_msg = "error";
  switch (error.code) {
    case 1:
      err_msg = "位置情報の利用が許可されていません";
      break;
    case 2:
      err_msg = "デバイスの位置が判定できません";
      break;
    case 3:
      err_msg = "タイムアウトしました";
      break;
  }
  document.getElementById("show_result").innerHTML = err_msg;
}
google.maps.event.addDomListener(window, 'load', function () {
});


// websocket
 // When the connection is open, send some data to the server
 connection.onopen = ()=> {
//connection.send(JSON.stringify({"name":"aaa"})); // Send the message '' to the server
};
// Log errors
connection.onerror = (error)=> {
  console.log('WebSocket Error ' + error);
};




