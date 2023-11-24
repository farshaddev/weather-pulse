export const convertTimestampToDate = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
};

export const convertTimestampToTime = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);
	const time = date.toLocaleTimeString();
	return time;
};