import {Component} from "./Component.js";
import {Price} from "./Price.js";

export class Setup {
	/**
	 * @private
	 * @type {Component[]}
	 */
	#components;

	/** @param {Component[]} components */
	constructor(components) {
		this.#components = components;
	}

	/** @returns {Component[]} */
	getComponents() {
		return this.#components;
	}

	/** @param {Component[]} components */
	setComponents(components) {
		this.#components = components;
	}

	/**
	 * @param {HTMLTableElement} table
	 * @param {HTMLDivElement} total
	 * @param {HTMLTemplateElement} template
	 */
	populate(table, total, template) {
		const body = table.lastElementChild;
		const totalPrice = new Price(0, 0);

		for (const component of this.#components) {
			const tr = template.content.querySelector("tr").cloneNode(true);

			tr.querySelector("td.type").textContent = component.getType();
			tr.querySelector("td.image img").src = component.getImage();
			tr.querySelector("td.model .name").textContent = `${component.getBrand()} ${component.getModel()}`;
			tr.querySelector("td.model .description").textContent = component.getDescription();

			for (const sell of component.getSells()) {
				const price = sell.getPrice();
				const link = sell.getLink();
				const website = link.getWebsite();
				const a = template.content.querySelector(".sell").cloneNode(true);

				a.href = link.getURL();
				a.querySelector("img").src = website.getLogo();
				a.querySelector("img").alt = website.getName();
				a.querySelector(".total").textContent = `${price.getTotalAmount().toFixed(2)}€`;

				if (price.getDeliveryAmount() !== 0) {
					a.querySelector(".delivery").textContent = `including ${price.getDeliveryAmount().toFixed(2)}€ delivery`;
				}

				if (sell === component.getBestSell()) a.classList.add("best");

				tr.querySelector(".sells div").appendChild(a);
			}

			body.appendChild(tr);
		}

		total.querySelector(".amount").textContent = `Total: ${totalPrice.getTotalAmount().toFixed(2)}€`;
		total.querySelector(".delivery").textContent = `including ${totalPrice.getDeliveryAmount().toFixed(2)}€ delivery`;
	}
}