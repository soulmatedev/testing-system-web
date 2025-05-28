export const formatDate = (dateString?: string): string => {
	if (!dateString) return '';

	const cleanString = dateString.replace(' ', 'T').split('.')[0];

	const date = new Date(cleanString);

	if (isNaN(date.getTime())) return '';

	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return `${day}-${month}-${year} ${hours}:${minutes}`;
};
