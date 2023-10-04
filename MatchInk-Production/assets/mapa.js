maptilersdk.config.apiKey = 'Mj4Mofh4veKpvWE10M5t';
const map = new maptilersdk.Map({
	container: 'map',
	style: maptilersdk.MapStyle.STREETS,
	center: [-34.900002,-8.050000],
	zoom: 14,
});

const markers = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [-34.88565070733052, -8.059828498711216]
		},
		"properties": {
			"nome": "Estudio 1"
		}
	},
	{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [-34.917646991853516, -8.023942718302367]
		},
		"properties": {
			"nome": "M2D Tattoo Studio"
		}
	},
	{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [-34.9099178, -8.0450110]
		},
		"properties": {
			"nome": "Torre Studio"
		}
	},
	{
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [-34.905842, -8.047070]
		},
		"properties": {
			"nome": "Madalena Tatuagens"
		}
	},
	]
};

 map.addControl(
 	new maptilersdk.GeolocateControl({
 		positionOptions: {
 			enableHighAccuracy: true
 		},
 		trackUserLocation: true
 	})
 );

markers.features.forEach(function (marker) {
	new maptilersdk.Marker()
		.setLngLat(marker.geometry.coordinates)
		.setPopup(new maptilersdk.Popup()
		.setHTML(`<h1 class="pop_up">
					<a href="./MatchInk-Production/studio.html">
						${marker.properties.nome}
					</a>
				</h1>
				<p>Descrição Studio</p>
				<iframe src="./MatchInk-Production/studio.html" style="height:600px;width:700px; background-color:white;">
				</iframe>
		`))
		.addTo(map);
});
