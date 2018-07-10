function createPie() {
	var pie = new d3pie("majorPieChart", {
		"header": {
			"title": {
				"text": "What Do We Study?",
				"fontSize": 34
			},
			"subtitle": {
				"text": "Phi Sigma Rho actives of the 2015-16 academic year by major",
				"color": "#999999",
				"fontSize": 10
			},
			"location": "pie-center",
			"titleSubtitlePadding": 10
		},
		"footer": {
			"text": "",
			"color": "#999999",
			"fontSize": 10,
			"font": "open sans",
			"location": "bottom-left"
		},
		"size": {
			"canvasWidth": 1000,
			"pieInnerRadius": "80%",
			"pieOuterRadius": "90%"
		},
		"data": {
			"sortOrder": "label-desc",
			"content": [
				{
					"label": "Informatics",
					"value": 6,
					"color": "#710633"
				},
				{
					"label": "Mechanical Engineering",
					"value": 5,
					"color": "#54457F"
				},
				{
					"label": "Human Centered Design & Engineering",
					"value": 9,
					"color": "#D44D5C"
				},
				{
					"label": "Bioengineering",
					"value": 9,
					"color": "#9CBFA7"
				},
				{
					"label": "Chemical Engineering",
					"value": 2,
					"color": "#C9F299"
				},
				{
					"label": "Chemistry",
					"value": 1,
					"color": "#E3B5A4"
				},
				{
					"label": "Physics & Astronomy",
					"value": 1,
					"color": "#F5E9E2"
				},
				{
					"label": "Geography",
					"value": 1,
					"color": "#EAE8FF"
				},
				{
					"label": "Computer Science",
					"value": 7,
					"color": "#827191"
				},
				{
					"label": "Aeronautics & Astronautics",
					"value": 1,
					"color": "#9C604B"
				},
				{
					"label": "Electrical Engineering",
					"value": 2,
					"color": "#81807C"
				},
				{
					"label": "Computer Engineering",
					"value": 1,
					"color": "#CCC7B9"
				},
				{
					"label": "Other",
					"value": 3,
					"color": "#EAF9D9"
				}
			]
		},
		"labels": {
			"outer": {
				"format": "label-percentage1",
				"pieDistance": 20
			},
			"inner": {
				"format": "none"
			},
			"mainLabel": {
				"fontSize": 14
			},
			"percentage": {
				"color": "#999999",
				"fontSize": 11,
				"decimalPlaces": 0
			},
			"value": {
				"color": "#cccc43",
				"fontSize": 11
			},
			"lines": {
				"enabled": true,
				"color": "#777777"
			},
			"truncation": {
				"enabled": true
			}
		},
		"effects": {
			"pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			}
		},
		"misc": {
			"colors": {
				"segmentStroke": ""
			}
		}
	});
}