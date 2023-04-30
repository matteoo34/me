import {Component} from "./Component.js";
import {Link} from "./Link.js";
import {Price} from "./Price.js";
import {Setup} from "./Setup.js";
import {Website} from "./Website.js";

Website.AMAZON_FR = new Website("amazon.fr", "assets/images/amazon_fr.png", "#231f20");
Website.AMAZON_DE = new Website("amazon.de", "assets/images/amazon_de.png", "#231f20");
Website.AMAZON_ES = new Website("amazon.es", "assets/images/amazon_es.png", "#231f20");
Website.TOPACHAT = new Website("topachat.com", "assets/images/topachat.png", "#0281bd");

const setup = new Setup([
	new Component("CPU", {
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
			new Link(Website.AMAZON_ES, "https://www.amazon.es/Intel-BX8071513700K-CPU-Core-i7-13700K/dp/B0BG6843GX"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Intel-BX8071513700K-CPU-Core-i7-13700K/dp/B0BG6843GX"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Intel-BX8071513700K-CPU-Core-i7-13700K/dp/B0BG6843GX"),
		],
	}),
	new Component("Motherboard", {
		image: "https://m.media-amazon.com/images/I/41Er4p78RML._AC_US256_.jpg",
		brand: "Asus",
		model: "ROG Strix Z790-F Gaming",
		description: "E-ATX • ATX • Wi-Fi",
		prices: [
			new Price(457.16, 8.00),
			new Price(421.60, 7.77),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/ASUS-STRIX-Z790-F-GAMING-WIFI/dp/B0BH94RXPC"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/ASUS-STRIX-Z790-F-GAMING-WIFI/dp/B0BH94RXPC"),
		],
	}),
	new Component("RAM", {
		image: "https://m.media-amazon.com/images/I/411hR8vGwRL._AC_US256_.jpg",
		brand: "Corsair",
		model: "Vengeance RGB PRO 32Gb (2x16Gb)",
		description: "DDR4 3600MHz • CL18 (18-22-22-42)",
		prices: [
			new Price(99.99, 0),
			new Price(83.90, 4.79),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Corsair-Vengeance-3600MHz-Performance-Optimis%C3%A9/dp/B082DGZJ9C"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wme_ddr4_puis_ref_est_in20000456.html"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Corsair-Vengeance-3600MHz-Performance-Optimis%C3%A9/dp/B082DGZJ9C"),
		],
	}),
	new Component("GPU", {
		image: "https://cdna.pcpartpicker.com/static/forever/images/product/877b6072fa719e4d7a6a03f14078d41f.256p.jpg",
		brand: "PowerColor",
		model: "Radeon RX 7900 XTX",
		description: "24Gb GDDR6 • 4K",
		prices: [
			new Price(1199.99, 0),
		],
		links: [
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wgfx_pcie_puis_ref_est_in20015859.html"),
		],
	}),
	new Component("SSD (OS)", {
		image: "https://m.media-amazon.com/images/I/31hO1ipOhrL._AC_US256_.jpg",
		brand: "Corsair",
		model: "MP600 PRO XT 1Tb M.2 NVMe Gen4",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 5800Mb",
		prices: [
			new Price(101.89, 4.82),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Corsair-Sequential-Speeds-7100MB-Density/dp/B09F5Z6BJ6"),
		],
	}),
	new Component("SSD", {
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		brand: "Corsair",
		model: "MP600 PRO XT 2Tb M.2 NVMe Gen4",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 6800Mb",
		prices: [
			new Price(169.99, 4.66),
		],
		links: [
			new Link(Website.AMAZON_ES, "https://www.amazon.es/Corsair-Velocidades-Secuencial-Escritura-Disipador/dp/B09F5X8ZMY"),
		],
	}),
	new Component("HDD", {
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		brand: "Seagate",
		model: "Barracuda 4Tb",
		description: "SATA III • 3.5\" • 5400 RPM",
		prices: [
			new Price(90.39, 0),
			new Price(89.99, 0),
		],
		links: [
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Seagate-St4000dmz04-Barracuda-Disque-Interne-Argent/dp/B07D9C7SQH"),
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Seagate-St4000dmz04-Barracuda-Disque-Interne-Argent/dp/B07D9C7SQH"),
		],
	}),
	new Component("PSU", {
		image: "https://m.media-amazon.com/images/I/41qguKNO1nL._AC_US256_.jpg",
		brand: "Corsair",
		model: "HX1000i",
		description: "Fully modular • 80+ Platinum",
		prices: [
			new Price(219.00, 9.68),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Corsair-Alimentation-Enti%C3%A8rement-Silencieuse-Hydrodynamique/dp/B0B4HJYZXC"),
		],
	}),
	new Component("Case", {
		image: "https://m.media-amazon.com/images/I/41y8mm4LplL._AC_US256_.jpg",
		brand: "Corsair",
		model: "Obsidian 500D RGB SE Black",
		description: "50cm x 23.7cm x 50.7cm • 3 LL120 RGB fans included",
		prices: [
			new Price(239.99, 0),
			new Price(216.41, 19.61),
		],
		links: [
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Corsair-Tempered-Aluminium-Commander-Included/dp/B07C46L1D8"),
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
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Logitech-Lightspeed-M%C3%A9canique-Progammables-contr%C3%B4le/dp/B07VV8R58C"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
		],
	}),
]);

setup.populate(table, total);