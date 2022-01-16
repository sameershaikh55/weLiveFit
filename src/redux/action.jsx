import { SELECTED_OPTION } from "./type";

export const selectedOptionsFunc = (data) => {
	return {
		type: SELECTED_OPTION,
		payload: data,
	};
};
