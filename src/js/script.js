function include(url) {
	let script = document.createElement('script');
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

include(`src/js/modules/Slider/Slider.js`);
