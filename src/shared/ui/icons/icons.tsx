import React from 'react';

/**
 * Инлайновые иконки из макета «Soulmate Redesign».
 * Наследуют цвет через `currentColor`, поэтому оттенок задаётся
 * в CSS-модуле родителя, а не пропсами.
 */

export const SearchIcon = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
	>
		<circle cx="7" cy="7" r="4.6" />
		<path d="M10.5 10.5 14 14" />
	</svg>
);

export const PlusIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
	>
		<path d="M10 4v12M4 10h12" />
	</svg>
);

export const PencilIcon = () => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
	>
		<path d="M11 2.5 13.5 5 5.5 13H3v-2.5z" />
	</svg>
);

export const TrashIcon = () => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
	>
		<path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9.5h6.6L12 4" />
	</svg>
);

export const ChevronRightIcon = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M6.75 4 11.75 9l-5 5" />
	</svg>
);
