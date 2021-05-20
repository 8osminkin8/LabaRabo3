
	var trigger=0, name, age, sex, Sky, education, mathematic, nlo, Ofilme, programming, bread; // обьявляем переменные которые понадобятся в ходе работы
		document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			document.getElementById("startTest").style = "display: none";
			do {
				name = prompt("Нужно ввести Нэйм");
			} while (!(/^([a-zA-Zа-яёА-ЯЁ])/.test(name)));
			do {
				age = parseInt(prompt("Сколько уже лет созерцаете на то , что вокруг Вас"));
			} while (!(/\d/.test(age)));
			do {
				sex = prompt("Укажите Ваш гендер");
			} while (!(/^([М]+|)$/.test(sex) || /^([Ж]+|)$/.test(sex)));
			do {
				Sky = prompt("Кол-во звезд на небе?")
			} while (!(/\d/.test(Sky)));

			education = confirm("Имеется ли у вас, так называемое ХАЙ ЭНДЬЮКЕЙШЕН?");
			mathematic = confirm("Вы знаете математику?");
			nlo = confirm("Верите в НЛО и тд и тп?");
			Ofilme = confirm("Сыграли бы главную роль в фильме Интерстеллар?");
			programming = confirm("Сударь(-ыня), умеете ли программы писать?");
			bread = confirm("Умеете ли Вы печь хлеб?");

			document.getElementById("education").setAttribute('disabled', 'disabled');
			document.getElementById("mathematic").setAttribute('disabled', 'disabled');
			document.getElementById("nlo").setAttribute('disabled', 'disabled');
			document.getElementById("Ofilme").setAttribute('disabled', 'disabled');
			document.getElementById("programming").setAttribute('disabled', 'disabled');
			document.getElementById("bread").setAttribute('disabled', 'disabled');
			writeToPage();
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#Sky").val(Sky)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#Sky").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("nlo").checked = nlo;
			document.getElementById("Ofilme").checked = Ofilme;
			document.getElementById("programming").checked = programming;
			document.getElementById("bread").checked = bread;
			trigger=1;
			myFunction();
		}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты с верой в НЛО и высшем
					//разрядом по пекарному делу".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && document.getElementById("programming").checked ==true)
		{
       		var text ='<p class="stroke">Вы нам подходите! Ура</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else {
        	var text ='<p class="stroke">Мы Вам перезвоним...</p>'
		x.innerHTML = text;
		}
		}
		}
