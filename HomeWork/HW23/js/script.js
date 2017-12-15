var allThemes = ['001', '002', '003', '004', '005', '217', '218', '219', '220', '221'];

window.onload = function(){
	var
		currentTheme = document.querySelector('.current-theme'),
	  changeTheme = document.querySelector('.change-theme');

	changeTheme.addEventListener('click', function() {
		var newThemeNo = allThemes.pop();
		currentTheme.href = 'http://www.csszengarden.com/' + newThemeNo + '/' + newThemeNo + '.css';

		allThemes.unshift(newThemeNo);
	});

/*1. Реализовать поиск DOM элементов по любому валидному селектору (примеры). При нахождении всех элементов, выделить первый из найденных.
Выделить нужно следующими стилями:
outline: 3px solid red; background-color: lightblue;
*/	
		var findButton = document.querySelector('.selector-find');
		var selector = document.querySelector('.selector');
		var next = document.querySelector('.selector-next');
		var prev = document.querySelector('.selector-prev');
		var parent = document.querySelector('.nav-top');
		var firstChildEl = document.querySelector('.nav-bottom');
		var nextSibling = document.querySelector('.nav-right');
		var prevSibling = document.querySelector('.nav-left');

		var allElements = [];
		var counter = 0;
		var currentElement;
		var parentElement;

		findButton.onclick = function() {
			var selectorQuery = selector.value.trim(); // trim - обрезает пробелы по бокам (слева и справа)
			if (!selectorQuery === '')
				return;

			allElements = document.querySelectorAll(selectorQuery);
			if (allElements.length) {
				currentElement = allElements[counter];
				currentElement.parentElement = allElements[counter];
				selectElement();
				next.disabled = !allElements[counter + 1];
			} else {
				alert('There is no elements by selector ' + selectorQuery);
			}
		};

		function selectElement() {
			currentElement.style.backgroundColor = 'lightblue';
			currentElement.style.outline = '3px solid red';
		}

		function unSelectElement() {
			currentElement.removeAttribute('style');
		}

		next.addEventListener('click', function(){
			unSelectElement();

			if (allElements[counter + 1]) {
				counter++;
				currentElement = allElements[counter];
				selectElement();

				next.disabled = !allElements[counter + 1];
				prev.disabled = !allElements[counter - 1];
			}
		});

		prev.addEventListener('click', function(){
			unSelectElement();

			if (allElements[counter - 1]) {
				counter--;
				currentElement = allElements[counter];
				selectElement();

				next.disabled = !allElements[counter + 1];
				prev.disabled = !allElements[counter - 1];
			}
		});

		parent.addEventListener('click', function(){
			unSelectElement();
			next.disabled;
			prev.disabled;

			if (allElements[counter - 1]) {
				counter--;
				currentElement = currentElement.parentElement;
				selectElement();
				

				if (currentElement) {	
				parent.disabled = !currentElement.parentElement;
				}
				
			}
		});

	
	};	