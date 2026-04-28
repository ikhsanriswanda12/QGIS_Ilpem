var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KepadatanPenduduk_1 = new ol.format.GeoJSON();
var features_KepadatanPenduduk_1 = format_KepadatanPenduduk_1.readFeatures(json_KepadatanPenduduk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPenduduk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPenduduk_1.addFeatures(features_KepadatanPenduduk_1);
var lyr_KepadatanPenduduk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPenduduk_1, 
                style: style_KepadatanPenduduk_1,
                popuplayertitle: 'Kepadatan Penduduk',
                interactive: true,
    title: 'Kepadatan Penduduk<br />\
    <img src="styles/legend/KepadatanPenduduk_1_0.png" /> 0.26 - 0.37<br />\
    <img src="styles/legend/KepadatanPenduduk_1_1.png" /> 0.37 - 0.47<br />\
    <img src="styles/legend/KepadatanPenduduk_1_2.png" /> 0.47 - 0.58<br />\
    <img src="styles/legend/KepadatanPenduduk_1_3.png" /> 0.58 - 0.69<br />\
    <img src="styles/legend/KepadatanPenduduk_1_4.png" /> 0.69 - 0.8<br />\
    <img src="styles/legend/KepadatanPenduduk_1_5.png" /> 0.8 - 0.91<br />\
    <img src="styles/legend/KepadatanPenduduk_1_6.png" /> 0.91 - 1.01<br />\
    <img src="styles/legend/KepadatanPenduduk_1_7.png" /> 1.01 - 1.12<br />\
    <img src="styles/legend/KepadatanPenduduk_1_8.png" /> 1.12 - 1.23<br />\
    <img src="styles/legend/KepadatanPenduduk_1_9.png" /> 1.23 - 1.33<br />\
    <img src="styles/legend/KepadatanPenduduk_1_10.png" /> 1.33 - 1.44<br />\
    <img src="styles/legend/KepadatanPenduduk_1_11.png" /> 1.44 - 1.55<br />\
    <img src="styles/legend/KepadatanPenduduk_1_12.png" /> 1.55 - 1.66<br />\
    <img src="styles/legend/KepadatanPenduduk_1_13.png" /> 1.66 - 1.76<br />\
    <img src="styles/legend/KepadatanPenduduk_1_14.png" /> 1.76 - 1.87<br />\
    <img src="styles/legend/KepadatanPenduduk_1_15.png" /> 1.87 - 1.98<br />\
    <img src="styles/legend/KepadatanPenduduk_1_16.png" /> 1.98 - 2.09<br />\
    <img src="styles/legend/KepadatanPenduduk_1_17.png" /> 2.09 - 2.19<br />\
    <img src="styles/legend/KepadatanPenduduk_1_18.png" /> 2.19 - 2.3<br />\
    <img src="styles/legend/KepadatanPenduduk_1_19.png" /> 2.3 - 2.41<br />\
    <img src="styles/legend/KepadatanPenduduk_1_20.png" /> 2.41 - 2.52<br />\
    <img src="styles/legend/KepadatanPenduduk_1_21.png" /> 2.52 - 2.62<br />\
    <img src="styles/legend/KepadatanPenduduk_1_22.png" /> 2.62 - 2.73<br />\
    <img src="styles/legend/KepadatanPenduduk_1_23.png" /> 2.73 - 2.84<br />' });
