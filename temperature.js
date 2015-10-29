
 var first = document.querySelector('#original');
 var result = document.querySelector('#converted');


if (window.Worker) { //check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("worker.js");
       

	first.onchange = function() {
	  myWorker.postMessage([first.value]); //sending message as array to the worker
	  console.log('Message posted to worker '+first.value);
	};


	myWorker.onmessage = function(e) {
                console.log(e);
		result.textContent = e.data;
		console.log('Message received from worker '+e.data);
                converted.innerHTML = e.data;

	};
}

