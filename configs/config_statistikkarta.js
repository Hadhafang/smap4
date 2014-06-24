/**
 * Configuration for the planning map application "Pedagogiska kartor" for SBK, Malmö stad.
 */
 
//anvisningar för pk. 
//zIndex: 1-999  baselayers        00-99  -    
//zIndex: 1000-1999  polygoner    100-199 -    
//zIndex: 2000-2999  linjer       200-299 - 
//zIndex: 3000-3999  punkter      300-399 - 
//zIndex: 4000-4999  texter       400-499 - 
  
  
var planApp = {
	
	// Metadata for folders in the layer tree. Also used by
	// BlixtenPopup when displaying HTML content for a category
	// folder on select (when clicking on a folder).
	categories: {
		headers: {
			"Befolkning": {
				hideCheckbox: true,
				startVisible : true,
				tooltip: "Befolkning",
				expand: false,
				cssClass: "mainheader",
				subheaders: {
					"Befolkningsprognos 2019": {
					hideCheckbox: true
					},
					
					"Befolkning 2013": {
					hideCheckbox: true
					}
				}
			},	
			
			"Utbildning": {
				hideCheckbox: true,
				tooltip: "Utbildning",
				expand: false,
				cssClass: "mainheader",
				subheaders: {
					"Utbildningsnivå": {
						hideCheckbox: true
					}
				}
			},	
			"Arbetsmarknad": {
				hideCheckbox: true,
				tooltip: "Arbetsmarknad",
				expand: false,
				cssClass: "mainheader",
				subheaders: {
					"Förvärvsfrekvens": {
						hideCheckbox: true
					}
				}
			},
			
			"Underlag": {
				hideCheckbox: true,
				tooltip: "Underlag",
				expand: false,
				cssClass: "mainheader",
				subheaders: {
					"Stadsområden & delområden": {
						hideCheckbox: true,
						startVisible : true,
						cssClass: "subheader",
						color: "#FFFFFF",
						textBox: "",
						tooltip: "",
						subheaders: {}
					},
					"Skola": {
						hideCheckbox: true,
						startVisible : true,
						cssClass: "subheader",
						color: "#FFFFFF",
						textBox: "",
						tooltip: "",
						subheaders: {}
					}
				}
			}
		},
		layers: {}
	}
};

