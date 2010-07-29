function mendeleyImport(msgEvent) {
	
	if (msgEvent.name !== "activate-mendeley-import")
		return;
	
	if (msgEvent.message === document.URL)
		document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.mendeley.com/min.php/bookmarklet');
}

safari.self.addEventListener("message", mendeleyImport, false);