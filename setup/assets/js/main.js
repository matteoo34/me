import {Brand} from "./Brand.js";
import {Component} from "./Component.js";
import {Link} from "./Link.js";
import {Price} from "./Price.js";
import {Sell} from "./Sell.js";
import {Setup} from "./Setup.js";
import {Type} from "./Type.js";

/** @type {Setup} */
const setup = new Setup([
	/* new Component("CPU", {
		image: "https://m.media-amazon.com/images/I/31Byi3U8YDL._AC_US256_.jpg",
		brand: "Intel",
		model: "Core i7-13700K 3.4GHz",
		description: "LGA 1700 • 16 cores",
		prices: [
			new Price(468.46, 0),
			new Price(444.32, 4.61),
			new Price(425.45, 4.61),
		],
		links: [
			new Link(Website.AMAZON_ES, "https://www.amazon.es/dp/B0BG6843GX"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/dp/B0BG6843GX"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B0BG6843GX"),
		],
	}),
	new Component("Motherboard", {
		image: "https://m.media-amazon.com/images/I/51mQQ+7bWuL._AC_US256_.jpg",
		brand: "Asus",
		model: "ROG Strix Z690-F Gaming",
		description: "ATX • LGA 1700 • Wi-Fi",
		prices: [
			// new Price(457.16, 8.00),
			// new Price(421.60, 7.77),
			new Price(350.99, 9.90),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/dp/B09JSZZXD4"),
		],
	}),
	new Component("Watercooling", {
		image: "https://m.media-amazon.com/images/I/31SjTwL4oGL._AC_US256_.jpg",
		brand: "be quiet!",
		model: "Pure Loop 360mm",
		prices: [
			new Price(119.99, 9.90),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/dp/B08K3P1KRY"),
		],
	}),
	new Component("RAM", {
		image: "https://m.media-amazon.com/images/I/411hR8vGwRL._AC_US256_.jpg",
		brand: "Corsair",
		model: "Vengeance RGB PRO 32Gb (2x16Gb)",
		description: "DDR4 3600MHz • CL18 (18-22-22-42)",
		prices: [
			new Price(88.99, 0),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B082DJ19CK"),
		],
	}),
	new Component("GPU", {
		image: "https://m.media-amazon.com/images/I/31q7quYSDvL._AC_US256_.jpg",
		brand: "AMD",
		model: "Radeon RX 7900 XTX",
		description: "24Gb GDDR6 • 4K",
		prices: [
			new Price(1091.00, 0),
		],
		bestPrice: new Price(1077.00, 0),
		links: [
			new Link(Website.AMD, "https://shop-eu-fr.amd.com/amd-radeon-rx-7900-xtx-graphics"),
		],
	}),
	new Component("SSD 1 (OS)", {
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		brand: "Corsair",
		model: "MP600 PRO XT 1Tb M.2 NVMe Gen4",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 5800Mb",
		prices: [
			new Price(93.99, 0),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B09F5Z6BJ6"),
		],
	}),
	new Component("SSD 2", {
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		brand: "Corsair",
		model: "MP600 PRO XT 2Tb M.2 NVMe Gen4",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 6800Mb",
		prices: [
			new Price(172.85, 4.66),
		],
		bestPrice: new Price(169.99, 4.66),
		links: [
			new Link(Website.AMAZON_ES, "https://www.amazon.es/dp/B09F5X8ZMY"),
		],
	}), */
	new Component({
		type: Type.HDD,
		brand: Brand.SEAGATE,
		model: "Barracuda 4Tb",
		description: "3.5\" • SATA III • 5400 RPM",
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(89.99, 0),
				link: new Link("https://www.topachat.com"),
			}),
			new Sell({
				price: new Price(90.39, 0),
				link: new Link("https://www.amazon.fr"),
			}),
			new Sell({
				price: new Price(83.23, 5.23),
				link: new Link("https://www.amazon.de"),
			}),
		],
		bestPrice: new Price(73.23, 5.23),
		target: 80,
		// prices: [
		// 	new Price(90.39, 0),
		// 	new Price(89.99, 0),
		// 	new Price(83.23, 5.23),
		// ],
		// links: [
		// 	new Link(Website.AMAZON_DE, "https://www.amazon.de/dp/B0713R3Y6F"),
		// 	new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
		// 	new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B07D9C7SQH"),
		// 	new Link(Website.AMAZON_ES, "https://www.amazon.es/dp/B0713R3Y6F"),
		// ],
	}),
	/* new Component("PSU", {
		image: "https://m.media-amazon.com/images/I/41UDBwjuXmL._AC_US256_.jpg",
		brand: "be quiet!",
		model: "Straight Power 11 1000W",
		description: "Modular • 80+ Platinum",
		prices: [
			new Price(193.02, 9.90),
			new Price(209.99, 0),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/dp/B083SVLLCQ"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ali_puis_ref_est_in20000189.html"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B083SVLLCQ"),
		],
	}),
	new Component("Case", {
		image: "https://m.media-amazon.com/images/I/41y8mm4LplL._AC_US256_.jpg",
		brand: "Corsair",
		model: "Obsidian 500D RGB SE",
		description: "50.01 x 23.7 x 50.7cm • 3 LL120 RGB fans included",
		prices: [
			new Price(216.41, 19.61),
			new Price(239.99, 0),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/dp/B07C46L1D8"),
			new Link(Website.AMAZON_ES, "https://www.amazon.es/dp/B07C46L1D8"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B07C46L1D8"),
		],
	}),
	new Component("Keyboard", {
		image: "https://m.media-amazon.com/images/I/4117+8ARx3L._AC_US256_.jpg",
		brand: "Logitech",
		model: "G815 LIGHTSYNC RGB",
		description: "AZERTY • GL Tactile switches",
		prices: [
			new Price(184.99, 0),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/dp/B07VV8R58C"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
		],
	}), */
]);

setup.populate(table, total, template);