import {CPU} from "./components/CPU.js";
import {Motherboard} from "./components/Motherboard.js";
import {RAM} from "./components/RAM.js";
import {GPU} from "./components/GPU.js";
import {SSD} from "./components/SSD.js";
import {HDD} from "./components/HDD.js";
import {Keyboard} from "./components/Keyboard.js";
import {Link} from "./Link.js";
import {Price} from "./Price.js";
import {Setup} from "./Setup.js";
import {Website} from "./Website.js";

Website.AMAZON_FR = new Website("amazon.fr", "assets/images/amazon_fr.png", "#231f20");
Website.AMAZON_DE = new Website("amazon.de", "assets/images/amazon_de.png", "#231f20");
Website.AMAZON_ES = new Website("amazon.es", "assets/images/amazon_es.png", "#231f20");
Website.TOPACHAT = new Website("topachat.com", "assets/images/topachat.png", "#0281bd");

const setup = new Setup([
	new CPU({
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
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Intel-BX8071513700K-CPU-Core-i7-13700K/dp/B0BG6843GX"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Intel-BX8071513700K-CPU-Core-i7-13700K/dp/B0BG6843GX"),
			new Link(Website.AMAZON_ES, "https://www.amazon.es/Intel-BX8071513700K-CPU-Core-i7-13700K/dp/B0BG6843GX"),
		],
	}),
	new Motherboard({
		image: "https://m.media-amazon.com/images/I/41Er4p78RML._AC_US256_.jpg",
		brand: "Asus",
		model: "ROG Strix Z790-F Gaming",
		description: "E-ATX • ATX • Wi-Fi",
		prices: [
			new Price(457.16, 8.00),
			new Price(421.60, 7.77),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/ASUS-STRIX-Z790-F-GAMING-WIFI/dp/B0BH94RXPC"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/ASUS-STRIX-Z790-F-GAMING-WIFI/dp/B0BH94RXPC"),
		],
	}),
	new RAM({
		image: "https://m.media-amazon.com/images/I/411hR8vGwRL._AC_US256_.jpg",
		brand: "Corsair",
		model: "Vengeance RGB PRO 32Gb (2x16Gb)",
		description: "DDR4 3600MHz • CL18",
		prices: [
			new Price(99.99, 0),
			new Price(83.90, 4.79),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Corsair-Vengeance-3600MHz-Performance-Optimis%C3%A9/dp/B082DGZJ9C"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Corsair-Vengeance-3600MHz-Performance-Optimis%C3%A9/dp/B082DGZJ9C"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wme_ddr4_puis_ref_est_in20000456.html"),
		],
	}),
	new GPU({
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
	new SSD({
		image: "https://m.media-amazon.com/images/I/31tEZgyV0vL._AC_US256_.jpg",
		brand: "Corsair",
		model: "MP600 PRO LPX 500Gb NVMe M.2",
		description: "PCIe x4 • Read 7100Mb • Write 6800Mb",
		prices: [
			new Price(69.86, 0),
			new Price(68.89, 4.60),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Corsair-MP600-500GB-NVMe-PCIe/dp/B09Q2NL53M"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Corsair-MP600-500GB-NVMe-PCIe/dp/B09Q2NL53M"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20012313.html"),
		],
	}),
	new HDD({
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		brand: "Seagate",
		model: "Barracuda 4Tb",
		description: "SATA III • 3.5\" • 5400 RPM",
		prices: [
			new Price(90.39, 0),
			new Price(89.99, 0),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Seagate-St4000dmz04-Barracuda-Disque-Interne-Argent/dp/B07D9C7SQH"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Seagate-St4000dmz04-Barracuda-Disque-Interne-Argent/dp/B07D9C7SQH"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
		],
	}),
	new Keyboard({
		image: "https://m.media-amazon.com/images/I/4117+8ARx3L._AC_US256_.jpg",
		brand: "Logitech",
		model: "G815 LightSync RGB",
		description: "AZERTY • GL Tactile switches",
		prices: [
			new Price(184.99, 0),
		],
		links: [
			new Link(Website.AMAZON_FR, "https://www.amazon.fr/Logitech-Lightspeed-M%C3%A9canique-Progammables-contr%C3%B4le/dp/B07VV8R58C"),
			new Link(Website.AMAZON_DE, "https://www.amazon.de/Logitech-Lightspeed-M%C3%A9canique-Progammables-contr%C3%B4le/dp/B07VV8R58C"),
			new Link(Website.TOPACHAT, "https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
		],
	}),
]);

setup.populate(table, total);