var format_RiskRatio_2 = new ol.format.GeoJSON();
var features_RiskRatio_2 = format_RiskRatio_2.readFeatures(json_RiskRatio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiskRatio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiskRatio_2.addFeatures(features_RiskRatio_2);
var lyr_RiskRatio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiskRatio_2, 
                style: style_RiskRatio_2,
                popuplayertitle: 'Risk Ratio',
                interactive: true,
    title: 'Risk Ratio<br />\
    <img src="styles/legend/RiskRatio_2_0.png" /> 0.26 - 0.37<br />\
    <img src="styles/legend/RiskRatio_2_1.png" /> 0.37 - 0.47<br />\
    <img src="styles/legend/RiskRatio_2_2.png" /> 0.47 - 0.58<br />\
    <img src="styles/legend/RiskRatio_2_3.png" /> 0.58 - 0.69<br />\
    <img src="styles/legend/RiskRatio_2_4.png" /> 0.69 - 0.8<br />\
    <img src="styles/legend/RiskRatio_2_5.png" /> 0.8 - 0.91<br />\
    <img src="styles/legend/RiskRatio_2_6.png" /> 0.91 - 1.01<br />\
    <img src="styles/legend/RiskRatio_2_7.png" /> 1.01 - 1.12<br />\
    <img src="styles/legend/RiskRatio_2_8.png" /> 1.12 - 1.23<br />\
    <img src="styles/legend/RiskRatio_2_9.png" /> 1.23 - 1.33<br />\
    <img src="styles/legend/RiskRatio_2_10.png" /> 1.33 - 1.44<br />\
    <img src="styles/legend/RiskRatio_2_11.png" /> 1.44 - 1.55<br />\
    <img src="styles/legend/RiskRatio_2_12.png" /> 1.55 - 1.66<br />\
    <img src="styles/legend/RiskRatio_2_13.png" /> 1.66 - 1.76<br />\
    <img src="styles/legend/RiskRatio_2_14.png" /> 1.76 - 1.87<br />\
    <img src="styles/legend/RiskRatio_2_15.png" /> 1.87 - 1.98<br />\
    <img src="styles/legend/RiskRatio_2_16.png" /> 1.98 - 2.09<br />\
    <img src="styles/legend/RiskRatio_2_17.png" /> 2.09 - 2.19<br />\
    <img src="styles/legend/RiskRatio_2_18.png" /> 2.19 - 2.3<br />\
    <img src="styles/legend/RiskRatio_2_19.png" /> 2.3 - 2.41<br />\
    <img src="styles/legend/RiskRatio_2_20.png" /> 2.41 - 2.52<br />\
    <img src="styles/legend/RiskRatio_2_21.png" /> 2.52 - 2.62<br />\
    <img src="styles/legend/RiskRatio_2_22.png" /> 2.62 - 2.73<br />\
    <img src="styles/legend/RiskRatio_2_23.png" /> 2.73 - 2.84<br />' });
var format_Populasi_3 = new ol.format.GeoJSON();
var features_Populasi_3 = format_Populasi_3.readFeatures(json_Populasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Populasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populasi_3.addFeatures(features_Populasi_3);
var lyr_Populasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Populasi_3, 
                style: style_Populasi_3,
                popuplayertitle: 'Populasi',
                interactive: true,
    title: 'Populasi<br />\
    <img src="styles/legend/Populasi_3_0.png" /> 137100 - 141568<br />\
    <img src="styles/legend/Populasi_3_1.png" /> 141568 - 146036<br />\
    <img src="styles/legend/Populasi_3_2.png" /> 146036 - 150504<br />\
    <img src="styles/legend/Populasi_3_3.png" /> 150504 - 154972<br />\
    <img src="styles/legend/Populasi_3_4.png" /> 154972 - 159440<br />\
    <img src="styles/legend/Populasi_3_5.png" /> 159440 - 163908<br />\
    <img src="styles/legend/Populasi_3_6.png" /> 163908 - 168376<br />\
    <img src="styles/legend/Populasi_3_7.png" /> 168376 - 172844<br />\
    <img src="styles/legend/Populasi_3_8.png" /> 172844 - 177313<br />\
    <img src="styles/legend/Populasi_3_9.png" /> 177313 - 181781<br />\
    <img src="styles/legend/Populasi_3_10.png" /> 181781 - 186249<br />\
    <img src="styles/legend/Populasi_3_11.png" /> 186249 - 190717<br />\
    <img src="styles/legend/Populasi_3_12.png" /> 190717 - 195185<br />\
    <img src="styles/legend/Populasi_3_13.png" /> 195185 - 199653<br />\
    <img src="styles/legend/Populasi_3_14.png" /> 199653 - 204121<br />\
    <img src="styles/legend/Populasi_3_15.png" /> 204121 - 208589<br />\
    <img src="styles/legend/Populasi_3_16.png" /> 208589 - 213057<br />\
    <img src="styles/legend/Populasi_3_17.png" /> 213057 - 217525<br />\
    <img src="styles/legend/Populasi_3_18.png" /> 217525 - 221993<br />\
    <img src="styles/legend/Populasi_3_19.png" /> 221993 - 226461<br />\
    <img src="styles/legend/Populasi_3_20.png" /> 226461 - 230929<br />\
    <img src="styles/legend/Populasi_3_21.png" /> 230929 - 235397<br />\
    <img src="styles/legend/Populasi_3_22.png" /> 235397 - 239865<br />\
    <img src="styles/legend/Populasi_3_23.png" /> 239865 - 1423900<br />' });
