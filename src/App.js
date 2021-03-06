import logo from "./assets/logo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import CountUp from "react-countup";

// IMPORTING ANIMATIONS
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORTING FIREBASE
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

// STEPS
import StepOne from "./components/StepOne";
import { connect } from "react-redux";
import { selectedOptionsFunc } from "./redux/action";

// QUESTION
import QuestionStep from "./components/QuestionStep";
import CoachesResults from "./components/CoachesResults";
import PopUp from "./components/PopUp";

function App({ questionsData, selectedOptionsFunc, selectedOptions }) {
	const navigate = useNavigate();
	const location = useLocation();

	// GETTING LOCATION
	let storedLocation = JSON.parse(localStorage.getItem("storedLocation"));

	const [coaches, setCoaches] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);
	const [loadMore, setLoadMore] = useState(false);
	const [showResults, setShowResults] = useState(
		(storedLocation === "payment" && true) || false
	);

	let selectedData = JSON.parse(localStorage.getItem("selectedData"));

	const usersCollectionRef = collection(db, "coaches");

	// // FOR PERCENTAGE
	useEffect(() => {
		AOS.init({
			once: true,
		});

		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setCoaches(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		if (!coaches.length) {
			getUsers();
		}
	}, []); // empty dependencies array => useEffect only called once

	let activeStep = JSON.parse(localStorage.getItem("currentStep"));

	// STEPS DATA
	const stepsData = [<StepOne nextFunc={nextFunc} />];

	// MAKING QUESTIONS
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
				nextFunc={nextFunc}
			/>
		);
	}

	const totalSteps = stepsData.length;
	let perStepPercentage = 100 / totalSteps;

	// STEPS STATE
	const [currentStep, setCurrentStep] = useState({
		precentage: 0,
		step: 1,
	});

	// STATE DESTRUCTURE
	// const { step, precentage } = currentStep;
	const { step, precentage } =
		(activeStep !== null && activeStep) || currentStep;

	// TO GO BACK
	const previousFunc = () => {
		setSelectedOption(selectedOptions);

		let updatedStep = {
			precentage: precentage - perStepPercentage,
			step: step - 1,
		};

		setCurrentStep(updatedStep);

		localStorage.setItem("currentStep", JSON.stringify(updatedStep));
	};

	// TO MOVE FORWARD
	function coachSorting(data) {
		let genderIndex = selectedData.filter((item) => item.id === "7");

		let maleCoaches = [],
			femaleCoaches = [];

		for (let i = 0; i < data.length; i++) {
			if (data[i].gender === "male") {
				maleCoaches.push(data[i]);
			} else if (data[i].gender === "female") {
				femaleCoaches.push(data[i]);
			}
		}

		return (
			(genderIndex[0].option === "Male" && [
				...maleCoaches,
				...femaleCoaches,
			]) ||
			(genderIndex[0].option === "Female" && [
				...femaleCoaches,
				...maleCoaches,
			]) ||
			data
		);
	}

	// TO MOVE FORWARD
	function nextFunc(data, isSingle) {
		if (isSingle || selectedOption.length) {
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

	if (step === 10) {
		const filteringOptions =
			selectedData.length && selectedData.map((prev) => prev.option);
		const filteringSpecializations =
			coaches.length && coaches.map((prev) => prev.specializations);

		for (let i = 0; i < filteringSpecializations.length; i++) {
			let orderedCoaches = filteringSpecializations[i].filter((val) =>
				filteringOptions.includes(val)
			);

			coaches.push((coaches[i].specializations = orderedCoaches));
			coaches.pop();
		}

		coaches.sort((a, b) => b.specializations.length - a.specializations.length);

		const filteredCoaches = coachSorting(coaches);

		localStorage.setItem("orderedCoaches", JSON.stringify(filteredCoaches));
	}

	let orderedCoaches = JSON.parse(localStorage.getItem("orderedCoaches"));

	// TO MOVE BACK ALL OVER END TO START
	function goBackFunc() {
		window.location.reload(false);
		navigate("/", { replace: true });
		localStorage.clear();
	}

	// COUNT UP
	const [loading, setLoading] = useState(false);
	const onStart = () => {
		setLoading(true);
	};

	const onEnd = () => {
		setLoading(false);
		setShowResults(true);

		// INFO FORM CHECK
		let informationCollected = localStorage.getItem("information-collected");

		if (informationCollected != "true") {
			navigate("/?id=49739773", { replace: true });
		}
	};

	const containerProps = {
		"aria-busy": loading,
		className: "countUp",
	};

	return (
		<>
			{(step !== 10 && (
				<div className="form_container my-3">
					<div className="container-fluid">
						{/* LOGO START */}
						<img className="logo_container" src={logo} alt="" />
						{/* LOGO END */}

						{/* FORM CONTAINER START */}
						<div className="form_inner_container container-fluid">
							{/* STEPPER HEADER START */}
							{step !== 1 && (
								<div className="stepper_header row gx-md-5 align-items-center">
									{/* PREV */}
									<button onClick={previousFunc} className="col-2">
										Prev
									</button>
									{/* PREV */}
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
									{/* NEXT */}
									{(selectedOption.length && (
										<button
											data-aos="fade-left"
											onClick={() => nextFunc(selectedOption, false)}
											className="col-2"
										>
											Next
										</button>
									)) ||
										""}
									{/* NEXT */}
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
				<>
					{(showResults && (
						<div className="results_container py-5">
							<div className="container-fluid">
								<button
									onClick={goBackFunc}
									className="border-0 rounded-pill py-2 text-white themeBtn px-4 d-flex justify-content-center align-items-center"
								>
									<BiLeftArrowAlt /> Back
								</button>
							</div>
							<h2 className="text-center mb-4 mt-4">
								Here are your recommended coaches.
							</h2>
							{/* Coaches Results */}
							<CoachesResults
								orderedCoaches={
									(loadMore && orderedCoaches) || orderedCoaches.slice(0, 3)
								}
							/>
							{!loadMore && (
								<div className="d-flex justify-content-center mt-4">
									<button
										onClick={() => setLoadMore(true)}
										className="border-0 py-2 rounded-3 themeBtn text-white px-4"
									>
										Load more
									</button>
								</div>
							)}
						</div>
					)) || (
						<div className="counter_container d-flex flex-column">
							<h2 className="text-center">
								Hold tight, we're finding your <br /> perfect coach!
							</h2>
							{/* COUNTER */}
							<CountUp
								end={100}
								duration="5"
								onStart={onStart}
								onEnd={onEnd}
								containerProps={containerProps}
							/>
						</div>
					)}
				</>
			)}

			{/* POP-UP */}
			{location.search && <PopUp />}
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
