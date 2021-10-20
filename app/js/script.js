//Hamburger animation

let hamburger = document.querySelector('.header__hamburger');
let sideMenu = document.querySelector('.side-menu');
let menuOpen=false;

hamburger.addEventListener('click', ()=>{
    if(!menuOpen){
        hamburger.classList.add('active');
        menuOpen=true;
		sideMenu.classList.add('active');
    }
    else{
        hamburger.classList.remove('active');
        menuOpen=false;
		sideMenu.classList.remove('active');
    }
});

//Tabs
var tabs = document.querySelectorAll(".tab-link li");
var tab_wraps = document.querySelectorAll(".tab_wrap");

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

	})
});


//Swiper

var swiper = new Swiper('.swiper-container-main', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	delay: 5500,
	disableOnInteraction: false,
	},
});

var swiper = new Swiper('.swiper-container-members', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	},
});


// Text auto-reziste

let textArea = document.querySelector(".tell");

textArea.addEventListener("keyup", e => {
    textArea.style.height = "2.4em";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
});