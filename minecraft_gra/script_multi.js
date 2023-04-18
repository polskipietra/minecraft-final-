const btn1 = document.querySelector('.create');
const btn2 = document.querySelector('.delete');
const worlds = document.querySelector('.worlds');

function create(name) {
	const worldElement = document.createElement('section');
	const worldName = document.createElement('h2');
	const worldImage = document.createElement('div');
	const checkBox = document.createElement('input');
	worlds.append(worldElement);
	worldElement.classList.add('looks');
	worldElement.append(worldImage);
	worldImage.classList.add('image');
	worldElement.append(worldName);
	worldName.textContent = name;
	checkBox.type = 'checkbox';
	worldElement.append(checkBox);
}
function check() {
	const name = prompt('podaj nazwę serwera:');
	if (name == '') {
		alert('podaj nazwe świata');
		const name = prompt('podaj nazwę świata:');
	} else {
		create(name);
    }
}

function deleteWorld() {
	const deleteCheckbox = document.querySelector("input[type='checkbox']:checked");
	if (deleteCheckbox) {
		let deleteSection = deleteCheckbox.parentNode;
		// console.dir(deleteSection.parentNode);
		deleteSection.parentNode.removeChild(deleteSection);
	}
	// worlds.remove(deleteSection);
}
btn1.addEventListener('click', check);
btn2.addEventListener('click', deleteWorld);

// setTimeout(() => {
// 	create('testowy');
// }, 1000);
