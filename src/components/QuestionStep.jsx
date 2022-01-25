import React from "react";
import Radio from "./buttons/RadioBtn";
import MultiBtn from "./buttons/MultiBtn";
import { connect } from "react-redux";

const QuestionStep = ({
	selectedOption,
	setSelectedOption,
	question,
	options,
	category,
	hint,
	selectedOptions,
	id,
	nextFunc,
}) => {
	let selectedData = JSON.parse(localStorage.getItem("selectedData"));

	function selectedOptionFunc(option) {
		setSelectedOption([option]);
		nextFunc([option], true);
	}

	function selectedMultiOptionFunc(option) {
		let filterEntries = selectedOption.filter((item2) => {
			return item2.id === option.id;
		});

		let filteredData = filterEntries.filter((item) => {
			return option.option === item.option;
		});

		if (filteredData.length) {
			let alreadyInRemovingIds =
				selectedOption.length &&
				selectedOption.filter((arrayElement) => {
					return arrayElement.id === option.id;
				});

			let alreadyInRemovingOptions =
				alreadyInRemovingIds.length &&
				alreadyInRemovingIds.filter((arrayElement) => {
					return arrayElement.option !== option.option;
				});

			setSelectedOption(alreadyInRemovingOptions);
		} else {
			setSelectedOption((prev) => {
				return [...prev, option];
			});
		}
	}

	return (
		<div data-aos="fade" className="mt-5">
			<h5>{question}</h5>
			<p className="f14">{hint}</p>

			{(category === "multiple" && (
				<div className="mt-4">
					{options.map((item, i) => {
						return (
							<div key={i}>
								<MultiBtn
									id={id}
									selectedOption={selectedOption}
									selectedOptionFunc={selectedMultiOptionFunc}
									option={item}
									selectedOptions={
										(selectedData !== null && selectedData) || selectedOptions
									}
									setSelectedOption={setSelectedOption}
								/>
							</div>
						);
					})}
				</div>
			)) || (
				<div className="mt-4">
					{options.map((item, i) => {
						return (
							<div key={i}>
								<Radio
									id={id}
									selectedOption={selectedOption}
									selectedOptionFunc={selectedOptionFunc}
									option={item}
									selectedOptions={
										(selectedData !== null && selectedData) || selectedOptions
									}
									setSelectedOption={setSelectedOption}
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		selectedOptions: state.Reducer.selectedOptions,
	};
};

export default connect(mapStatetoProps, null)(QuestionStep);
