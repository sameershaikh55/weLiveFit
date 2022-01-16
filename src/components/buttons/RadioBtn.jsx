import React, { useEffect } from "react";

const Radio = ({
	selectedOption,
	option,
	id,
	selectedOptionFunc,
	selectedOptions,
	setSelectedOption,
}) => {
	const filteredIds =
		selectedOptions.length && selectedOptions.filter((prev) => prev.id === id);

	const filteredId =
		(filteredIds.length &&
			filteredIds.filter((prev) => prev.option === option)) ||
		[];

	useEffect(() => {
		if (filteredId.length) {
			setSelectedOption(filteredId);
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
			className={`${
				selectedOption.length &&
				selectedOption[0].option === option &&
				"active_option"
			} radio_option pointer w-100 text-center`}
		>
			{option}
		</div>
	);
};

export default Radio;