var format_PositifCOVID19_4 = new ol.format.GeoJSON();
var features_PositifCOVID19_4 = format_PositifCOVID19_4.readFeatures(json_PositifCOVID19_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositifCOVID19_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositifCOVID19_4.addFeatures(features_PositifCOVID19_4);
var lyr_PositifCOVID19_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PositifCOVID19_4, 
                style: style_PositifCOVID19_4,
                popuplayertitle: 'Positif COVID-19',
                interactive: true,
    title: 'Positif COVID-19<br />\
    <img src="styles/legend/PositifCOVID19_4_0.png" /> 0-1.000<br />\
    <img src="styles/legend/PositifCOVID19_4_1.png" /> 1.000-2.000<br />\
    <img src="styles/legend/PositifCOVID19_4_2.png" /> 2.000-3.000<br />\
    <img src="styles/legend/PositifCOVID19_4_3.png" /> 3.000-4.000<br />\
    <img src="styles/legend/PositifCOVID19_4_4.png" /> 4.000-5.000<br />\
    <img src="styles/legend/PositifCOVID19_4_5.png" /> 5.000-10.000<br />\
    <img src="styles/legend/PositifCOVID19_4_6.png" /> 10.000++<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_KepadatanPenduduk_1.setVisible(true);lyr_RiskRatio_2.setVisible(true);lyr_Populasi_3.setVisible(true);lyr_PositifCOVID19_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KepadatanPenduduk_1,lyr_RiskRatio_2,lyr_Populasi_3,lyr_PositifCOVID19_4];
lyr_KepadatanPenduduk_1.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'NUM_NBRS': 'NUM_NBRS', 'ID': 'ID', 'Y': 'Y', 'X1': 'X1', 'X2': 'X2', 'X3': 'X3', 'X4': 'X4', 'X5': 'X5', 'X6': 'X6', 'X7': 'X7', 'Positif': 'Positif', 'Population': 'Population', 'Density': 'Density', 'Distance': 'Distance', 'RR': 'RR', });
lyr_RiskRatio_2.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'NUM_NBRS': 'NUM_NBRS', 'ID': 'ID', 'Y': 'Y', 'X1': 'X1', 'X2': 'X2', 'X3': 'X3', 'X4': 'X4', 'X5': 'X5', 'X6': 'X6', 'X7': 'X7', 'Positif': 'Positif', 'Population': 'Population', 'Density': 'Density', 'Distance': 'Distance', 'RR': 'RR', });
lyr_Populasi_3.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'NUM_NBRS': 'NUM_NBRS', 'ID': 'ID', 'Y': 'Y', 'X1': 'X1', 'X2': 'X2', 'X3': 'X3', 'X4': 'X4', 'X5': 'X5', 'X6': 'X6', 'X7': 'X7', 'Positif': 'Positif', 'Population': 'Population', 'Density': 'Density', 'Distance': 'Distance', 'RR': 'RR', });
lyr_PositifCOVID19_4.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'NUM_NBRS': 'NUM_NBRS', 'ID': 'ID', 'Y': 'Y', 'X1': 'X1', 'X2': 'X2', 'X3': 'X3', 'X4': 'X4', 'X5': 'X5', 'X6': 'X6', 'X7': 'X7', 'Positif': 'Positif', 'Population': 'Population', 'Density': 'Density', 'Distance': 'Distance', 'RR': 'RR', });
lyr_KepadatanPenduduk_1.set('fieldImages', {'Kabupaten': 'TextEdit', 'NUM_NBRS': 'Range', 'ID': 'Range', 'Y': 'TextEdit', 'X1': 'TextEdit', 'X2': 'TextEdit', 'X3': 'TextEdit', 'X4': 'TextEdit', 'X5': 'TextEdit', 'X6': 'TextEdit', 'X7': 'TextEdit', 'Positif': 'TextEdit', 'Population': 'TextEdit', 'Density': 'TextEdit', 'Distance': 'TextEdit', 'RR': 'TextEdit', });
lyr_RiskRatio_2.set('fieldImages', {'Kabupaten': 'TextEdit', 'NUM_NBRS': 'Range', 'ID': 'Range', 'Y': 'TextEdit', 'X1': 'TextEdit', 'X2': 'TextEdit', 'X3': 'TextEdit', 'X4': 'TextEdit', 'X5': 'TextEdit', 'X6': 'TextEdit', 'X7': 'TextEdit', 'Positif': 'TextEdit', 'Population': 'TextEdit', 'Density': 'TextEdit', 'Distance': 'TextEdit', 'RR': 'TextEdit', });
lyr_Populasi_3.set('fieldImages', {'Kabupaten': 'TextEdit', 'NUM_NBRS': 'Range', 'ID': 'Range', 'Y': 'TextEdit', 'X1': 'TextEdit', 'X2': 'TextEdit', 'X3': 'TextEdit', 'X4': 'TextEdit', 'X5': 'TextEdit', 'X6': 'TextEdit', 'X7': 'TextEdit', 'Positif': 'TextEdit', 'Population': 'TextEdit', 'Density': 'TextEdit', 'Distance': 'TextEdit', 'RR': 'TextEdit', });
lyr_PositifCOVID19_4.set('fieldImages', {'Kabupaten': 'TextEdit', 'NUM_NBRS': 'Range', 'ID': 'Range', 'Y': 'TextEdit', 'X1': 'TextEdit', 'X2': 'TextEdit', 'X3': 'TextEdit', 'X4': 'TextEdit', 'X5': 'TextEdit', 'X6': 'TextEdit', 'X7': 'TextEdit', 'Positif': 'TextEdit', 'Population': 'TextEdit', 'Density': 'TextEdit', 'Distance': 'TextEdit', 'RR': 'TextEdit', });
lyr_KepadatanPenduduk_1.set('fieldLabels', {'Kabupaten': 'inline label - visible with data', 'NUM_NBRS': 'hidden field', 'ID': 'hidden field', 'Y': 'hidden field', 'X1': 'hidden field', 'X2': 'hidden field', 'X3': 'hidden field', 'X4': 'hidden field', 'X5': 'hidden field', 'X6': 'hidden field', 'X7': 'hidden field', 'Positif': 'hidden field', 'Population': 'hidden field', 'Density': 'hidden field', 'Distance': 'hidden field', 'RR': 'inline label - visible with data', });
lyr_RiskRatio_2.set('fieldLabels', {'Kabupaten': 'inline label - visible with data', 'NUM_NBRS': 'hidden field', 'ID': 'hidden field', 'Y': 'hidden field', 'X1': 'hidden field', 'X2': 'hidden field', 'X3': 'hidden field', 'X4': 'hidden field', 'X5': 'hidden field', 'X6': 'hidden field', 'X7': 'hidden field', 'Positif': 'hidden field', 'Population': 'hidden field', 'Density': 'hidden field', 'Distance': 'hidden field', 'RR': 'inline label - visible with data', });
lyr_Populasi_3.set('fieldLabels', {'Kabupaten': 'inline label - visible with data', 'NUM_NBRS': 'hidden field', 'ID': 'hidden field', 'Y': 'hidden field', 'X1': 'hidden field', 'X2': 'hidden field', 'X3': 'hidden field', 'X4': 'hidden field', 'X5': 'hidden field', 'X6': 'hidden field', 'X7': 'hidden field', 'Positif': 'hidden field', 'Population': 'inline label - visible with data', 'Density': 'hidden field', 'Distance': 'hidden field', 'RR': 'hidden field', });
lyr_PositifCOVID19_4.set('fieldLabels', {'Kabupaten': 'inline label - visible with data', 'NUM_NBRS': 'hidden field', 'ID': 'hidden field', 'Y': 'hidden field', 'X1': 'hidden field', 'X2': 'hidden field', 'X3': 'hidden field', 'X4': 'hidden field', 'X5': 'hidden field', 'X6': 'hidden field', 'X7': 'hidden field', 'Positif': 'inline label - visible with data', 'Population': 'hidden field', 'Density': 'hidden field', 'Distance': 'hidden field', 'RR': 'hidden field', });
lyr_PositifCOVID19_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});