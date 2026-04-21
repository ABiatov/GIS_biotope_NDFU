        var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
        }
        var map = L.map('map', {
            zoomControl:false, maxZoom:28, minZoom:1
        }).fitBounds([[43.75980800768783,27.174438026901502],[52.72292136384585,37.08044206063214]]);
		var zoomHome = L.Control.zoomHome();
	    zoomHome.addTo(map);
		
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
            map.setMaxBounds(map.getBounds());
        }
        map.createPane('pane_DarkMatterretina_0');
        map.getPane('pane_DarkMatterretina_0').style.zIndex = 400;
        var layer_DarkMatterretina_0 = L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png', {
            pane: 'pane_DarkMatterretina_0',
            opacity: 1.0,
            attribution: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
        });
        layer_DarkMatterretina_0;
        map.addLayer(layer_DarkMatterretina_0);
        map.createPane('pane_GoogleHybrid_1');
        map.getPane('pane_GoogleHybrid_1').style.zIndex = 401;
        var layer_GoogleHybrid_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleHybrid_1',
            opacity: 1.0,
            attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
        });
        layer_GoogleHybrid_1;
        map.createPane('pane_OSM_2');
        map.getPane('pane_OSM_2').style.zIndex = 402;
        var layer_OSM_2 = L.tileLayer('http://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            pane: 'pane_OSM_2',
            opacity: 1.0,
            attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_OSM_2;
        map.createPane('pane_r1a_3');
        map.getPane('pane_r1a_3').style.zIndex = 403;
        var layer_r1a_3 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=619&x={x}&y={y}&z={z}', {
            pane: 'pane_r1a_3',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r1a_3;
//        map.addLayer(layer_r1a_3);
        map.createPane('pane_r1b_4');
        map.getPane('pane_r1b_4').style.zIndex = 404;
        var layer_r1b_4 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=617&x={x}&y={y}&z={z}', {
            pane: 'pane_r1b_4',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r1b_4;
        map.createPane('pane_r1c_5');
        map.getPane('pane_r1c_5').style.zIndex = 405;
        var layer_r1c_5 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=615&x={x}&y={y}&z={z}', {
            pane: 'pane_r1c_5',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r1c_5;
        map.createPane('pane_r1mNardus_6');
        map.getPane('pane_r1mNardus_6').style.zIndex = 406;
        var layer_r1mNardus_6 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=613&x={x}&y={y}&z={z}', {
            pane: 'pane_r1mNardus_6',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r1mNardus_6;
        map.createPane('pane_r1p_7');
        map.getPane('pane_r1p_7').style.zIndex = 407;
        var layer_r1p_7 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=611&x={x}&y={y}&z={z}', {
            pane: 'pane_r1p_7',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r1p_7;
        map.createPane('pane_r1q_8');
        map.getPane('pane_r1q_8').style.zIndex = 408;
        var layer_r1q_8 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=609&x={x}&y={y}&z={z}', {
            pane: 'pane_r1q_8',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r1q_8;
        map.createPane('pane_r11_9');
        map.getPane('pane_r11_9').style.zIndex = 409;
        var layer_r11_9 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=607&x={x}&y={y}&z={z}', {
            pane: 'pane_r11_9',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r11_9;
        map.createPane('pane_r12_10');
        map.getPane('pane_r12_10').style.zIndex = 410;
        var layer_r12_10 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=605&x={x}&y={y}&z={z}', {
            pane: 'pane_r12_10',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r12_10;
        map.createPane('pane_r13_11');
        map.getPane('pane_r13_11').style.zIndex = 411;
        var layer_r13_11 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=603&x={x}&y={y}&z={z}', {
            pane: 'pane_r13_11',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r13_11;
        map.createPane('pane_r15_12');
        map.getPane('pane_r15_12').style.zIndex = 412;
        var layer_r15_12 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=601&x={x}&y={y}&z={z}', {
            pane: 'pane_r15_12',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r15_12;
        map.createPane('pane_r16_13');
        map.getPane('pane_r16_13').style.zIndex = 413;
        var layer_r16_13 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=599&x={x}&y={y}&z={z}', {
            pane: 'pane_r16_13',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r16_13;
        map.createPane('pane_r18_14');
        map.getPane('pane_r18_14').style.zIndex = 414;
        var layer_r18_14 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=599&x={x}&y={y}&z={z}', {
            pane: 'pane_r18_14',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r18_14;
        map.createPane('pane_r21_15');
        map.getPane('pane_r21_15').style.zIndex = 415;
        var layer_r21_15 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=595&x={x}&y={y}&z={z}', {
            pane: 'pane_r21_15',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r21_15;
        map.createPane('pane_r22_16');
        map.getPane('pane_r22_16').style.zIndex = 416;
        var layer_r22_16 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=592&x={x}&y={y}&z={z}', {
            pane: 'pane_r22_16',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r22_16;
        map.createPane('pane_r23_17');
        map.getPane('pane_r23_17').style.zIndex = 417;
        var layer_r23_17 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=590&x={x}&y={y}&z={z}', {
            pane: 'pane_r23_17',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r23_17;
        map.createPane('pane_r35_18');
        map.getPane('pane_r35_18').style.zIndex = 418;
        var layer_r35_18 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=587&x={x}&y={y}&z={z}', {
            pane: 'pane_r35_18',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r35_18;
        map.createPane('pane_r36_19');
        map.getPane('pane_r36_19').style.zIndex = 419;
        var layer_r36_19 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=585&x={x}&y={y}&z={z}', {
            pane: 'pane_r36_19',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r36_19;
        map.createPane('pane_r37_20');
        map.getPane('pane_r37_20').style.zIndex = 420;
        var layer_r37_20 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=583&x={x}&y={y}&z={z}', {
            pane: 'pane_r37_20',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r37_20;
        map.createPane('pane_r43_21');
        map.getPane('pane_r43_21').style.zIndex = 421;
        var layer_r43_21 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=581&x={x}&y={y}&z={z}', {
            pane: 'pane_r43_21',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r43_21;
        map.createPane('pane_r44_22');
        map.getPane('pane_r44_22').style.zIndex = 422;
        var layer_r44_22 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=579&x={x}&y={y}&z={z}', {
            pane: 'pane_r44_22',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r44_22;
        map.createPane('pane_r51_23');
        map.getPane('pane_r51_23').style.zIndex = 423;
        var layer_r51_23 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=577&x={x}&y={y}&z={z}', {
            pane: 'pane_r51_23',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r51_23;
        map.createPane('pane_r55_24');
        map.getPane('pane_r55_24').style.zIndex = 424;
        var layer_r55_24 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=575&x={x}&y={y}&z={z}', {
            pane: 'pane_r55_24',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r55_24;
        map.createPane('pane_r56_25');
        map.getPane('pane_r56_25').style.zIndex = 425;
        var layer_r56_25 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=573&x={x}&y={y}&z={z}', {
            pane: 'pane_r56_25',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r56_25;
        map.createPane('pane_r62_26');
        map.getPane('pane_r62_26').style.zIndex = 426;
        var layer_r62_26 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=571&x={x}&y={y}&z={z}', {
            pane: 'pane_r62_26',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r62_26;
        map.createPane('pane_r63_27');
        map.getPane('pane_r63_27').style.zIndex = 427;
        var layer_r63_27 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=569&x={x}&y={y}&z={z}', {
            pane: 'pane_r63_27',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r63_27;
        map.createPane('pane_r64_28');
        map.getPane('pane_r64_28').style.zIndex = 428;
        var layer_r64_28 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=567&x={x}&y={y}&z={z}', {
            pane: 'pane_r64_28',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r64_28;
        map.createPane('pane_r65_29');
        map.getPane('pane_r65_29').style.zIndex = 429;
        var layer_r65_29 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=565&x={x}&y={y}&z={z}', {
            pane: 'pane_r65_29',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_r65_29;
        map.createPane('pane_x36_30');
        map.getPane('pane_x36_30').style.zIndex = 430;
        var layer_x36_30 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=627&x={x}&y={y}&z={z}', {
            pane: 'pane_x36_30',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_x36_30;
        map.createPane('pane_gridr1a_31');
        map.getPane('pane_gridr1a_31').style.zIndex = 431;
        var layer_gridr1a_31 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=551&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr1a_31',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr1a_31;
//        map.addLayer(layer_gridr1a_31);
        map.createPane('pane_gridr1b_32');
        map.getPane('pane_gridr1b_32').style.zIndex = 432;
        var layer_gridr1b_32 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=549&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr1b_32',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr1b_32;
        map.createPane('pane_gridr1c_33');
        map.getPane('pane_gridr1c_33').style.zIndex = 433;
        var layer_gridr1c_33 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=553&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr1c_33',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr1c_33;
        map.createPane('pane_gridr1mNardus_34');
        map.getPane('pane_gridr1mNardus_34').style.zIndex = 434;
        var layer_gridr1mNardus_34 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=547&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr1mNardus_34',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr1mNardus_34;
        map.createPane('pane_gridr1p_35');
        map.getPane('pane_gridr1p_35').style.zIndex = 435;
        var layer_gridr1p_35 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=545&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr1p_35',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr1p_35;
        map.createPane('pane_gridr1q_36');
        map.getPane('pane_gridr1q_36').style.zIndex = 436;
        var layer_gridr1q_36 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=543&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr1q_36',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr1q_36;
        map.createPane('pane_gridr11_37');
        map.getPane('pane_gridr11_37').style.zIndex = 437;
        var layer_gridr11_37 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=563&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr11_37',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr11_37;
        map.createPane('pane_gridr12_38');
        map.getPane('pane_gridr12_38').style.zIndex = 438;
        var layer_gridr12_38 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=561&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr12_38',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr12_38;
        map.createPane('pane_gridr13_39');
        map.getPane('pane_gridr13_39').style.zIndex = 439;
        var layer_gridr13_39 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=559&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr13_39',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr13_39;
        map.createPane('pane_gridr15_40');
        map.getPane('pane_gridr15_40').style.zIndex = 440;
        var layer_gridr15_40 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=557&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr15_40',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr15_40;
        map.createPane('pane_gridr16_41');
        map.getPane('pane_gridr16_41').style.zIndex = 441;
        var layer_gridr16_41 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=555&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr16_41',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr16_41;
        map.createPane('pane_gridr18_42');
        map.getPane('pane_gridr18_42').style.zIndex = 442;
        var layer_gridr18_42 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=625&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr18_42',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr18_42;
        map.createPane('pane_gridr21_43');
        map.getPane('pane_gridr21_43').style.zIndex = 443;
        var layer_gridr21_43 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=541&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr21_43',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr21_43;
        map.createPane('pane_gridr22_44');
        map.getPane('pane_gridr22_44').style.zIndex = 444;
        var layer_gridr22_44 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=539&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr22_44',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr22_44;
        map.createPane('pane_gridr23_45');
        map.getPane('pane_gridr23_45').style.zIndex = 445;
        var layer_gridr23_45 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=537&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr23_45',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr23_45;
        map.createPane('pane_gridr35_46');
        map.getPane('pane_gridr35_46').style.zIndex = 446;
        var layer_gridr35_46 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=535&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr35_46',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr35_46;
        map.createPane('pane_gridr36_47');
        map.getPane('pane_gridr36_47').style.zIndex = 447;
        var layer_gridr36_47 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=533&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr36_47',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr36_47;
        map.createPane('pane_gridr37_48');
        map.getPane('pane_gridr37_48').style.zIndex = 448;
        var layer_gridr37_48 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=531&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr37_48',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr37_48;
        map.createPane('pane_gridr41_49');
        map.getPane('pane_gridr41_49').style.zIndex = 449;
        var layer_gridr41_49 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=529&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr41_49',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr41_49;
        map.createPane('pane_gridr43_50');
        map.getPane('pane_gridr43_50').style.zIndex = 450;
        var layer_gridr43_50 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=527&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr43_50',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr43_50;
        map.createPane('pane_gridr44_51');
        map.getPane('pane_gridr44_51').style.zIndex = 451;
        var layer_gridr44_51 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=525&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr44_51',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr44_51;
        map.createPane('pane_gridr51_52');
        map.getPane('pane_gridr51_52').style.zIndex = 452;
        var layer_gridr51_52 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=523&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr51_52',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr51_52;
        map.createPane('pane_gridr55_53');
        map.getPane('pane_gridr55_53').style.zIndex = 453;
        var layer_gridr55_53 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=519&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr55_53',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr55_53;
        map.createPane('pane_gridr56_54');
        map.getPane('pane_gridr56_54').style.zIndex = 454;
        var layer_gridr56_54 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=517&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr56_54',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr56_54;
        map.createPane('pane_gridr62_55');
        map.getPane('pane_gridr62_55').style.zIndex = 455;
        var layer_gridr62_55 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=515&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr62_55',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr62_55;
        map.createPane('pane_gridr63_56');
        map.getPane('pane_gridr63_56').style.zIndex = 456;
        var layer_gridr63_56 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=513&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr63_56',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr63_56;
        map.createPane('pane_gridr64_57');
        map.getPane('pane_gridr64_57').style.zIndex = 457;
        var layer_gridr64_57 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=511&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr64_57',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr64_57;
        map.createPane('pane_gridr65_58');
        map.getPane('pane_gridr65_58').style.zIndex = 458;
        var layer_gridr65_58 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=509&x={x}&y={y}&z={z}', {
            pane: 'pane_gridr65_58',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridr65_58;
        map.createPane('pane_gridx36_59');
        map.getPane('pane_gridx36_59').style.zIndex = 459;
        var layer_gridx36_59 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=507&x={x}&y={y}&z={z}', {
            pane: 'pane_gridx36_59',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_gridx36_59;

        map.createPane('pane_southern_bug_class');
        map.getPane('pane_southern_bug_class').style.zIndex = 460;
        var layer_southern_bug_class = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=704&x={x}&y={y}&z={z}', {
            pane: 'pane_southern_bug_class',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_southern_bug_class;

        map.createPane('pane__60'); /* Ukraine border */
        map.getPane('pane__60').style.zIndex = 500;
        var layer__60 = L.tileLayer('https://abspatial.nextgis.com/api/component/render/tile?resource=623&x={x}&y={y}&z={z}', {
            pane: 'pane__60',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer__60;

        map.addLayer(layer__60);
        var baseMaps = {"OSM": layer_OSM_2,"Google Hybrid": layer_GoogleHybrid_1,"Dark Matter (retina)": layer_DarkMatterretina_0,};
		
		var OverLayers = {"Межі України": layer__60,};
		
		/*
		var OverLayers = {"Межі України": layer__60,"grid x36 - Депресії (поди) степової зони": layer_gridx36_59,"grid r65 - Внутрішньоконтинентальні слабо засолені алювіальні пасовища і сінокісні луки": layer_gridr65_58,"grid r64 - Напівпустельні солончаки": layer_gridr64_57,"grid r63 - Внутрішньоконтинентальні солончаки помірної зони": layer_gridr63_56,"grid r62 - Внутрішньоконтинентальні засолені степи": layer_gridr62_55,"grid r56 - Мокрі або вологі високотравні та папоротеві узлісся субальпійського поясу": layer_gridr56_54,"grid r55 - Мокрі або вологі високотравні та папоротеві узлісся рівнинних регіонів": layer_gridr55_53,"grid r51 - Термофільні узлісся на карбонатних грунтах": layer_gridr51_52,"grid r44 - Аркто-альпійські карбонатні луки": layer_gridr44_51,"grid r43 - Ацидофільні альпійські луки помірної зони": layer_gridr43_50,"grid r41 - Сніжники, вкриті рослинністю": layer_gridr41_49,"grid r37 - Мокрі або вологі оліготрофні луки помірної і бореальної зон": layer_gridr37_48,"grid r36 - Мокрі або вологі мезотрофні та евтрофні пасовища": layer_gridr36_47,"grid r35 - Мокрі або вологі мезотрофні та евтрофні сінокісні луки": layer_gridr35_46,"grid r23 - Гірські сінокісні луки": layer_gridr23_45,"grid r22 - Рівнинні та низькогірні сінокісні луки": layer_gridr22_44,"grid r21 - Мезофільні постійні пасовища рівнинних і гірських регіонів": layer_gridr21_43,"grid r18 - Петрофітні степи на карбонатних породах субатлантичних і субсередземноморських регіонів<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Європи з домінуванням багаторічників": layer_gridr18_42,"grid r16 - Петрофітні степи Центральної Європи і Карпат з домінуванням багаторічників": layer_gridr16_41,"grid r15 - Континентальні остепнені трав’яні і чагарничкові угруповання на відслоненнях крейди": layer_gridr15_40,"grid r13 - Рослинність з домінуванням криптогамних<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;і однорічних рослин на карбонатних і ультраосновних відслоненнях": layer_gridr13_39,"grid r12 - Рослинність з домінуванням криптогамних і однорічних рослин на силікатних відслоненнях": layer_gridr12_38,"grid r11 - Паннонські і Понтичні піщані степи": layer_gridr11_37,"grid r1q - Внутрішньоконтинентальні піщані наноси і дюни з трав’яними угрупованнями на силікатних пісках": layer_gridr1q_36,"grid r1p - Внутрішньоконтинентальні піщані угруповання на сухих кислих або нейтральних грунтах океанічних<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;і субконтинентальних регіонів": layer_gridr1p_35,"grid r1m - Рівнинні до низькогірних, сухі до мезофітних угруповання з домінуванням Nardus": layer_gridr1mNardus_34,"grid r1c - Пустельні степи": layer_gridr1c_33,"grid r1b - Континентальні сухі степи": layer_gridr1b_32,"grid r1a - Кальцифітні лучні степи з домінуванням багаторічників": layer_gridr1a_31,"x36 - Депресії (поди) степової зони": layer_x36_30,"r65 - Внутрішньоконтинентальні слабо засолені алювіальні пасовища і сінокісні луки": layer_r65_29,"r64 - Напівпустельні солончаки": layer_r64_28,"r63 - Внутрішньоконтинентальні солончаки помірної зони": layer_r63_27,"r62 - Внутрішньоконтинентальні засолені степи": layer_r62_26,"r56 - Мокрі або вологі високотравні та папоротеві узлісся субальпійського поясу": layer_r56_25,"r55 - Мокрі або вологі високотравні та папоротеві узлісся рівнинних регіонів": layer_r55_24,"r51 - Термофільні узлісся на карбонатних грунтах": layer_r51_23,"r44 - Аркто-альпійські карбонатні луки": layer_r44_22,"r43 - Ацидофільні альпійські луки помірної зони": layer_r43_21,"r37 - Мокрі або вологі оліготрофні луки помірної і бореальної зон": layer_r37_20,"r36 - Мокрі або вологі мезотрофні та евтрофні пасовища": layer_r36_19,"r35 - Мокрі або вологі мезотрофні та евтрофні сінокісні луки": layer_r35_18,"r23 - Гірські сінокісні луки": layer_r23_17,"r22 - Рівнинні та низькогірні сінокісні луки": layer_r22_16,"r21 - Мезофільні постійні пасовища рівнинних і гірських регіонів": layer_r21_15,"r18 - Петрофітні степи на карбонатних породах субатлантичних і субсередземноморських регіонів Європи<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;з домінуванням багаторічників": layer_r18_14,"r16 - Петрофітні степи Центральної Європи і Карпат з домінуванням багаторічників": layer_r16_13,"r15 - Континентальні остепнені трав’яні і чагарничкові угруповання на відслоненнях крейди": layer_r15_12,"r13 - Рослинність з домінуванням криптогамних і однорічних рослин на карбонатних<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;і ультраосновних відслоненнях": layer_r13_11,"r12 - Рослинність з домінуванням криптогамних і однорічних рослин на силікатних відслоненнях": layer_r12_10,"r11 - Паннонські і Понтичні піщані степи": layer_r11_9,"r1q - Внутрішньоконтинентальні піщані наноси і дюни з трав’яними угрупованнями на силікатних пісках": layer_r1q_8,"r1p - Внутрішньоконтинентальні піщані угруповання на сухих кислих або нейтральних грунтах океанічних<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;і субконтинентальних регіонів": layer_r1p_7,"r1m - Рівнинні до низькогірних, сухі до мезофітних угруповання з домінуванням Nardus": layer_r1mNardus_6,"r1c - Пустельні степи": layer_r1c_5,"r1b - Континентальні сухі степи": layer_r1b_4,"r1a - Кальцифітні лучні степи з домінуванням багаторічників": layer_r1a_3,}  
		*/
		
        L.control.layers(baseMaps, OverLayers).addTo(map);
        setBounds();
		
		map.attributionControl.addAttribution('| Created by <a href="https://abspatial.com" target="_blank">ABSpatial</a> |');
		
		
