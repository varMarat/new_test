var mas = document.getElementsByClassName('slider_img');
var text = document.getElementById('www');
var arr = ['очки','покемон','планета'];

var num = 0;
var num2 = 0;

mas[0].style.display = 'block';
text.innerHTML = arr[num2];

function func1(){
	mas[num].style.display = 'none';
	num=num+1;

	if(num>=mas.length){
		num=0;
		mas[num].style.display = 'block';
	}
	mas[num].style.display = 'block';
	func3();
}

function func2(){
	mas[num].style.display = 'none';
	num=num-1;
	if(num<0){
		num=mas.length-1;
		mas[num].style.display = 'block';
	}
	mas[num].style.display = 'block';
	func4();
}
// функции для изменения текста
function func3(){
	num2=num2+1;
	text.innerHTML = arr[num2];
	if(num2>=arr.length){
		num2=0;
		text.innerHTML = arr[num2];
	}
	
}
function func4(){
	num2=num2-1;
	text.innerHTML = arr[num2];
	if(num2<0){
		num2=arr.length-1;
		text.innerHTML = arr[num2];
	}
}

// бургер меню
var burger = document.getElementById('burger');
var burgerMenu = document.getElementById('burger_menu');
var i =0;
burger.addEventListener('click', () => {
	if(i==0){
	burgerMenu.style.display='block';
	i+=1;
	}else if(i==1){
		burgerMenu.style.display='none';
		i=0;
	}
});

