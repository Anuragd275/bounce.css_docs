function copy() {
	var copiedText = document.getElementById("copyThis");

  copiedText.select();
  copiedText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copiedText.value);

	console.log("changing to new")
	document.getElementById("copyButton").innerText = "Copied!";
	
	setTimeout(function() {
		document.getElementById("copyButton").innerText = "Copy";
		console.log("change back")
	}, 3000);	
}

if (window.innerWidth < 700) {
	document.getElementById('view').innerText = 'Demo';
	document.getElementById('use').innerText = 'Use';
}