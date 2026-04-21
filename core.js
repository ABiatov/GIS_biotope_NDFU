'use string'
//=====================================================================
//                       STANDART FUNCTION
//=====================================================================
function elemID(a){
	return document.getElementById(a);
	}  
function changeClass(elem, oldclass, newclass){
	document.getElementById(elem).classList.remove(oldclass)
	document.getElementById(elem).classList.add(newclass)
	}
function newElem(elem, cssID, cssCLASS, parent){
	let a = document.createElement(elem)
	a.id = cssID
	a.setAttribute("class", cssCLASS)
    elemID(parent).appendChild(a)
	}
//=====================================================================
//                       DESIGN FUNCTION
//=====================================================================
function userDeviceCheck (){
	const screenH = document.documentElement.clientHeight
	const screenW = document.documentElement.clientWidth
	sizeElem ()
	textFromElem ()
	
	function sizeElem (){
		if(mobile){
			if(!horisontal){												// mobile - variable from 'checkMobile.js'
				elemID('pnlLayer').style.height = screenH-200 + 'px'
				elemID('pnlLayerContent').style.
										height = screenH-200-65 + 'px'
				elemID('pnlInfo').style.height = screenH-50 + 'px'
				elemID('pnlPDF').style.height = screenH-50 + 'px'
				elemID('map').style.height = 60 + '%'
				}else{
					elemID('pnlLayer').style.height = screenH-100 + 'px'
					elemID('pnlLayerContent').style.
										height = screenH-100-65 + 'px'
					elemID('pnlInfo').style.height = screenH-90 + 'px'
					elemID('pnlPDF').style.height = screenH-50 + 'px'
					elemID('pnlPDF').style.width = screenW-10 + 'px'
					elemID('map').style.height = 40 + '%'			
					}
			}else{
				elemID('pnlLayer').style.height = screenH-50 + 'px'
				elemID('pnlLayerContent').style.
											height = screenH-120 + 'px'
				elemID('pnlInfo').style.height = screenH-60 + 'px'
				elemID('pnlPDF').style.height = screenH-50 + 'px'
				elemID('map').style.height = 100 + '%'
				}
			}
	function textFromElem (){
		if(mobile){																// mobile - variable from 'checkMobile.js'
			elemID('radioDarkText').innerHTML = 'Dark'
			elemID('radioGoogleText').innerHTML = 'ESRI'
			elemID('radioOSMText').innerHTML = 'OSM'
			}else{
				elemID('radioDarkText').innerHTML = 
												'Dark Matter (retina)'
				elemID('radioGoogleText').innerHTML = 'ESRI Satellite'
				elemID('radioOSMText').innerHTML = 'OpenStreetMap'
				elemID('pnlTopText').innerHTML = 
											'Трав’яні біотопи України'	
				}
		}
	}
function createLayersList (){
	createLayersListElements ()
	createLayersListTitle ()
	createLayersListClass ()
	createLayersListResult ()
	FIXMENewTypeLayers ()
	
	function createLayersListElements (){
		for (i=0; i<vegArr.length; i++){
			newElem('div', 'grid'+vegArr[i][0], 
										'icoGrid', 'pnlLayerContent')
			newElem('div', 'pix'+vegArr[i][0], 
										'icoPix', 'pnlLayerContent')	
			newElem('div', 'info'+vegArr[i][0], 
										'icoInfo', 'pnlLayerContent')	
			newElem('div', 'text'+vegArr[i][0], 
									'layerElemText', 'pnlLayerContent')
			newElem('div', 'sep'+vegArr[i][0], 
											'sep', 'pnlLayerContent')
			}
		}
	function createLayersListTitle (){
		for (i=0; i<vegArr.length; i++){
			elemID('grid'+vegArr[i][0]).title = 'Сіткова карта'
			elemID('pix'+vegArr[i][0]).title = 'Прогнозоване поширення'
			elemID('info'+vegArr[i][0]).title = 'Інформація про шар'
			}
		}
	function createLayersListClass (){
		for (i=0; i<vegArr.length; i++){
			elemID('grid'+vegArr[i][0]).classList.add('icoGridOff')
			elemID('pix'+vegArr[i][0]).classList.add('icoPixOff')
			}
		}
	function createLayersListResult (){
		for (i=0; i<vegArr.length; i++){
			elemID('text'+vegArr[i][0]).innerHTML = vegArr[i][0] +
												' - ' + vegArr[i][1]
			}
		}
	function FIXMENewTypeLayers () {
		changeClass('grid000', 'visOn', 'visOff')	
		elemID('text000').innerHTML = vegArr[30][1]	
		elemID('pix'+vegArr[30][0]).title = 
							'Результат автоматизованого деширування'
		}
	}
function visionElem(){
	elemID('pnlTopInfo').onclick = function(){
		changeClass('pnlAbout', 'visOff', 'visOn')
		}
	elemID('btnAboutClose').onclick = function(){
		changeClass('pnlAbout', 'visOn', 'visOff')
		}
	elemID('pnlMenu').onclick = function(){
		changeClass('pnlLayer', 'visOff', 'visOn')
		changeClass('pnlInfo', 'visOn', 'visOff')
		}	
	elemID('btnClosepnlLayer').onclick = function(){
		changeClass('pnlLayer', 'visOn', 'visOff')
		changeClass('pnlInfo', 'visOn', 'visOff')
		elemID('map').style.height = 100 + '%'
		map.invalidateSize()
		}
	elemID('btnClosepnlInfo').onclick = function(){
		changeClass('pnlInfo', 'visOn', 'visOff')
		}
	elemID('btnClosepnlPDF').onclick = function(){
		changeClass('pnlPDF', 'visOn', 'visOff')
		changeClass('btnClosepnlPDF', 'visOn', 'visOff')
		}
	}
