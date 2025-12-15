var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NDVI_06_1 = new ol.format.GeoJSON();
var features_NDVI_06_1 = format_NDVI_06_1.readFeatures(json_NDVI_06_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_06_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_06_1.addFeatures(features_NDVI_06_1);
var lyr_NDVI_06_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_06_1, 
                style: style_NDVI_06_1,
                popuplayertitle: 'NDVI_06',
                interactive: true,
    title: 'NDVI_06<br />\
    <img src="styles/legend/NDVI_06_1_0.png" /> вода<br />\
    <img src="styles/legend/NDVI_06_1_1.png" /> зарастание<br />' });
var format_NDVI_07_2 = new ol.format.GeoJSON();
var features_NDVI_07_2 = format_NDVI_07_2.readFeatures(json_NDVI_07_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_07_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_07_2.addFeatures(features_NDVI_07_2);
var lyr_NDVI_07_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_07_2, 
                style: style_NDVI_07_2,
                popuplayertitle: 'NDVI_07',
                interactive: true,
    title: 'NDVI_07<br />\
    <img src="styles/legend/NDVI_07_2_0.png" /> вода<br />\
    <img src="styles/legend/NDVI_07_2_1.png" /> зарастание<br />' });
var format_NDVI_08_3 = new ol.format.GeoJSON();
var features_NDVI_08_3 = format_NDVI_08_3.readFeatures(json_NDVI_08_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_08_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_08_3.addFeatures(features_NDVI_08_3);
var lyr_NDVI_08_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_08_3, 
                style: style_NDVI_08_3,
                popuplayertitle: 'NDVI_08',
                interactive: true,
    title: 'NDVI_08<br />\
    <img src="styles/legend/NDVI_08_3_0.png" /> вода<br />\
    <img src="styles/legend/NDVI_08_3_1.png" /> зарастание<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_NDVI_06_1.setVisible(true);lyr_NDVI_07_2.setVisible(true);lyr_NDVI_08_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NDVI_06_1,lyr_NDVI_07_2,lyr_NDVI_08_3];
lyr_NDVI_06_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NDVI_07_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Поле': 'Поле', });
lyr_NDVI_08_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NDVI_06_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NDVI_07_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Поле': '', });
lyr_NDVI_08_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NDVI_06_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NDVI_07_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Поле': 'no label', });
lyr_NDVI_08_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NDVI_08_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});