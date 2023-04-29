import {Link} from "../Link.js";
import {Price} from "../Price.js";

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
	#priceHistory;

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
	 * @param {Price[]} options.priceHistory
	 * @param {Link[]} options.links
	 */
	constructor(type, {image, brand, model, description, priceHistory, links}) {
		this.#type = type;
		this.#image = image;
		this.#brand = brand;
		this.#model = model;
		this.#description = description;
		this.#priceHistory = priceHistory;
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
	getPriceHistory() {
		return this.#priceHistory;
	}

	/** @param {Price[]} priceHistory */
	setPriceHistory(priceHistory) {
		this.#priceHistory = priceHistory;
	}

	/** @returns {Link[]} */
	getLinks() {
		return this.#links;
	}

	/** @param {Link[]} links */
	setLinks(links) {
		this.#links = links;
	}

	/** @returns {?Price} */
	getCurrentPrice() {
		return this.#priceHistory.at(-1) ?? null;
	}

	/** @returns {Price} */
	getMinimumPrice() {
		return this.#priceHistory.reduce((a, b) => a.getTotalAmount() < b.getTotalAmount() ? a : b);
	}

	/** @returns {Price} */
	getMaximumPrice() {
		return this.#priceHistory.reduce((a, b) => a.getTotalAmount() > b.getTotalAmount() ? a : b);
	}
}