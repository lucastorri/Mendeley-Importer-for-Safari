function mendeleyImport(msgEvent) {
	
	if (msgEvent.name !== "activate-mendeley-import")
		return;
	
	if (msgEvent.message === document.URL)
		document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).setAttribute('src','https://www.mendeley.com/minified/bookmarklet.js');
}

safari.self.addEventListener("message", mendeleyImport, false);
