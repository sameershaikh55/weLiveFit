import { SELECTED_OPTION } from "./type";
import Questions from "./data.json";

const initialState = {
	questionsData: Questions.Questions,
	selectedOptions: [],
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_OPTION:
			let selectedData1 = JSON.parse(localStorage.getItem("selectedData"));

			localStorage.setItem(
				"selectedData",
				JSON.stringify(
					[
						(selectedData1 !== null && [...selectedData1]) || [],
						action.payload,
					].flat()
				)
			);

			let selectedData = JSON.parse(localStorage.getItem("selectedData"));
			return {
				...state,
				selectedOptions: selectedData,
			};
		default:
			return state;
	}
};
export default Reducer;
