export class Website {
	/**
	 * @private
	 * @type {String}
	 */
	#name;

	/**
	 * @private;
	 * @type {String}
	 */
	#logo;

	/**
	 * @private;
	 * @type {String}
	 */
	#color;

	/**
	 * @param {String} name
	 * @param {String} logo
	 * @param {String} color
	 */
	constructor(name, logo, color) {
		this.#name = name;
		this.#logo = logo;
		this.#color = color;
	}

	/** @returns {String} */
	getName() {
		return this.#name;
	}

	/** @param {String} name */
	setName(name) {
		this.#name = name;
	}

	/** @returns {String} */
	getLogo() {
		return this.#logo;
	}

	/** @param {String} logo */
	setLogo(logo) {
		this.#logo = logo;
	}

	/** @returns {String} */
	getColor() {
		return this.#color;
	}

	/** @param {String} color */
	setColor(color) {
		this.#color = color;
	}
}