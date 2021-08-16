let tooltips = document.querySelectorAll('.tooltip');
for (let elem of tooltips)
	elem.addEventListener('click', function (event) {
		let helpData = elem.getAttribute('data-help');
		if (!help) {
			console.log('Not cool');
			return event.preventDefault();
		} else {
			let isLeftDisplay = new Boolean(
				document.documentElement.clientHeight - event.pageX <=
					document.documentElement.clientHeight / 2
			);
			let isTopDisplay = new Boolean(
				document.documentElement.clientWidth - event.pageY <=
					document.documentElement.clientWidth / 2
			);
			let helpDiv = document.createElement('div');
			helpDiv.innerText = helpData;
			helpDiv.style.width = helpDiv.style.height = '200px';
			helpDiv.style.zIndex = 9999;
			helpDiv.style.overflow = 'auto';
			helpDiv.style.border = '3px groove teal';
			helpDiv.style.textAlign = 'center';
			helpDiv.style.position = 'absolute';
			helpDiv.style.backgroundColor = 'sienna';
			moveAt(event.pageX, event.pageY);
			function moveAt(pageX, pageY) {
				if (isLeftDisplay) helpDiv.style.left = pageX - 100 + 'px';
				else helpDiv.style.left = pageX + 100 + 'px';
				if (isTopDisplay) helpDiv.style.top = pageY - 100 + 'px';
				else helpDiv.style.top = pageY + 100 + 'px';
			}
			document.documentElement.append(helpDiv);
			helpDiv.addEventListener('mouseout', function (event) {
				event.relatedTarget.addEventListener('click', () => helpDiv.remove());
			});
		}
	});
