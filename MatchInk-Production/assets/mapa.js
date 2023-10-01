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
		.addTo(map);
});
