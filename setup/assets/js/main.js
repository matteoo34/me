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
				price: new Price(425.45, 4.61),
				link: new Link("https://www.amazon.es/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(444.32, 4.61),
				link: new Link("https://www.amazon.de/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(469.46, 0),
				link: new Link("https://www.amazon.fr/dp/B0BG6843GX"),
			}),
		],
		bestPrice: new Price(425.45, 4.61),
		target: null,
	}),
	new Component({
		type: Type.MOTHERBOARD,
		brand: Brand.ASUS,
		model: "ROG Strix Z690-F Gaming",
		description: "ATX • LGA 1700 • Wi-Fi",
		image: "https://m.media-amazon.com/images/I/51mQQ+7bWuL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(350.99, 9.90),
				link: new Link("https://www.amazon.de/dp/B09JSZZXD4"),
			}),
			new Sell({
				price: new Price(379.85, 8.00),
				link: new Link("https://www.amazon.fr/dp/B09JSZZXD4"),
			}),
			new Sell({
				price: new Price(380.00, 9.90),
				link: new Link("https://www.amazon.es/dp/B09JSZZXD4"),
			}),
		],
		bestPrice: new Price(350.99, 9.90),
		target: null,
	}),
	new Component({
		type: Type.WATERCOOLING,
		brand: Brand.BE_QUIET,
		model: "Pure Loop 360mm",
		image: "https://m.media-amazon.com/images/I/31SjTwL4oGL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(119.99, 9.90),
				link: new Link("https://www.amazon.de/dp/B08K3P1KRY"),
			}),
			new Sell({
				price: new Price(132.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_reliq_puis_ref_est_in20005600.html"),
			}),
			new Sell({
				price: new Price(136.36, 0),
				link: new Link("https://www.amazon.fr/dp/B08K3P1KRY"),
			}),
			new Sell({
				price: new Price(128.93, 9.90),
				link: new Link("https://www.amazon.es/dp/B08K3P1KRY"),
			}),
		],
		bestPrice: new Price(119.99, 9.90),
		target: null,
	}),
	new Component({
		type: Type.RAM,
		brand: Brand.CORSAIR,
		model: "Vengeance RGB PRO 32Gb (2x16Gb)",
		description: "DDR4 3600MHz • CL18 (18-22-22-42)",
		image: "https://m.media-amazon.com/images/I/411hR8vGwRL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(88.99, 0),
				link: new Link("https://www.amazon.fr/dp/B082DJ19CK"),
			}),
			new Sell({
				price: new Price(91.99, 4.79),
				link: new Link("https://www.amazon.de/dp/B082DGZJ9C"),
			}),
			new Sell({
				price: new Price(94.99, 4.74),
				link: new Link("https://www.amazon.es/dp/B082DJ19CK"),
			}),
		],
		bestPrice: new Price(88.99, 0),
		target: null,
	}),
	new Component({
		type: Type.GPU,
		brand: Brand.AMD,
		model: "Radeon RX 7900 XTX",
		description: "24Gb GDDR6 • 4K",
		image: "https://m.media-amazon.com/images/I/31q7quYSDvL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(1091.00, 0),
				link: new Link("https://shop-eu-fr.amd.com/amd-radeon-rx-7900-xtx-graphics"),
			}),
		],
		bestPrice: new Price(1077.00, 0),
		target: null,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 1Tb M.2 NVMe Gen4",
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
				price: new Price(105.99, 4.82),
				link: new Link("https://www.amazon.es/dp/B09F5Z6BJ6"),
			}),
		],
		bestPrice: new Price(93.99, 0),
		target: null,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 2Tb M.2 NVMe Gen4",
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
		target: null,
	}),
	new Component({
		type: Type.HDD,
		brand: Brand.SEAGATE,
		model: "Barracuda 4Tb",
		description: "3.5\" • SATA III • 5400 RPM",
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(81.95, 5.23),
				link: new Link("https://www.amazon.de/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(89.90, 0),
				link: new Link("https://www.amazon.fr/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(89.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
			}),
			new Sell({
				price: new Price(78.68, 11.52),
				link: new Link("https://www.amazon.fr/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(90.39, 0),
				link: new Link("https://www.amazon.fr/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(79.18, 12.56),
				link: new Link("https://www.amazon.es/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(80.97, 11.39),
				link: new Link("https://www.amazon.es/dp/B0713R3Y6F"),
			}),
		],
		bestPrice: new Price(81.95, 5.23),
		target: null,
	}),
	new Component({
		type: Type.PSU,
		brand: Brand.BE_QUIET,
		model: "Straight Power 11 1000W",
		description: "Modular • 80+ Platinum",
		image: "https://m.media-amazon.com/images/I/41UDBwjuXmL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(193.02, 9.90),
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
				price: new Price(202.34, 9.90),
				link: new Link("https://www.amazon.es/dp/B083SVLLCQ"),
			}),
		],
		bestPrice: new Price(193.02, 9.90),
		target: null,
	}),
	new Component({
		type: Type.CASE,
		brand: Brand.CORSAIR,
		model: "Obsidian 500D RGB SE",
		description: "50.01 x 23.7 x 50.7cm • 3 LL120 RGB fans included",
		image: "https://m.media-amazon.com/images/I/41y8mm4LplL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(216.41, 19.61),
				link: new Link("https://www.amazon.de/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(239.99, 0),
				link: new Link("https://www.amazon.fr/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(276.34, 0),
				link: new Link("https://www.amazon.es/dp/B07C46L1D8"),
			}),
		],
		bestPrice: new Price(216.41, 19.61),
		target: null,
	}),
	new Component({
		type: Type.KEYBOARD,
		brand: Brand.LOGITECH,
		model: "G815 LIGHTSYNC RGB",
		description: "AZERTY • GL Tactile switches",
		image: "https://m.media-amazon.com/images/I/4117+8ARx3L._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(158.49, 0),
				link: new Link("https://www.amazon.fr/dp/B07VTSZ63W"),
			}),
			new Sell({
				price: new Price(184.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
			}),
			new Sell({
				price: new Price(184.99, 0),
				link: new Link("https://www.amazon.fr/dp/B07VV8R58C"),
			}),
		],
		bestPrice: new Price(158.49, 0),
		target: 130,
	}),
]);

setup.populate(table, total, template);