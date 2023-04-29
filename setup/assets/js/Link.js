import {Website} from "./Website.js";

export class Link {
	/**
	 * @private
	 * @type {Website}
	 */
	#website;

	/**
	 * @private
	 * @type {String}
	 */
	#url;

	/**
	 * @param {Website} website
	 * @param {String} url
	 */
	constructor(website, url) {
		this.#website = website;
		this.#url = url;
	}

	/** @returns {Website} */
	getWebsite() {
		return this.#website;
	}

	/** @param {Website} website */
	setWebsite(website) {
		this.#website = website;
	}

	/** @returns {String} */
	getURL() {
		return this.#url;
	}

	/** @param {String} url */
	setURL(url) {
		this.#url = url;
	}
}