//=====================================================================
//                	 	 LEAFLET CUSTOMS
//=====================================================================
let map = L.map('map')
map.attributionControl.addAttribution(Basel.attr)							// Basel - variable from 'data.js'
let leafDark = L.tileLayer(Basel.dark.url, 
							{attribution: Basel.dark.attr,}).addTo(map)
let leafSat = L.tileLayer(Basel.sat.url, 
							{attribution: Basel.sat.attr,})
let leafOSM = L.tileLayer(Basel.osm.url, 
							{attribution: Basel.osm.attr,})
let leafBorder = L.tileLayer(Basel.border.url).addTo(map)
function setViewLeaflet (){
	if(mobile){
		map.setView([45, 32], 3)
		}else{
			map.setView([50, 25], 5)
			}
	}
function zoomLeaflet (){
	elemID('btnZoomIn').onclick = ()=> map.zoomIn ()
	elemID('btnZoomOut').onclick = ()=> map.zoomOut ()
	elemID('btnZoomHome').onclick = ()=> setViewLeaflet ()
	}
function changeBaseMaps (){
	elemID('radioDarkText').onclick = function(){
		leafBorder.remove(map)
		leafDark.addTo(map)
		leafSat.remove(map)
		leafOSM.remove(map)
		leafBorder.addTo(map)
		changeClass('radioDarkText', 'radioOff', 'radioOn')
		changeClass('radioGoogleText', 'radioOn', 'radioOff')
		changeClass('radioOSMText', 'radioOn', 'radioOff')
		}
	elemID('radioGoogleText').onclick = function(){
		leafBorder.remove(map)
		leafDark.remove(map)
		leafSat.addTo(map)
		leafOSM.remove(map)
		leafBorder.addTo(map)
		changeClass('radioDarkText', 'radioOn', 'radioOff')
		changeClass('radioGoogleText', 'radioOff', 'radioOn')
		changeClass('radioOSMText', 'radioOn', 'radioOff')
		}
	elemID('radioOSMText').onclick = function(){
		leafBorder.remove(map)
		leafDark.remove(map)
		leafSat.remove(map)
		leafOSM.addTo(map)
		leafBorder.addTo(map)
		changeClass('radioDarkText', 'radioOn', 'radioOff')
		changeClass('radioGoogleText', 'radioOn', 'radioOff')
		changeClass('radioOSMText', 'radioOff', 'radioOn')
		}
	}
//=====================================================================
//                	  VIEW BOTANICAL DATA IN MAP
//=====================================================================
function viewGrid (){
	appToAllBtnGrid ()
	
	function checkBtnGrid(elem,grid){
		elemID(elem).onclick = function(){
			if(elemID(elem).classList.contains('icoGridOff')){
				changeClass(elem, 'icoGridOff', 'icoGridOn')
				grid.addTo(map)
				}else{
					changeClass(elem, 'icoGridOn', 'icoGridOff')
					grid.remove(map)
					}
			}
		}
	function appToAllBtnGrid (){
		for (i=0; i<vegArr.length; i++){
			checkBtnGrid('grid' + vegArr[i][0],vegArr[i][3])
			}
		}
} 
function viewPix (){
	appToAllBtnPix ()
	
	function checkBtnPix(elem,raster){
		elemID(elem).onclick = function(){
			if(elemID(elem).classList.contains('icoPixOff')){
				changeClass(elem, 'icoPixOff', 'icoPixOn')
				raster.addTo(map)
				}else{
					changeClass(elem, 'icoPixOn', 'icoPixOff')
					raster.remove(map)
					}
			}
		}
	function appToAllBtnPix (){
		for (i=0; i<vegArr.length; i++){
			checkBtnPix('pix' + vegArr[i][0],vegArr[i][4])
			}
		}
}
function viewInfo (){
	appToAllBtnInfo ()
	
	function checkBtnInfo(elem,info,pdf){
		elemID(elem).onclick = function(){
			elemID('pnlInfoContent').innerHTML = info
			newElem('div', 'btnOpenPDF', 'btnOpenPDF', 'pnlInfoContent')
			newElem('div', 'divisWidth', 'divisWidth', 'pnlInfoContent')		
			changeClass('pnlInfo', 'visOff', 'visOn')
			elemID('btnOpenPDF').innerHTML = 'Детальніше (pdf)'
			elemID('framePDF').src = pdf		
			elemID('btnOpenPDF').onclick = function(){
				changeClass('pnlPDF', 'visOff', 'visOn')
				changeClass('btnClosepnlPDF', 'visOff', 'visOn')
				}
			}
		}
	function appToAllBtnInfo (){
		for (i=0; i<vegArr.length; i++){
			checkBtnInfo('info' + vegArr[i][0],
											vegArr[i][2], vegArr[i][5])
			}
		}	
	}
//=====================================================================
//							RUN FUNCTIONS
//=====================================================================	
userDeviceCheck ()
createLayersList ()
visionElem()
changeBaseMaps ()
setViewLeaflet ()
zoomLeaflet ()
viewGrid ()
viewPix ()
viewInfo ()
