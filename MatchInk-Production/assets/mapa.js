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
	}
	]
};



markers.features.forEach(function (marker) {
	new maptilersdk.Marker()
		.setLngLat(marker.geometry.coordinates)
		.setPopup(new maptilersdk.Popup()
		.setHTML(`<h1 class="pop_up">
					<a href="./MatchInk-Production/studio.html">
						Studio Recife
					</a>
				</h1>
				<p>Descrição Studio</p>
		`))
		.addTo(map);

});

map.on('click', 'places', (e) => {
	var coordinates = e.features[0].geometry.coordinates.slice();
	var description = e.features[0].properties.description;

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
		coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}

	new maptilersdk.Popup()
		.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
});

