	document.getElementById('name-form').addEventListener('submit', function(e) {
		e.preventDefault();
		const name = document.getElementById('username').value.trim();
		if (name) {
			document.getElementById('main-container').innerHTML = `
				<div class="wish-section">
					<h1>Joyeux Noël, <span class="username">${name}</span> !</h1>
					<p>Que la magie de Noël t'apporte bonheur et joie !</p>
				</div>
			`;
		}
	});