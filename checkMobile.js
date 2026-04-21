const avScreenW = window.screen.width
const avScreenH = window.screen.height
let mobile
let horisontal = false
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || avScreenW < 1024) {
	let a = document.createElement('link')
	a.rel='stylesheet'
	if(avScreenH>avScreenW){
		a.href='css/mstyleVertical.css'
		}else{
			a.href='css/mstyleHorisontal.css'
			horisontal = true
			}
	document.getElementsByTagName('head')[0].appendChild(a)
	mobile = true
	}else{	
		let a=document.createElement('link')
		a.rel='stylesheet'
		a.href='css/style.css'
		document.getElementsByTagName('head')[0].appendChild(a)
		mobile = false
		}
