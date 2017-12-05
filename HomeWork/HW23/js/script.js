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
		var wrapper = document.querySelectorAll('.page-wrapper');
		var ZenIdElements = document.querySelectorAll('[id^="zen"]');
		var header = document.querySelectorAll('header');
		var h1 = document.querySelectorAll('header h1');
		var h2 = document.querySelectorAll('header>h2');
		var h3 = document.querySelectorAll('[id^="zen"]>h3');
		var firstP = document.querySelectorAll('[id^="zen"]>p');
		var abbr = document.querySelectorAll('abbr');
		var links = document.querySelectorAll('a');
		var footerLinks = document.querySelectorAll('footer a');
		var aside = document.querySelectorAll('.sidebar');
		var designClassElements = document.querySelectorAll('div[class^="design"]');
		var asideH3 = document.querySelectorAll('div[class^="design"]+h3');
		var asideNav = document.querySelectorAll('div[class^="design"]>nav');
		var asideLists = document.querySelectorAll('.sidebar li');

		function findElement (element){
			for (var i = 0; i < element.length; i++) {
				element[0].style.backgroundColor = 'lightblue';
				element[0].style.outline = '3px solid red';
			}	
		}
		
		findElement(wrapper);
		findElement(ZenIdElements);
		findElement(header);
		findElement(h1);
		findElement(h2);
		findElement(h3);
		findElement(firstP);
		findElement(abbr);
		findElement(links);
		findElement(footerLinks);
		findElement(aside);
		findElement(designClassElements);
		findElement(asideNav);
		findElement(asideH3);
		findElement(asideLists);

		/*2. Сделать возможным переход по найденным в предыдущем задании элементам, 
		используя кнопки Next и Previous. При переходе на следующий элемент - снимаем 
		выделение с предыдущего и ставим на тот, на который уже перешли. Если нет элементов 
		впереди - кнопка Next должна быть неактивна, если сзади, то Previous также должна
		иметь атрибут disabled.*/

/*		var inputSelector = document.getElementsByClassName('selector').value;
		var findButton = document.getElementsByClassName('selector-find');
		findElement(document.querySelectorAll(findButton));
  		findButton.onclick = function
  	NextButton.onclick = function(click, findElement(document.querySelectorAll(findButton)) ) {
    	
  };*/

	
	
	// Enter your code here 
};
