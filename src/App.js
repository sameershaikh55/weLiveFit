import logo from "./assets/logo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { useEffect, useState } from "react";

// IMPORTING ANIMATIONS
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORTING FIREBASE
// import { db } from "./firebase";

// STEPS
import StepOne from "./components/StepOne";
import { connect } from "react-redux";
import { selectedOptionsFunc } from "./redux/action";

// QUESTION
import QuestionStep from "./components/QuestionStep";
import CoachesResults from "./components/CoachesResults";

function App({ questionsData, selectedOptionsFunc, selectedOptions }) {
	// const [coaches, setCoaches] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);

	// // FOR PERCENTAGE
	useEffect(() => {
		AOS.init({
			once: true,
		});

		// const getPostsFromFirebase = [];
		// const subscriber = db.collection("coaches").onSnapshot((querySnapshot) => {
		// 	querySnapshot.forEach((doc) => {
		// 		getPostsFromFirebase.push({
		// 			...doc.data(), //spread operator
		// 			key: doc.id, // `id` given to us by Firebase
		// 		});
		// 	});
		// 	setCoaches(getPostsFromFirebase);
		// });
		// 	// return cleanup function
		// 	return () => subscriber();
	}, []); // empty dependencies array => useEffect only called once

	let activeStep = JSON.parse(localStorage.getItem("currentStep"));

	// STEPS DATA
	const stepsData = [<StepOne nextFunc={nextFunc} />];

	for (let i = 0; i < questionsData.length; i++) {
		stepsData.push(
			<QuestionStep
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				id={questionsData[i].id}
				question={questionsData[i].question}
				options={questionsData[i].options}
				category={questionsData[i].category}
				hint={questionsData[i].hint}
			/>
		);
	}

	const totalSteps = stepsData.length;
	let perStepPercentage = 100 / totalSteps;
	const [currentStep, setCurrentStep] = useState({
		precentage: 0,
		step: 1,
	});

	// STATE DESTRUCTURE
	// const { step, precentage } = currentStep;
	const { step, precentage } =
		(activeStep !== null && activeStep) || currentStep;

	const previousFunc = () => {
		setSelectedOption(selectedOptions);

		let updatedStep = {
			precentage: precentage - perStepPercentage,
			step: step - 1,
		};

		setCurrentStep(updatedStep);

		localStorage.setItem("currentStep", JSON.stringify(updatedStep));
	};

	function nextFunc(data) {
		if (selectedOption.length) {
			selectedOptionsFunc(data);
			setSelectedOption([]);
		}

		if (step !== stepsData.length + 1) {
			let updatedStep = {
				precentage: precentage + perStepPercentage,
				step: step + 1,
			};

			setCurrentStep(updatedStep);
			localStorage.setItem("currentStep", JSON.stringify(updatedStep));
		}
	}

	return (
		<>
			{(step !== 10 && (
				<div className="form_container my-3">
					<div className="container-fluid">
						{/* LOGO START */}
						<img className="logo_container" src={logo} alt="" />
						{/* LOGO END */}

						{/* FORM CONTAINER START */}
						<div className="form_inner_container">
							{/* STEPPER HEADER START */}
							{step !== 1 && (
								<div className="stepper_header row gx-5 align-items-center">
									<button onClick={previousFunc} className="col-2">
										Prev
									</button>
									<div className="col-8">
										<div
											className="progress"
											style={{
												boxShadow:
													(precentage !== 0 &&
														"1px 1px 4px rgb(51, 209, 137)") ||
													"",
											}}
										>
											<span
												className="progress-bar"
												style={{ width: `${precentage}%` }}
											></span>
										</div>
									</div>
									{(selectedOption.length && (
										<button
											onClick={() => nextFunc(selectedOption)}
											className="col-2"
										>
											Next
										</button>
									)) ||
										""}
								</div>
							)}
							<div className="form_body mt-4">
								{stepsData.map((item, i) => {
									return <div key={i}>{step === i + 1 && item}</div>;
								})}
							</div>
							{/* STEPPER HEADER END */}
						</div>
						{/* FORM CONTAINER END */}
					</div>
				</div>
			)) || (
				<div className="results_container py-5">
					<h2 className="text-center mb-4">
						Here are your recommended coaches.
					</h2>
					<CoachesResults />
					<div className="d-flex justify-content-center mt-4">
						<button className="border-0 py-2 rounded-3 themeBtn text-white px-4">
							Load more
						</button>
					</div>
				</div>
			)}
		</>
	);
}

const mapStatetoProps = (state) => {
	return {
		questionsData: state.Reducer.questionsData,
		selectedOptions: state.Reducer.selectedOptions,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		selectedOptionsFunc: function (data) {
			dispatch(selectedOptionsFunc(data));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
