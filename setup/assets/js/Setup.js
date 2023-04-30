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
	 */
	populate(table, total) {
		const body = table.lastElementChild;
		const totalPrice = new Price(0, 0);

		for (const component of this.#components) {
			const tr = template.content.querySelector("tr").cloneNode(true);

			tr.querySelector("td.type").textContent = component.getType();
			tr.querySelector("td.image img").src = component.getImage();
			tr.querySelector("td.model .name").textContent = `${component.getBrand()} ${component.getModel()}`;
			tr.querySelector("td.model .description").textContent = component.getDescription();

			if (component.getPrices().length !== 0) {
				const minPrice = component.getMinimumPrice();
				const minPriceDelivery = minPrice.getDeliveryAmount();

				tr.querySelector("td.pricing .amount").textContent = `${minPrice.getTotalAmount().toFixed(2)}€`;

				if (minPriceDelivery !== 0) {
					tr.querySelector("td.pricing .delivery").textContent = `including ${minPriceDelivery.toFixed(2)}€ delivery`;
				}

				totalPrice.setAmount(totalPrice.getAmount() + minPrice.getAmount());
				totalPrice.setDeliveryAmount(totalPrice.getDeliveryAmount() + minPrice.getDeliveryAmount());
			}

			const links = tr.querySelector("td.links div");

			for (const link of component.getLinks()) {
				const website = link.getWebsite();

				const a = template.content.querySelector(".link").cloneNode(true);
				const img = a.querySelector("img");

				a.href = link.getURL();
				a.style.backgroundColor = website.getColor();
				img.src = website.getLogo();
				img.alt = website.getName();

				links.appendChild(a);
			}

			body.appendChild(tr);
		}

		total.querySelector(".amount").textContent = `Total: ${totalPrice.getTotalAmount().toFixed(2)}€`;
		total.querySelector(".delivery").textContent = `including ${totalPrice.getDeliveryAmount().toFixed(2)}€ delivery`;
	}
}