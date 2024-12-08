export {};

/**
 * @typedef {Object} Data
 * @property {Category[]} categories
 * @property {Technology[]} technologies
 * @property {Experience[]} professionalExperiences
 * @property {Experience[]} personalExperiences
 */

/**
 * @typedef {Object} Category
 * @property {Number} id
 * @property {String} name
 */

/**
 * @typedef {Object} Technology
 * @property {Number} id
 * @property {String} name
 * @property {String} iconSrc
 */

/**
 * @typedef {Object} Experience
 * @property {String} name
 * @property {String} [description]
 * @property {Project[]} projects
 */

/**
 * @typedef {Object} Project
 * @property {String} name
 * @property {String} [url]
 * @property {String} [sourceUrl]
 * @property {String} description
 * @property {Number[]} categoryIds
 * @property {Number[]} technologyIds
 */

/**
 * @type {Data}
 */
const data = await (await fetch("data.json")).json();

/**
 * @type {HTMLTemplateElement}
 */
const template = document.body.querySelector("#project-template");

/**
 * @type {HTMLDivElement}
 */
const professionalExperiencePlaceholder = document.body.querySelector("#professional-experience-placeholder");

/**
 * @type {HTMLDivElement}
 */
const personalExperiencePlaceholder = document.body.querySelector("#personal-experience-placeholder");

// Professional experiences
{
	const professionalExperienceFragment = document.createDocumentFragment();

	for (const experience of data.professionalExperiences) {
		const experienceElement = getExperienceElement(experience);

		professionalExperienceFragment.appendChild(experienceElement);
	}

	professionalExperiencePlaceholder.replaceWith(professionalExperienceFragment);
}

// Personal experiences
{
	const personalExperienceFragment = document.createDocumentFragment();

	for (const experience of data.personalExperiences) {
		const experienceElement = getExperienceElement(experience);

		personalExperienceFragment.appendChild(experienceElement);
	}

	personalExperiencePlaceholder.replaceWith(personalExperienceFragment);
}

/**
 * @param {Experience} experience
 */
function getExperienceElement(experience) {
	/**
	 * @type {HTMLElement}
	 */
	// @ts-ignore
	const experienceContainerElement = template.content.querySelector(".experience-container").cloneNode(true);

	/**
	 * @type {HTMLHeadingElement}
	 */
	const experienceNameElement = experienceContainerElement.querySelector(".experience-name");

	/**
	 * @type {HTMLElement}
	 */
	const experienceDescriptionElement = experienceContainerElement.querySelector(".experience-description");

	/**
	 * @type {HTMLUListElement}
	 */
	const experienceProjectListElement = experienceContainerElement.querySelector(".experience-project-list");

	experienceNameElement.textContent = experience.name;

	if (experience.description) {
		experienceDescriptionElement.innerHTML = experience.description;
	}
	else {
		experienceDescriptionElement.remove();
	}

	for (const project of experience.projects) {
		/**
		 * @type {HTMLLIElement}
		 */
		// @ts-ignore
		const projectListItemElement = template.content.querySelector(".project-list-item").cloneNode(true);

		/**
		 * @type {HTMLUListElement}
		 */
		const projectCategoryListItemElement = projectListItemElement.querySelector(".project-category-list");

		/**
		 * @type {HTMLDivElement}
		 */
		const projectUrlContainerElement = projectListItemElement.querySelector(".project-url-container");

		/**
		 * @type {HTMLLinkElement}
		 */
		const projectUrlElement = projectUrlContainerElement.querySelector(".project-url");

		/**
		 * @type {HTMLSpanElement}
		 */
		const projectDescriptionElement = projectListItemElement.querySelector(".project-description");

		/**
		 * @type {HTMLUListElement}
		 */
		const projectTechnologyListElement = projectListItemElement.querySelector(".project-technology-list");

		for (const categoryId of project.categoryIds) {
			const category = data.categories[categoryId];

			/**
			 * @type {HTMLLIElement}
			 */
			// @ts-ignore
			const categoryListItem = template.content.querySelector(".category-list-item").cloneNode(true);

			/**
			 * @type {HTMLSpanElement}
			 */
			const categoryNameElement = categoryListItem.querySelector(".category-name");

			categoryNameElement.textContent = category.name;

			projectCategoryListItemElement.appendChild(categoryListItem);
		}

		if (project.url) {
			projectUrlElement.href = project.url;
			projectUrlElement.textContent = project.name;
		}
		else {
			/**
			 * @type {HTMLSpanElement}
			 */
			// @ts-ignore
			const projectNameElement = template.content.querySelector(".project-name").cloneNode(true);

			projectNameElement.textContent = project.name;

			projectUrlElement.replaceWith(projectNameElement);
		}

		if (project.sourceUrl) {
			/**
			 * @type {HTMLLinkElement}
			 */
			// @ts-ignore
			const projectSourceUrlElement = template.content.querySelector(".project-source-url").cloneNode(true);

			projectSourceUrlElement.href = project.sourceUrl;

			projectUrlContainerElement.appendChild(projectSourceUrlElement);
		}

		projectDescriptionElement.textContent = project.description;

		for (const technologyId of project.technologyIds) {
			const technology = data.technologies[technologyId];

			/**
			 * @type {HTMLLIElement}
			 */
			// @ts-ignore
			const technologyListItem = template.content.querySelector(".technology-list-item").cloneNode(true);

			/**
			 * @type {HTMLImageElement}
			 */
			const technologyIconElement = technologyListItem.querySelector(".technology-icon");

			technologyIconElement.src = technology.iconSrc;
			technologyIconElement.alt = technology.name;
			technologyIconElement.title = technology.name;

			projectTechnologyListElement.appendChild(technologyListItem);
		}

		experienceProjectListElement.appendChild(projectListItemElement);
	}

	return experienceContainerElement;
}