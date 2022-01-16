import React, { useEffect } from "react";

const MultiBtn = ({
	selectedOption,
	selectedOptions,
	option,
	id,
	selectedOptionFunc,
	setSelectedOption,
}) => {
	const filteredIds =
		(selectedOption.length &&
			selectedOption.filter((prev) => prev.id === id)) ||
		[];

	const filteredId =
		(filteredIds.length &&
			filteredIds.filter((prev) => prev.option === option)) ||
		[];

	const filteredIdsOptions =
		(selectedOptions.length &&
			selectedOptions.filter((prev) => prev.id === id)) ||
		[];

	const filteredIdOptions =
		(filteredIdsOptions.length &&
			filteredIdsOptions.filter((prev) => prev.option === option)) ||
		[];

	useEffect(() => {
		if (filteredIdOptions.length) {
			setSelectedOption(filteredIdOptions);
		}
	}, []);

	return (
		<div
			onClick={() =>
				selectedOptionFunc({
					id,
					option,
				})
			}
			className={`${filteredId.length && "active_option"} ${
				filteredIdOptions.length && "active_option"
			} radio_option pointer w-100 text-center`}
		>
			{option}
		</div>
	);
};

export default MultiBtn;
