var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.547000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GeoTechReportsRegisters_13_1 = new ol.format.GeoJSON();
var features_GeoTechReportsRegisters_13_1 = format_GeoTechReportsRegisters_13_1.readFeatures(json_GeoTechReportsRegisters_13_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoTechReportsRegisters_13_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoTechReportsRegisters_13_1.addFeatures(features_GeoTechReportsRegisters_13_1);
cluster_GeoTechReportsRegisters_13_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_GeoTechReportsRegisters_13_1
});
var lyr_GeoTechReportsRegisters_13_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GeoTechReportsRegisters_13_1, 
                style: style_GeoTechReportsRegisters_13_1,
                popuplayertitle: 'GeoTech Reports Registers_1.3',
                interactive: true,
    title: 'GeoTech Reports Registers_1.3<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_0.png" /> Geology - Desktop<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_1.png" /> Geophysical<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_2.png" /> Geotechnical Investigation<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_3.png" /> Interpretative<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_4.png" /> Sediment - Acid<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GeoTechReportsRegisters_13_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GeoTechReportsRegisters_13_1];
lyr_GeoTechReportsRegisters_13_1.set('fieldAliases', {'ID': 'ID', 'Client': 'Client', 'Consultant': 'Consultant', 'Date': 'Date', 'Report Category': 'Report Category', 'Project Name': 'Project Name', 'Report Name': 'Report Name', 'Boreholes': 'Boreholes', 'Geology': 'Geology', 'CPT_SPT_DCP': 'Penetration Test', 'Shear Vane': 'Shear Vane', 'Geophysical': 'Geophysical', 'Test Pits': 'Test Pits', 'Vibrocore': 'Vibrocore', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Hyperlink': 'Hyperlink', 'field_18': 'field_18', 'https://hallcontractingau.sharepoint.com/sites/Pre-Contract-Engineering/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FPre-Contract-Engineering%2FShared%20Documents%2FUndergraduate%20Work%2F2024': 'https://hallcontractingau.sharepoint.com/sites/Pre-Contract-Engineering/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FPre-Contract-Engineering%2FShared%20Documents%2FUndergraduate%20Work%2F2024', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', 'field_29': 'field_29', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', 'field_43': 'field_43', 'field_44': 'field_44', 'field_45': 'field_45', 'field_46': 'field_46', 'field_47': 'field_47', 'field_48': 'field_48', 'field_49': 'field_49', 'field_50': 'field_50', 'field_51': 'field_51', 'field_52': 'field_52', 'field_53': 'field_53', 'field_54': 'field_54', });
lyr_GeoTechReportsRegisters_13_1.set('fieldImages', {'ID': 'TextEdit', 'Client': 'TextEdit', 'Consultant': 'TextEdit', 'Date': 'TextEdit', 'Report Category': 'TextEdit', 'Project Name': 'TextEdit', 'Report Name': 'TextEdit', 'Boreholes': 'TextEdit', 'Geology': 'TextEdit', 'CPT_SPT_DCP': 'TextEdit', 'Shear Vane': 'TextEdit', 'Geophysical': 'TextEdit', 'Test Pits': 'TextEdit', 'Vibrocore': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Hyperlink': 'TextEdit', 'field_18': '', 'https://hallcontractingau.sharepoint.com/sites/Pre-Contract-Engineering/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FPre-Contract-Engineering%2FShared%20Documents%2FUndergraduate%20Work%2F2024': '', 'field_20': '', 'field_21': '', 'field_22': '', 'field_23': '', 'field_24': '', 'field_25': '', 'field_26': '', 'field_27': '', 'field_28': '', 'field_29': '', 'field_30': '', 'field_31': '', 'field_32': '', 'field_33': '', 'field_34': '', 'field_35': '', 'field_36': '', 'field_37': '', 'field_38': '', 'field_39': '', 'field_40': '', 'field_41': '', 'field_42': '', 'field_43': '', 'field_44': '', 'field_45': '', 'field_46': '', 'field_47': '', 'field_48': '', 'field_49': '', 'field_50': '', 'field_51': '', 'field_52': '', 'field_53': '', 'field_54': '', });
lyr_GeoTechReportsRegisters_13_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'Client': 'inline label - visible with data', 'Consultant': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Report Category': 'inline label - visible with data', 'Project Name': 'inline label - visible with data', 'Report Name': 'inline label - visible with data', 'Boreholes': 'inline label - visible with data', 'Geology': 'inline label - visible with data', 'CPT_SPT_DCP': 'inline label - visible with data', 'Shear Vane': 'inline label - visible with data', 'Geophysical': 'inline label - visible with data', 'Test Pits': 'inline label - visible with data', 'Vibrocore': 'inline label - visible with data', 'Hyperlink': 'inline label - visible with data', 'field_18': 'hidden field', 'https://hallcontractingau.sharepoint.com/sites/Pre-Contract-Engineering/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FPre-Contract-Engineering%2FShared%20Documents%2FUndergraduate%20Work%2F2024': 'hidden field', 'field_20': 'hidden field', 'field_21': 'hidden field', 'field_22': 'hidden field', 'field_23': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', 'field_26': 'hidden field', 'field_27': 'hidden field', 'field_28': 'hidden field', 'field_29': 'hidden field', 'field_30': 'hidden field', 'field_31': 'hidden field', 'field_32': 'hidden field', 'field_33': 'hidden field', 'field_34': 'hidden field', 'field_35': 'hidden field', 'field_36': 'hidden field', 'field_37': 'hidden field', 'field_38': 'hidden field', 'field_39': 'hidden field', 'field_40': 'hidden field', 'field_41': 'hidden field', 'field_42': 'hidden field', 'field_43': 'hidden field', 'field_44': 'hidden field', 'field_45': 'hidden field', 'field_46': 'hidden field', 'field_47': 'hidden field', 'field_48': 'hidden field', 'field_49': 'hidden field', 'field_50': 'hidden field', 'field_51': 'hidden field', 'field_52': 'hidden field', 'field_53': 'hidden field', 'field_54': 'hidden field', });
lyr_GeoTechReportsRegisters_13_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});