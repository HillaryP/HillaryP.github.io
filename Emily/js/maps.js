var map;

function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
		center: new google.maps.LatLng(34.0086142,-45.9994644),
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	}
	map = new google.maps.Map(mapCanvas, mapOptions);
	map.set('styles', [
	  {
	    featureType: 'road',
	    elementType: 'geometry',
	    stylers: [
	      { visibility: 'off' }
	    ]
	  }, {
	    featureType: 'road',
	    elementType: 'labels',
	    stylers: [
	      { visibility: 'off' }
	    ]
	  }, {
	    featureType: 'landscape',
	    elementType: 'geometry',
	    stylers: [
	      { color: '#9CBFA7' }
	    ]
	  }, {
	  	featureType: 'water', 
	  	elementType: 'geometry', 
	  	stylers: [
	  	   { color: '#EAE8FF' }
	  	]
	  }
	]);
}

google.maps.event.addDomListener(window, 'load', initialize);

function addMarkers() {
	var data = [
		[-33.890542, 151.274856],
		[47.570318, -122.112746],
		[46.211484, -118.091750],
		[45.499898, -122.530226],
		[41.369903, -74.124464],
		[64.392961, -17.786573],
		[51.938592, -0.911573],
		[36.590501, 119.498583],
		[32.834942, 119.498583],
		[40.573595, 121.959520],
		[35.739043, 138.131396],
		[31.645548, 114.928270],
		[28.141390, -98.470168],
		[19.633921, -155.599074]
	];
	for (var i = 0; i < data.length; i++) {
		var marker = new google.maps.Marker({
			map: map,
			animation: google.maps.Animation.DROP,
			position: new google.maps.LatLng(data[i][0], data[i][1]),
		});
	}
}