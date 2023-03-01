// 잠실 더 컨벤션 위경도
var lat = 37.5157108;
var lng = 127.1057463;

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(lat, lng),
    zoom: 18,
});

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(lat, lng),
    size:mid,
    map: map
});