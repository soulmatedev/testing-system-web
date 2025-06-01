export const formatDate = (dateString?: string): string => {
	if (!dateString) return '';

	const cleanString = dateString.replace(' ', 'T').split('.')[0];
	const date = new Date(cleanString);

	if (isNaN(date.getTime())) return '';

	const adjustedDate = new Date(date.getTime() + 5 * 60 * 60 * 1000);

	const day = adjustedDate.getDate().toString().padStart(2, '0');
	const month = (adjustedDate.getMonth() + 1).toString().padStart(2, '0');
	const year = adjustedDate.getFullYear();
	const hours = adjustedDate.getHours().toString().padStart(2, '0');
	const minutes = adjustedDate.getMinutes().toString().padStart(2, '0');

	return `${day}-${month}-${year} ${hours}:${minutes}`;
};
