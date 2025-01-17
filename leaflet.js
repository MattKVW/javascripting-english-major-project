let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
    firstMap.setView([40.730833, -73.9975], 16);


let bobstLibrary, bobstLibraryMarker;
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).addTo(firstMap);

let washingtonSquarePark, washingtonSquareParkMarker;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);

let test1, testMarker1;
test1 = L.latLng(40.529444, -73.957222);
testMarker1 = L.marker(test1).addTo(firstMap);

let test2, testMarker2;
test2 = L.latLng(40.129444, -74.333333);
testMarker2 = L.marker(test2).addTo(firstMap);

let test3, testMarker3;
test3 = L.latLng(41.729444, -72.997222);
testMarker3 = L.marker(test3).addTo(firstMap);

let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);


circle = L.circle(bobstLibrary, {radius: 100,
                                 color: "#859900",
                                 fillColor: "#cb4b16",
                                 opacity: 0.9,
                                 illOpacity: 0.25}
          ).addTo(firstMap);
