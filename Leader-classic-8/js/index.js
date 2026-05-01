import { head } from "./header.js";
import { open, close, tapList, arrow } from "./burger.js";
import { productSlider } from "./sizes-slider.js";
import { riskLvl, setProgress } from "./selection.js";
// try {
// 	const headerFixed = new HeaderFixed({
// 		HEADER: "header",
// 		HEADER_FIXED: "header--fixed",
// 	});

// new BurgerMenu(
// 	{
// 		BURGER: "burger",
// 		BURGER_OPEN: "burger--open",
// 		HEADER_MENU: "header__menu",
// 		HEADER_MENU_OPEN: "header__menu--open",
// 		lABEL: {
// 			OPEN: "Открыть меню",
// 			CLOSE: "Закрыть меню",
// 		},
// 		PAGE_BODY: "page__body",
// 		PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
// 		MENU_LINK: "menu__link",
// 		BREAKPOINT: 992,
// 	},
// 	headerFixed,
// );
head();
productSlider();
riskLvl();

// } catch (error) {
// 	console.error(error);
// }
