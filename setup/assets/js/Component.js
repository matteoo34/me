import {Link} from "./Link.js";
import {Price} from "./Price.js";

export class Component {
	/**
	 * @private
	 * @type {String}
	 */
	#type;

	/**
	 * @private
	 * @type {String}
	 */
	#image;

	/**
	 * @private
	 * @type {String}
	 */
	#brand;

	/**
	 * @private
	 * @type {String}
	 */
	#model;

	/**
	 * @private
	 * @type {String}
	 */
	#description;

	/**
	 * @private
	 * @type {Price[]}
	 */
	#prices;

	/**
	 * @private
	 * @type {?Price}
	 */
	#bestPrice;

	/**
	 * @private
	 * @type {Link[]}
	 */
	#links;

	/**
	 * @param {String} type
	 * @param {Object} options
	 * @param {String} options.image
	 * @param {String} options.brand
	 * @param {String} options.model
	 * @param {String} options.description
	 * @param {Price[]} options.prices
	 * @param {?Price} [options.bestPrice]
	 * @param {Link[]} options.links
	 */
	constructor(type, {image, brand, model, description, prices, bestPrice = null, links}) {
		this.#type = type;
		this.#image = image;
		this.#brand = brand;
		this.#model = model;
		this.#description = description;
		this.#bestPrice = bestPrice;
		this.#prices = prices;
		this.#links = links;
	}

	/** @returns {String} */
	getType() {
		return this.#type;
	}

	/** @param {String} type */
	setType(type) {
		this.#type = type;
	}

	/** @returns {String} */
	getImage() {
		return this.#image;
	}

	/** @param {String} image */
	setImage(image) {
		this.#image = image;
	}

	/** @returns {String} */
	getBrand() {
		return this.#brand;
	}

	/** @param {String} brand */
	setBrand(brand) {
		this.#brand = brand;
	}

	/** @returns {String} */
	getModel() {
		return this.#model;
	}

	/** @param {String} model */
	setModel(model) {
		this.#model = model;
	}

	/** @returns {String} */
	getDescription() {
		return this.#description;
	}

	/** @param {String} description */
	setDescription(description) {
		this.#description = description;
	}

	/** @returns {Price[]} */
	getPrices() {
		return this.#prices;
	}

	/** @param {Price[]} prices */
	setPrices(prices) {
		this.#prices = prices;
	}

	/** @returns {?Price} */
	getBestPrice() {
		return this.#bestPrice;
	}

	/** @param {?Price} bestPrice */
	setBestPrice(bestPrice) {
		this.#bestPrice = bestPrice;
	}

	/** @returns {Link[]} */
	getLinks() {
		return this.#links;
	}

	/** @param {Link[]} links */
	setLinks(links) {
		this.#links = links;
	}

	/** @returns {Price} */
	getMinimumPrice() {
		return this.#prices.reduce((a, b) => a.getTotalAmount() < b.getTotalAmount() ? a : b);
	}
}