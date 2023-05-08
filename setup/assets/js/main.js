import {Brand} from "./Brand.js";
import {Component} from "./Component.js";
import {Link} from "./Link.js";
import {Price} from "./Price.js";
import {Sell} from "./Sell.js";
import {Setup} from "./Setup.js";
import {Type} from "./Type.js";

const setup = new Setup([
	new Component({
		type: Type.CPU,
		brand: Brand.INTEL,
		model: "Core i7-13700K 3.4GHz",
		description: "LGA 1700 • 16 cores",
		image: "https://m.media-amazon.com/images/I/31Byi3U8YDL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(419.89, 4.61),
				link: new Link("https://www.amazon.es/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(441.90, 4.61),
				link: new Link("https://www.amazon.de/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(472.26, 0),
				link: new Link("https://www.amazon.fr/dp/B0BG6843GX"),
			}),
		],
		bestPrice: new Price(419.89, 4.61),
		target: 430,
		certainty: true,
	}),
	new Component({
		type: Type.MOTHERBOARD,
		brand: Brand.ASUS,
		model: "ROG Strix Z790-F Gaming",
		description: "ATX • LGA 1700 • Wi-Fi",
		image: "https://m.media-amazon.com/images/I/41Er4p78RML._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(424.90, 7.77),
				link: new Link("https://www.amazon.de/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(433.49, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_cm_1700_puis_ref_est_in20014869.html"),
			}),
			new Sell({
				price: new Price(461.30, 8.00),
				link: new Link("https://www.amazon.fr/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(474.43, 9.90),
				link: new Link("https://www.amazon.es/dp/B0BH94RXPC"),
			}),
		],
		bestPrice: new Price(424.90, 7.77),
		target: 440,
	}),
	new Component({
		type: Type.WATERCOOLING,
		brand: Brand.CORSAIR,
		model: "iCUE H150i RGB Elite",
		description: "360mm • LGA 1700",
		image: "https://m.media-amazon.com/images/I/41V6orrMThL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(172.89, 15.90),
				link: new Link("https://www.amazon.de/dp/B09YCHFXQL"),
			}),
			new Sell({
				price: new Price(184.32, 9.90),
				link: new Link("https://www.amazon.fr/dp/B09YCHFXQL"),
			}),
		],
		bestPrice: new Price(172.89, 15.90),
		target: 180,
	}),
	new Component({
		type: Type.RAM,
		brand: Brand.CORSAIR,
		model: "Vengeance 32Gb (2x16Gb)",
		description: "DDR5 5600MHz • CL36 • Black",
		image: "https://m.media-amazon.com/images/I/41Q8eUJZndL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(103.99, 0),
				link: new Link("https://www.amazon.fr/dp/B09NCNF2ZQ"),
			}),
			new Sell({
				price: new Price(102.99, 4.64),
				link: new Link("https://www.amazon.de/dp/B09NCNF2ZQ"),
			}),
			new Sell({
				price: new Price(102.99, 4.65),
				link: new Link("https://www.amazon.de/dp/B0BD4V2Q42"),
			}),
			new Sell({
				price: new Price(103.89, 4.63),
				link: new Link("https://www.amazon.de/dp/B0BD4R49FK"),
			}),
			new Sell({
				price: new Price(106.34, 4.64),
				link: new Link("https://www.amazon.de/dp/B09NCPTVX5"),
			}),
			new Sell({
				price: new Price(113.99, 0),
				link: new Link("https://www.amazon.fr/dp/B0B15DC288"),
			}),
			new Sell({
				price: new Price(112.99, 4.65),
				link: new Link("https://www.amazon.de/dp/B0B15DC288"),
			}),
			new Sell({
				price: new Price(114.99, 4.64),
				link: new Link("https://www.amazon.es/dp/B09NCNF2ZQ"),
			}),
		],
		bestPrice: new Price(103.99, 0),
		target: 110,
	}),
	new Component({
		type: Type.GPU,
		brand: Brand.AMD,
		model: "Radeon RX 7900 XTX",
		description: "24Gb GDDR6 • 4K",
		image: "https://m.media-amazon.com/images/I/31q7quYSDvL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(1087.00, 0),
				link: new Link("https://shop-eu-fr.amd.com/amd-radeon-rx-7900-xtx-graphics"),
			}),
		],
		bestPrice: new Price(1069.00, 0),
		target: 1087,
		certainty: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 1Tb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 5800Mb",
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(93.99, 0),
				link: new Link("https://www.amazon.fr/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(93.99, 4.82),
				link: new Link("https://www.amazon.de/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(103.98, 4.82),
				link: new Link("https://www.amazon.es/dp/B09F5Z6BJ6"),
			}),
		],
		bestPrice: new Price(93.99, 0),
		target: 100,
		certainty: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 2Tb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 6800Mb",
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(172.85, 4.66),
				link: new Link("https://www.amazon.de/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(194.88, 0),
				link: new Link("https://www.amazon.fr/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(199.00, 4.66),
				link: new Link("https://www.amazon.es/dp/B09F5X8ZMY"),
			}),
		],
		bestPrice: new Price(172.85, 4.66),
		target: 180,
		certainty: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO LPX 500Gb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 3700Mb",
		image: "https://m.media-amazon.com/images/I/31tEZgyV0vL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(72.96, 0),
				link: new Link("https://www.amazon.fr/dp/B09Q2NL53M"),
			}),
			new Sell({
				price: new Price(74.99, 4.60),
				link: new Link("https://www.amazon.es/dp/B09Q2NL53M"),
			}),
		],
		bestPrice: new Price(72.96, 0),
		target: 70,
	}),
	new Component({
		type: Type.HDD,
		brand: Brand.SEAGATE,
		model: "Barracuda 4Tb",
		description: "3.5\" • SATA III • 5400 RPM",
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(72.90, 5.40),
				link: new Link("https://www.amazon.de/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(75.74, 5.23),
				link: new Link("https://www.amazon.es/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(85.30, 0),
				link: new Link("https://www.amazon.fr/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(85.30, 0),
				link: new Link("https://www.amazon.fr/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(88.70, 0),
				link: new Link("https://www.amazon.fr/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(77.04, 12.56),
				link: new Link("https://www.amazon.es/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(83.66, 6.00),
				link: new Link("https://www.amazon.de/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(89.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
			}),
			new Sell({
				price: new Price(94.99, 5.40),
				link: new Link("https://www.amazon.es/dp/B07D9C7SQH"),
			}),
		],
		bestPrice: new Price(72.90, 5.40),
		target: 80,
	}),
	new Component({
		type: Type.PSU,
		brand: Brand.BE_QUIET,
		model: "Straight Power 11 1000W",
		description: "Modular • 80+ Platinum",
		image: "https://m.media-amazon.com/images/I/41UDBwjuXmL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(193.02, 6.00),
				link: new Link("https://www.amazon.de/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(209.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ali_puis_ref_est_in20000189.html"),
			}),
			new Sell({
				price: new Price(209.99, 0),
				link: new Link("https://www.amazon.fr/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(200.41, 9.90),
				link: new Link("https://www.amazon.es/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(202.34, 9.90),
				link: new Link("https://www.amazon.es/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(202.04, 13.58),
				link: new Link("https://www.amazon.de/dp/B078WZSN2W"),
			}),
		],
		bestPrice: new Price(193.02, 6.00),
		target: 200,
	}),
	new Component({
		type: Type.CASE,
		brand: Brand.CORSAIR,
		model: "Obsidian 500D RGB SE",
		description: "50.01 x 23.7 x 50.7cm • 3 LL120 RGB fans included",
		image: "https://m.media-amazon.com/images/I/41y8mm4LplL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(244.00, 9.90),
				link: new Link("https://www.amazon.fr/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(237.80, 19.61),
				link: new Link("https://www.amazon.de/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(249.00, 61.29),
				link: new Link("https://www.amazon.es/dp/B07C46L1D8"),
			}),
		],
		bestPrice: new Price(216.41, 19.61),
		target: 240,
		certainty: true,
	}),
	new Component({
		type: Type.KEYBOARD,
		brand: Brand.LOGITECH,
		model: "G815 LIGHTSYNC RGB",
		description: "AZERTY • GL Tactile switches",
		image: "https://m.media-amazon.com/images/I/4117+8ARx3L._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(163.46, 0),
				link: new Link("https://www.amazon.fr/dp/B07VV8R58C"),
			}),
			new Sell({
				price: new Price(163.64, 6.84),
				link: new Link("https://www.amazon.de/dp/B07VV8R58C"),
			}),
			new Sell({
				price: new Price(184.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
			}),
		],
		bestPrice: new Price(163.46, 0),
		target: 170,
		certainty: true,
	}),
]);

setup.populate(table, total, template);