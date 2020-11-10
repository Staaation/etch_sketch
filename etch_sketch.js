const container = document.querySelector('#container');
	const button = document.createElement('button');
	button.setAttribute('id','reset');
	button.textContent = "Reset";
	button.classList.add('button');
	container.appendChild(button);
	container.setAttribute('style', 'border: 2px solid black');
	
	var i,j,size;
	size = window.prompt("How big would you like this square? (Max is 100)")
	function compile(size){
		for(i = 0; i < size; i++){
			const row = document.createElement('div');
			row.classList.add('container_row');
			for(j = 0; j < size; j++){
				const col = document.createElement('div');
				col.classList.add('floated_box');
				row.appendChild(col);
			}
			container.appendChild(row);
		}
	}
	compile(size);
	const boxes = document.querySelectorAll('.floated_box');

	function build(boxes){
		
		boxes.forEach(box => box.addEventListener("mouseover", function(event) {
			event.target.style.background = "blue";
			//setTimeout(function() {
				//event.target.style.background = "";
			//}, 500);
		}, false));
	}
	build(boxes);

	button.addEventListener('click', () => {
		reset();
	});

	function reset() {
		//boxes.forEach(box => box.style.background = "");
		const cols = document.querySelectorAll('.floated_box');
		cols.forEach(col => col.classList.remove('floated_box'));
		//cols.classList.remove('floated_box');
		const rows = document.querySelectorAll('.container_row');
		rows.forEach(row => row.classList.remove('container_row'));
		size = window.prompt("How big would you like this square? (Max is 100)");
		compile(size);
		const boxes = document.querySelectorAll('.floated_box');
		build(boxes);
	}