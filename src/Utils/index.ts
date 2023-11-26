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

export const convertTo12HourFormat = (time: string): string => {
	const [hours, minutes] = time.split(":").map(Number);

	let period = "am";

	if (hours >= 12) {
		period = "pm";
	}

	const twelveHourFormat = (((hours + 11) % 12) + 1)
		.toString()
		.padStart(2, "0");

	return `${twelveHourFormat}:${minutes
		.toString()
		.padStart(2, "0")} ${period}`;
};
