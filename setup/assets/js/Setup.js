import {Component} from "./components/Component.js";

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

	/** @param {HTMLTableElement} table */
	table(table) {
		const body = table.lastElementChild;

		for (const component of this.#components) {
			const tr = template.content.querySelector("tr").cloneNode(true);

			tr.querySelector("td.type").textContent = component.getType();
			tr.querySelector("td.image img").src = component.getImage();
			tr.querySelector("td.model .name").textContent = `${component.getBrand()} ${component.getModel()}`;
			tr.querySelector("td.model .description").textContent = component.getDescription();

			const currentPrice = component.getCurrentPrice();

			if (currentPrice !== null) {
				const currentPriceDelivery = currentPrice.getDeliveryAmount();

				tr.querySelector("td.pricing .current").textContent = `${currentPrice.getAmount().toFixed(2)}€${currentPriceDelivery !== 0 ? ` (${currentPriceDelivery.toFixed(2)}€ delivery)` : ''}`;

				const minPrice = component.getMinimumPrice();
				const minPriceDelivery = minPrice.getDeliveryAmount();

				tr.querySelector("td.pricing .min").textContent = `Min: ${minPrice.getAmount().toFixed(2)}€${minPriceDelivery !== 0 ? ` (${minPriceDelivery.toFixed(2)}€ delivery)` : ''}`;

				const maxPrice = component.getMaximumPrice();
				const maxPriceDelivery = maxPrice.getDeliveryAmount();

				tr.querySelector("td.pricing .max").textContent = `Max: ${maxPrice.getAmount().toFixed(2)}€${maxPriceDelivery !== 0 ? ` (${maxPriceDelivery.toFixed(2)}€ delivery)` : ''}`;
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
	}
}