var config = {
	mapName: {
		"sv-SE": "Malmö Stadsatlas",
		"en": ""
	},
	
	zoomMethod: null,
	minWidth: 800,
	version : "4.0.0",
	projection : "EPSG:3008",
	//projection : "EPSG:3006",
	//resolutions : [27.781305, 13.229193, 5.291677, 2.645839], // EPSG:3008
	resolutions : [27.781305, 13.229193, 5.291677, 2.645839], // EPSG:3008
	//resolutions : [ 200, 100, 50, 25, 10, 5, 2, 1 ], // EPSG:3006
	
	// EPSG:3006
	/*maxExtent : {
		w : 335000,
		s : 6130000,
		e : 480000,
		n : 6270000
	},
	defaultExtent : {
		w : 335000,
		s : 6130000,
		e : 480000,
		n : 6270000
	},*/
	
	// EPSG:3008
	maxExtent : {
		w : 100000,
		s : 6148850,
		e : 139000,
		n : 6173450
	},
	defaultExtent : {
		w : 104853,
		s : 6150876,
		e : 131653,
		n : 6171076
	},
	
//	proxyHost : "http://xyz.malmo.se/myproxy/proxy.py?url=",
	// Adapts depending on IP
	proxyHost: {
		"localhost": "../../cgi-bin/proxy/proxy.py?url=",
		"xyz.malmo.se": "http://xyz.malmo.se/myproxy/proxy.py?url=",
		"sbkvmgeoserver.malmo.se": "http://sbkvmgeoserver.malmo.se/cgi-bin/proxy/proxy.py?url=",
		"kartor.smap.se": "http://kartor.smap.se/cgi-bin/proxy/proxy.py?url="
	},
	
//	jqTheme: "orange",
	jqTheme: "gray-flat",
	
	rootURL: "http://www.malmo.se/karta/", //document.URL.split("?")[0],
	//defaultWebParams : "defaultParam=5",
	
	layers : {
		
		overlays : [
		{
			displayName : "Antal, Total bef",
			name : "beftot",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=beftot&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default4.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '4', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default4.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default4.png"
				}
			}
		},
		{
			displayName : "Förändring, Total bef",
			name : "befforandtot",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befforandtot&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default10.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '10', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default10.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default10.png"
				}
			}
		},
		{
			displayName : "Förändring, 2013-2019",
			name : "befprog1319",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprog1319&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default3.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '3', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.90",
				zIndex: 350,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default3.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default3.png"
				}
			}
		},
		
		{
			displayName : "Antal, 1-5 år",
			name : "befprogant15",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogant15&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default2.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '2', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default2.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default2.png"
				}
			}
		},
		{
			displayName : "Förändring, 1-5 år",
			name : "befprogfora15",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogfora15&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default1.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '1', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default1.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default1.png"
				}
			}
		},
		
		{
			displayName : "Antal, 6-15 år",
			name : "befprogant615",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogant615&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default6.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '6', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default6.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default6.png"
				}
			}
		},
		{
			displayName : "Förändring, 6-15 år",
			name : "befprogfora615",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogfora615&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default7.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '7', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default7.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default7.png"
				}
			}
		},
		
		{
			displayName : "Antal, 16-19 år",
			name : "befprogant1619",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogant1619&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default8.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '8', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default8.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default8.png"
				}
			}
		},
		{
			displayName : "Förändring, 16-19 år",
			name : "befprogfora1619",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogfora1619&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default9.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '9', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default9.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default9.png"
				}
			}
		},
		{
			displayName : "Antal, 75 år och äldre",
			name : "befprogant75w",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogant75w&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default5.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '5', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default5.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default5.png"
				}
			}
		},
		
		{
			displayName : "Förändring, 75 år och äldre",
			name : "befprogfora75w",
			layerType : "wms",
			dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befprogfora75w&img=http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default0.png",
			category : ["Befolkning", "Befolkningsprognos 2019"],
			displayInLayerSwitcher: true,
			URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befprog_13_19/MapServer/WMSServer?",
			params : {
				layers: '0', 
				format: 'image/png',
				transparent: 'true',
				SRS: '3008'
			}, 
			options : {
				opacity: "0.70",
				zIndex: 150,
				isBaseLayer: false,
				singleTile : true	
			},
			selectable : false,
			geomType : 'polygon',
			startVisible : false,
			copyright : [],
			style: {
				"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default0.png"}			
			},
			legend : {
				hover: {
					url: "http://xyz.malmo.se/arcgisoutput/statistik_befprog_13_19_Mapserver/wms/default0.png"
				}
			}
		},
			
			
			
			{
				displayName : "Total summa",
				name : "bsumma",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default10.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '10', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default10.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default10.png"
					}
				}
			},
			{
				displayName : "80-w år",
				name : "b80w",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default0.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '0', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default0.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default0.png"
					}
				}
			},
			{
				displayName : "65-79 år",
				name : "b6579",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default1.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '1', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default1.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default1.png"
					}
				}
			},
			{
				displayName : "45-64 år",
				name : "b4564",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default2.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '2', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default2.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default2.png"
					}
				}
			},
			{
				displayName : "25-44 år",
				name : "b2544",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default3.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '3', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default3.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default3.png"
					}
				}
			},
			{
				displayName : "19-24 år",
				name : "b1924",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default4.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '4', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default4.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default4.png"
					}
				}
			},
			{
				displayName : "16-18 år",
				name : "b1618",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default5.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '5', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default5.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default5.png"
					}
				}
			},
			{
				displayName : "13-15 år",
				name : "b1315",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default6.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '6', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default6.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default6.png"
					}
				}
			},
			{
				displayName : "10-12 år",
				name : "b1012",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default7.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '7', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default7.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default7.png"
					}
				}
			},
			{
				displayName : "7-9 år",
				name : "b79",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default8.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '8', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default8.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default8.png"
					}
				}
			},
			{
				displayName : "0-6 år",
				name : "b06",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=befolkning&img=http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default9.png",
				category : ["Befolkning", "Befolkning 2013"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_befolkning/MapServer/WMSServer?",
				params : {
					layers: '9', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					zIndex: 150,
					isBaseLayer: false,
					singleTile : true	
				},
				selectable : false,
				geomType : 'polygon',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default9.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_befolkning_Mapserver/wms/default9.png"
					}
				}
			},
			
			
		
			{
				displayName : "Eftergymnasial 12",
				name : "eftergymutbniva",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=eftergymutbniva&img=http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default3.png",
				category : ["Utbildning", "Utbildningsnivå"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_utbniva/MapServer/WMSServer?",
				params : {
					layers: '3', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					isBaseLayer: false,
					zIndex: 150,
					singleTile : true			
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default3.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default3.png"
					}
				}
			},			
			{
				displayName : "Gymnasial 12",
				name : "gymutbniva",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=gymutbniva&img=http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default2.png",
				category : ["Utbildning", "Utbildningsnivå"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_utbniva/MapServer/WMSServer?",
				params : {
					layers: '2', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					isBaseLayer: false,
					zIndex: 150,
					singleTile : true			
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default2.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default2.png"
					}
				}
			},
		
			{
				displayName : "Förgymnasial 12",
				name : "forgymutbniva",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=forgymutbniva10&img=http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default1.png",
				category : ["Utbildning", "Utbildningsnivå"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_utbniva/MapServer/WMSServer?",
				params : {
					layers: '1', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					isBaseLayer: false,
					zIndex: 150,
					singleTile : true			
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default1.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default1.png"
					}
				}
			},
			{
				displayName : "Fördelning utbildningsnivå 12",
				name : "utbniva",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=utbniva&img=http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default0.png",
				category : ["Utbildning", "Utbildningsnivå"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_utbniva/MapServer/WMSServer?",
				params : {
					layers: '0', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					isBaseLayer: false,
					zIndex: 150,
					singleTile : true		
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default0.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default0.png"
					}
				}
			},
			{
				displayName : "eftergymnasial jmf 06-10",
				name : "eftergymjmf0610",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=eftergymjmf0610&img=http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default4.png",
				category : ["Utbildning", "Utbildningsnivå"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_utbniva/MapServer/WMSServer?",
				params : {
					layers: '4', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					isBaseLayer: false,
					zIndex: 150,
					singleTile : true		
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default4.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_utbniva_Mapserver/wms/default4.png"
					}
				}
			},
			
			{
				displayName : "Bef 20-64 år, 2011",
				name : "forv206411",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=forv206411&img=http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default2.png",
				category : ["Arbetsmarknad", "Förvärvsfrekvens"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_forv/MapServer/WMSServer?",
				params : {
					layers: '2', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.70",
					isBaseLayer: false,
					zIndex: 150,
					singleTile : true			
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default2.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default2.png"
					}
				}
			},
			{
				displayName : "Förvärvsfrekvens per kön",
				name : "forvford11",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=forvford11&img=http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default1.png",
				category : ["Arbetsmarknad", "Förvärvsfrekvens"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_forv/MapServer/WMSServer?",
				params : {
					layers: '1', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.90",
					isBaseLayer: false,
					zIndex: 360,
					singleTile : true			
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default1.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default1.png"
					}
				}
			},
			{
				displayName : "Jmfr 08-11",
				name : "forvfordjmf0811",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/statistikmetadata.aspx?id=forvfordjmf0811&img=http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default0.png",
				category : ["Arbetsmarknad", "Förvärvsfrekvens"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/ArcGIS/services/statistik_forv/MapServer/WMSServer?",
				params : {
					layers: '0', 
					format: 'image/png',
					transparent: 'true',
					SRS: '3008'
				}, 
				options : {
					opacity: "0.90",
					isBaseLayer: false,
					zIndex: 350,
					singleTile : true			
				},
				selectable : false,
				geomType : 'point',
				startVisible : false,
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default0.png"}			
				},
				legend : {
					hover: {
						url: "http://xyz.malmo.se/arcgisoutput/statistik_forv_Mapserver/wms/default0.png"
					}
				}
			},
			
			
			{
				displayName: 'Delområden',
				name: "delomraden",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=sma_delomrade_p",
				category : ["Underlag", "Stadsområden & delområden"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/geoserver/wms?",
				selectAttributes: ["${fid}"],
				params : {
					layers: "malmows:SMA_DELOMRADE_P",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.90",
					zIndex: 250,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Delområde</div>" +
					"<div class='popup-text2'>${delomr}</div>",					
				blixtable : false, 
				selectable : true,
				getFeatureInfo: {geometryName: "geom"},
				geomType : 'point',
				startVisible : false,
				legend : {
					hover: {
						url: "http://xyz.malmo.se/bilder/kartsymboler/bb_delomrade.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/bilder/kartsymboler/bb_delomrade.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	//externalGraphic: 'http://xyz.malmo.se/rest/2.0/map/img/Generell_select/cirkel_medium_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({								
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}
				}
			},
			{
				displayName: 'Stadsområden',
				name: "stadsomraden",
				layerType : "wms",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=sma_stadomraden_p",
				category : ["Underlag", "Stadsområden & delområden"],
				displayInLayerSwitcher: true,
				URL: "http://xyz.malmo.se/geoserver/wms?",
				selectAttributes: ["${fid}"],
				params : {
					layers: "malmows:SMA_STADSOMRADEN_P",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.90",
					zIndex: 225,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Stadsområdesförvaltning</div>" +
					"<div class='popup-text1'>${sdf_namn}</div>" +					
					"<a href='${url}' class='popup-text1' target='_blank'>Läs mer</a>",					
				blixtable : false, 
				selectable : true,
				getFeatureInfo: {geometryName: "geom"},
				geomType : 'point',
				startVisible : false,
				legend : {
					hover: {
						url: "http://xyz.malmo.se/bilder/kartsymboler/bb_stadsomr.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://xyz.malmo.se/bilder/kartsymboler/bb_stadsomr.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	//externalGraphic: 'http://xyz.malmo.se/rest/2.0/map/img/Generell_select/cirkel_medium_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({								
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}
				}
			},
			{
				displayName : 'Kommunal förskola',
				name: "kommunal_forskola",
				layerType : "wms",
				//dialogContent: "http://161.52.9.230/metadata/skola/forskola.html",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=forskola",
				category : ["Underlag", "Skola"],
				displayInLayerSwitcher: true,
				URL: 'http://xyz.malmo.se:8081/geoserver/malmows/wms?',	
				selectAttributes: ["${namn}"],
				params : {
					layers: "malmows:V_POI_EXTENS_FORSKOLOR_KOMMUNAL_PT",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.70",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Förskola</div>" +
					"<div class='popup-text1'>${namn}</div>" +
					"<div class='popup-text1'><a href='${url}' target='_blank'>${plan} Läs mer</a></div>" +
					"<br>" +
					"<div class='popup-text1'>Stadsområde: ${stadsomr}</div>" +
					"<div class='popup-text1'>Delområde: ${delomr}</div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://xyz.malmo.se/urbex/index.htm?p=true&xy=${easting};${northing}' target='_blank'>Visa snedbild</a></div>" +
					"<div class='popup-text1'><a href='http://sbkspace.malmo.se/cyclomedia/index.htm?posx=${easting}&posy=${northing}' target='_blank'>Visa gatuvy</div>",	
					selectable : true,
				geomType : 'point',
				getFeatureInfo: {geometryName: "geom"},
				startVisible : false,
				legend : {
					hover: {
						url: "http://161.52.9.230/bilder/skola/kommunalforskolahoover.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://161.52.9.230/bilder/skola/kommunalforskola.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	externalGraphic: 'http://161.52.9.230/bilder/Generell_select/kvadrat_stor_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}	
				}
			},
			 {
				displayName : 'Icke kommunal förskola',
				name: "ickekom_forskola",
				layerType : "wms",
				//dialogContent: "http://161.52.9.230/metadata/skola/forskola.html",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=forskola",
				category : ["Underlag", "Skola"],
				displayInLayerSwitcher: true,
				URL: 'http://xyz.malmo.se:8081/geoserver/malmows/wms?',	
				selectAttributes: ["${namn}"],
				params : {
					layers: "malmows:V_POI_EXTENS_FORSKOLOR_PRIVAT_PT",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.70",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Förskola</div>" +
					"<div class='popup-text1'>${namn}</div>" +
					"<div class='popup-text1'><a href='${url}' target='_blank'>${plan} Läs mer</a></div>" +
					"<br>" +
					"<div class='popup-text1'>Stadsområde: ${stadsomr}</div>" +
					"<div class='popup-text1'>Delområde: ${delomr}</div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://xyz.malmo.se/urbex/index.htm?p=true&xy=${easting};${northing}' target='_blank'>Visa snedbild</a></div>" +
					"<div class='popup-text1'><a href='http://sbkspace.malmo.se/cyclomedia/index.htm?posx=${easting}&posy=${northing}' target='_blank'>Visa gatuvy</div>",	
					selectable : true,
				geomType : 'point',
				getFeatureInfo: {geometryName: "geom"},
				startVisible : false,
				legend : {
					hover: {
						url: "http://161.52.9.230/bilder/skola/privatforskolahoover.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://161.52.9.230/bilder/skola/privatforskola.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	externalGraphic: 'http://161.52.9.230/bilder/Generell_select/kvadrat_stor_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}	
				}
			}, 
			{
				displayName : 'Grundskola',
				name: "grundskola",
				layerType : "wms",
				//dialogContent: "http://161.52.9.230/metadata/skola/grundskola.html",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=grundskola",
				category : ["Underlag", "Skola"],
				displayInLayerSwitcher: true,
				URL: "http://161.52.9.230:8080/geoserver/malmows/wms?",	
				selectAttributes: ["${objektnamn}"],
				params : {
					layers: "malmows:POI_SKOLOR_GRUNDSKOLA",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.70",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Grundskola</div>" +
					"<div class='popup-text1'>${objektnamn}</div>" +
					"<div class='popup-text1'><a href='${URL}' target='_blank'>${plan} Läs mer</a></div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://xyz.malmo.se/urbex/index.htm?p=true&xy=${easting};${northing}' target='_blank'>Visa snedbild</a></div>" +
					"<div class='popup-text1'><a href='http://sbkspace.malmo.se/cyclomedia/index.htm?posx=${easting}&posy=${northing}' target='_blank'>Visa gatuvy</div>",		
				selectable : true,
				getFeatureInfo: {geometryName: "geom"},
				geomType : 'point',
				startVisible : false,
				legend : {
					hover: {
						url: "http://161.52.9.230/bilder/skola/grundskolahoover.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://161.52.9.230/bilder/skola/grundskola.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	symbolizer: {
										//graphicWidth: 22,
										//graphicHeigth: 22,
										externalGraphic: 'http://161.52.9.230/bilder/Generell_select/kvadrat_stor_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}	
				}
			},
			
			{
				displayName : 'Gymnasieskola',
				name: "gymnasieskola",
				layerType : "wms",
				//dialogContent: "http://161.52.9.230/metadata/skola/gymnasieskola.html",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=gymnasieskola",
				category : ["Underlag", "Skola"],
				displayInLayerSwitcher: true,
				URL: "http://161.52.9.230:8080/geoserver/malmows/wms?",	
				selectAttributes: ["${objektnamn}"],
				params : {
					layers: "malmows:POI_SKOLOR_GYMNASIESKOLA",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.70",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Gymnasieskola</div>" +
					"<div class='popup-text1'>${objektnamn}</div>" +
					"<div class='popup-text1'><a href='${URL}' target='_blank'>${plan} Läs mer</a></div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://xyz.malmo.se/urbex/index.htm?p=true&xy=${easting};${northing}' target='_blank'>Visa snedbild</a></div>" +
					"<div class='popup-text1'><a href='http://sbkspace.malmo.se/cyclomedia/index.htm?posx=${easting}&posy=${northing}' target='_blank'>Visa gatuvy</div>",			
				selectable : true,
				geomType : 'area',
				getFeatureInfo: {geometryName: "geom"},
				startVisible : false,
				legend : {
					hover: {
						url: "http://161.52.9.230/bilder/skola/gymnasieskolahoover.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://161.52.9.230/bilder/skola/gymnasieskola.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	externalGraphic: 'http://161.52.9.230/bilder/Generell_select/kvadrat_stor_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}	
				}
			},
			
			{
				displayName : 'Högskola & universitet',
				name: "hogskolaochuniversitet",
				layerType : "wms",
				//dialogContent: "http://161.52.9.230/metadata/skola/hogskola.html",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=hogskolaochuniversitet",
				category : ["Underlag", "Skola"],
				displayInLayerSwitcher: true,
				URL: "http://161.52.9.230:8080/geoserver/malmows/wms?",	
				selectAttributes: ["${objektnamn}"],
				params : {
					layers: "malmows:POI_SKOLOR_HOGSKOLOR_UNIVERISIT",
					format: "image/png",
					transparent: "true"
				},
				options : {
					isBaseLayer: false,
					opacity: "0.70",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Högskola & universitet</div>" +
					"<div class='popup-text1'>${objektnamn}</div>" +
					"<div class='popup-text1'><a href='${URL}' target='_blank'>${plan} Läs mer</a></div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://xyz.malmo.se/urbex/index.htm?p=true&xy=${easting};${northing}' target='_blank'>Visa snedbild</a></div>" +
					"<div class='popup-text1'><a href='http://sbkspace.malmo.se/cyclomedia/index.htm?posx=${easting}&posy=${northing}' target='_blank'>Visa gatuvy</div>",	
				selectable : true,
				geomType : 'area',
				getFeatureInfo: {geometryName: "geom"},
				startVisible : false,
				legend : {
					hover: {
						url: "http://161.52.9.230/bilder/skola/hogskolahoover.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://161.52.9.230/bilder/skola/hogskola.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	externalGraphic: 'http://161.52.9.230/bilder/Generell_select/kvadrat_stor_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}	
				}
			},
			
			{
				displayName : 'Övrig skola',
				name: "ovrigskola",
				layerType : "wms",
				//dialogContent: "http://161.52.9.230/metadata/skola/ovrigskola.html",
				dialogContent: "http://xyz.malmo.se/metadata/metadata.aspx?id=ovrigskola",
				category : ["Underlag", "Skola"],
				displayInLayerSwitcher: true,
				URL: "http://161.52.9.230:8080/geoserver/malmows/wms?",	
				selectAttributes: ["${objektnamn}"],
				params : {
					layers: "malmows:POI_SKOLOR_OVR",
					format: "image/png",
					transparent: "true"
				}, 
				options : {
					isBaseLayer: false,
					opacity: "0.70",
					zIndex: 350,
					ratio: 1,
					singleTile : true
				},
				popup :
					"<div class='popup-header1'>Övrig skola</div>" +
					"<div class='popup-text1'>${objektnamn}</div>" +
					"<div class='popup-text1'><a href='${URL}' target='_blank'>${plan} Läs mer</a></div>" +
					"<br>" +
					"<div class='popup-text1'><a href='http://xyz.malmo.se/urbex/index.htm?p=true&xy=${easting};${northing}' target='_blank'>Visa snedbild</a></div>" +
					"<div class='popup-text1'><a href='http://sbkspace.malmo.se/cyclomedia/index.htm?posx=${easting}&posy=${northing}' target='_blank'>Visa gatuvy</div>",	
				selectable : true,
				geomType : 'area',
				getFeatureInfo: {geometryName: "geom"},
				startVisible : false,
				legend : {
					hover: {
						url: "http://161.52.9.230/bilder/skola/ovrigskolahoover.png"
					}
				},		
				copyright : [],
				style: {
					"default": {externalGraphic: "http://161.52.9.230/bilder/skola/ovrigskola.png"},
					"select": {
						rules: [
						        new OpenLayers.Rule({
						        	filter: new OpenLayers.Filter.Comparison({
						        		type: OpenLayers.Filter.Comparison.EQUAL_TO
						        	}),
						        	// if a feature matches the above filter, use this style
						        	symbolizer: {
								    	externalGraphic: 'http://161.52.9.230/bilder/Generell_select/kvadrat_stor_turkos.png'
							        }
						        }),
						        new OpenLayers.Rule({
						        	elseFilter: true,
						           	// if a feature matches the above filter, use this style
						        	symbolizer: {}
						        })
						]
					}	
				}
			}
		],
		
		baselayers : [
			{
				displayName : "Stadskarta s/v",
				name : "karta_sv",  // ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto
				URL: document.location.protocol + "//xyz.malmo.se/data_e/tilecache/malmo/",
				//layer : "malmo_karta_sv",
				layer : "malmo_op2013_sv_maj2013",
				layerType : "tilecache",
				category : "Karta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839],
					buffer : 0,
					transitionEffect : null,
					format : "image/png",
					zIndex: 50,
					isBaseLayer : true,
					//opacity: "0.6",
					attribution : "<a href='mailto:stadsatlas@malmo.se?subject=Stadsatlas'>© Stadsbyggnadskontoret, Malmö stad</a>"
				},
				copyright : [ "Malmö stadsbyggnadskontor", "mailto:stadsatlas@malmo.se?subject=Stadsatlas" ]
			},
			{
				displayName : "Stadskarta",
				name : "stadskartan",  // ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto
				URL: document.location.protocol + "//xyz.malmo.se/data_e/tilecache/malmo/",
				layer : "malmo_karta",
				layerType : "tilecache",
				category : "Karta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),	
					buffer : 0,
					transitionEffect : null,
					format : "image/png",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='mailto:stadsatlas@malmo.se?subject=Malmö Stadsatlas'>© Stadsbyggnadskontoret, Malmö stad</a>"
				},
				copyright : [ "Malmö stadsbyggnadskontor", "mailto:stadsatlas@malmo.se?subject=Stadsatlas" ]
			},
		
			{
				displayName : "Fotokarta 2013",
				name : "orto",  /* ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto  */
				URL : document.location.protocol + '//xyz.malmo.se/data_e/tilecache/malmo/',
				layer : "malmo_ortofoto",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(110000,6151000,128100,6169100),	
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='http://www.lantmateriet.se' target='_blank'>© Lantmäteriet</a>"
				},
				copyright : [ "Lantmäteriet", "http://www.lantmateriet.se" ]
			},
			{
				displayName : "Fotokarta 2012",
				name : "orto12",  /* ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto  */
				URL : document.location.protocol + '//xyz.malmo.se/data_e/tilecache/malmo/',
				layer : "malmo_ortofoto_2012",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),	
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='http://www.lantmateriet.se' target='_blank'>© Lantmäteriet</a>"
				},
				copyright : [ "Lantmäteriet", "http://www.lantmateriet.se" ]
			},
			{
				displayName : "Fotokarta 2011",
				name : "orto11",  /* ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto  */
				URL : document.location.protocol + '//xyz.malmo.se/data_e/tilecache/malmo/',
				layer : "malmo_ortofoto_2011",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),	
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='http://www.lantmateriet.se' target='_blank'>© Lantmäteriet</a>"
				},
				copyright : [ "Lantmäteriet", "http://www.lantmateriet.se" ]
			},
			{
				displayName : "Fotokarta 2010",
				name : "orto_2010",  /* ska ej vara årtal på "name", om vi har med årtal kommer gamla länkar inte funka om vi byter till nytt ortofoto  */
				URL : document.location.protocol + '//xyz.malmo.se/data_e/tilecache/malmo/',
				layer : "malmo_ortofoto_2010",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),	
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='mailto:stadsatlas@malmo.se?subject=Geodatatcenter Skåne'>© Geodatatcenter Skåne</a>"
				},
				copyright : [ "Geodatatcenter Skåne", "" ]
			},
			{
				displayName : "Fotokarta 2007",
				name : "orto2007",
				URL : document.location.protocol + '//xyz.malmo.se/data_e/tilecache/malmo/',
				layer : "malmo_ortofoto_2007",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),	
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='http://www.lantmateriet.se' target='_blank'>© Lantmäteriet</a>"
				},
				copyright : [ "Lantmäteriet", "http://www.lantmateriet.se" ]
			},
			{
				displayName : "Fotokarta 1938-1947",
				name : "orto1940",
				URL : document.location.protocol + '//xyz.malmo.se/data_e/tilecache/malmo/',
				layer : "malmo_ortofoto_1940",
				layerType : "tilecache",
				category : "Fotokarta",
				options : {
					resolutions : [27.781305, 13.229193, 5.291677, 2.645839, 1.322919, 0.529168, 0.26458483],
					maxExtent: new OpenLayers.Bounds(104853,6150876,131653,6171076),	
					buffer : 0,
					transitionEffect : null,
					format : "image/jpg",
					zIndex: 50,
					isBaseLayer : true,
					attribution : "<a href='http://www.lantmateriet.se' target='_blank'>© Lantmäteriet</a>"
				},
				copyright : [  "Lantmäteriet", "http://www.lantmateriet.se"  ]
			}
			
		]
	},
	
	modules : //[sMap.Module.Email, sMap.Module.ModuleTest]
	[
		
//		{
//			init : sMap.Module.LayerLoaderNotifier,
//			config : {}
//		},
		{
			init : sMap.Module.Toolbar,
			config : {
				side: "right"/*,
				title: "Pedagogiska kartor - Upptäck din närmiljö",
				titleCss: {
					"right": "100px"
				}*/
			}
		},
		
//		{
//			init : sMap.Module.MyLegend,
//			config : {}
//		},
//		{
//			init : sMap.Module.TestModule,
//			config : {}
//		},
		{
			init : sMap.Module.FeatureRequester,
			config : {
//				requestableLayers: ["vakant"]
			}
		},
		{
			init : sMap.Module.Select,
			config : {
				addSelectWithKey: false,
				dialogIfMany: true,
				multiple: true,
				forceOne: false,
				fitBoundsIfNotContained: true
			}
		},
		{
			init : sMap.Module.Popup,
			config : {}
		},
		{
			init : sMap.Module.BaselayerSwitcher,
			config : {
				dropDownOnSingle : false,
				buttonWidth : 75,
				dropDownWidth : 130
			}
		},
		{
			init : sMap.Module.ScaleBar,
			config : {}
		},
		 {
			init : sMap.Module.ScaleSelector,
			config : {
			}
		}, 
		{
			init : sMap.Module.Search,
			config : {
				toolbarIndex : 0,
				zoomLevel : 4,
				startText : "Ange adress eller plats",
				dropDownOption: false,
				autoCompleteScriptUrl : "http://xyz.malmo.se/WS/mKarta/autocomplete.ashx?",
				searchScriptUrl : "http://xyz.malmo.se/WS/mKarta/sokexakt.ashx",
				displayName : "Sökning",
				encSpace: "%2b",
				poiLayer: {
					popup: "<div class='popup-header1'>${name}</div>" +
						"<a class='popup-text1' href='${url}' target='_blank'>Läs mer</a><br>" +
						"<div class='popup-text2'>${sdf}</div>" + 						
						"<div class='popup-text2'>${delomr}</div>" + 
						"<div class='popup-text2'>${fast}</div>" +
						"<div class='popup-text2'>${iv_siffr}</div>" +
						"<div class='popup-text2'>${v_siffr}</div>"+
						"<br /><br />"
					}
			}
		},
		/*{
			init : sMap.Module.WFSEditing,
			config : {}
		},
		{
			init : sMap.Module.CrawlsEdit,
			config : {
				toolbarIndex : 4
			}
		},*/
		
		{
			init : sMap.Module.CopyLink,
			config : {
				toolbarIndex: 1,
				addToToolsMenu: "toolsmenu",
				shortenOption: null
			}
		},
		{
			init : sMap.Module.Draw,
			config : {
				addToToolsMenu: "toolsmenu"
			}
		},
		{
			init : sMap.Module.MeasureDialog,
			config : {
				addToToolsMenu: "toolsmenu"
			}
		},
		/* {
			init : sMap.Module.Email,
			config : {
				eMailURL: "http://kartor.smap.se/cgi-bin/email/smapSendEmail.py?",
				eMailTo: "toEmail=",
				eMailSubject: "subject=",
				eMailMsg: "msg=",
				addToToolsMenu: "toolsmenu"
			}
		}, */
		/*{
			init : sMap.Module.Login,
			config : {}
		},
		{
			init : sMap.Module.Opacity,
			config : {
				toolbarIndex: 4
			}
		},*/
		{
			init : sMap.Module.RedirectClick,			
			config : {
				displayName : 'Snedbild',
				//addToToolsMenu: "toolsmenu",
				toolbarIndex: 4,
				url: "http://xyz.malmo.se/urbex/index.htm?p=true&xy=${x};${y}",
				overrideName: "snedbild",
				btnLabel: "Snedbild",
//				btnHover: "Verktyg för att se snedbilder",
				buttonId: "redirect-snedbild",
				buttonCss: "ui-icon-arrowstop-1-s",
				mouseMoveText: "Klicka i kartan för att se snedbild"
			}
		},
		{
			init: sMap.Module.LinkTo,
			config: {
				displayName: "Hjälp",
				toolbarIndex: 1,
				content: "http://xyz.malmo.se/stadsatlas/hjalp/hjalp_statistik.htm",
				dialog: {
					title: "Hjälp",
					width: "720",
					height: "500",
					resizable: false
				}
			}
		},
		{
			init: sMap.Module.LinkTo,
			config: {
				displayName: "Fler kartor",
				toolbarIndex: 7,
				content: "http://www.malmo.se/kartor",
				dialog: false
			}
		},
		{
			init : sMap.Module.Pizza,
			config : {}
		},
		// {
			// init : sMap.Module.Print,
			// config : {
				// toolbarIndex : 1,
				// webContentRoot: "rest/1.0/map-dev/",
				// publicExportFolder: "http://xyz.malmo.se/data_e/smap_export/",
				// privateExportFolder: "E:/data_e/smap_export/",
				// printScriptsFolderPath: "http://xyz.malmo.se/WS/rest-1.0/print/" // "http://localhost/cgi-bin/proxy.py?url="+
			// }
		// },
		{
			init : sMap.Module.SPrint,
			config : {
				toolbarIndex: 1,
				addToToolsMenu: false
			}
		},
/*		{
			init : sMap.Module.Report,
			config : {
				toolbarIndex: 1,
				addToToolsMenu: false
			}
		},
		
		{
			init : sMap.Module.OverlaySwitcher.SimpleSwitcher,
			config : {}
		},
		{
			init: sMap.Module.Blixten,
			config: {
				toolbarIndex: 0,
				margin: 406
			}
		},
		{
			init: sMap.Module.BlixtenPopup2,
			config: {
				categories: planApp.categories
			}
		},*/
		{
			init : sMap.Module.ToolsMenu,
			config : {
				toolbarIndex : 2,
				menuBtns : [ 
		             {
		            	 menuId : "toolsmenu",
		            	 lblText : "Verktyg",
		            	 toolBarIndex : 2
		             }]
			}
		},
		{
			init : sMap.Module.LayerTree,
			config : {
				showFadedLinks: false,
				addPrintButton: false,
				
				addPrintLegendButton: false,
				lbButtonToToolsMenu: true,
				lbToolbarIndex: 1,
				
				showFadedCheckboxes: false,
				showCheckboxAfterTextIcon: false,
				enableTooltip: true,
				folderIcon: null, //"img/folder_page.gif",
				width: 320,
				right: true,
				categories: planApp.categories
			}
		},
		{
			init : sMap.Module.Legend,
			config : {}
		},
		{
			init: sMap.Module.IntroDialog,
			config: {
				dialogBGColor: "#fff",
				dialogOptions: {
					title: "Välkommen!",
					width: 400,
					height: 300,
					minWidth: 100
				},
				contentHtml: 
					"<p><b><i>Statistikatlasen är under uppbyggnad</i></b></p>" +
					"<p>Strukturen bygger på:</p>" +
					"<p>- Ju mörkare färg, desto högre värde </p>" +
					"<p>- Ju mer du zoomar, ju mer detaljerad blir kartan och statistiken</p>" +			
					"<p>- Statistiken visas på finaste geografiska nivå som sekretess och kvalitet tillåter</p>"				
			}
		} 
		
	]
};








// IE7: Change all image/png into image/png8 so it looks a bit
// nicer in our beloved stone-age browser.
if ($.browser.msie && parseInt($.browser.version) < 8) {
	var _ols = config.layers.overlays,
		t = null;
	for (var i=0,len=_ols.length; i<len; i++) {
		t = _ols[i];
		if (t.params && t.params.format && t.params.format === "image/png") {
			t.params.format = "image/png8";
		}
	}
}



