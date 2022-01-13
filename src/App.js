import logo from "./assets/logo.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import { useState } from "react";

// STEPS
import StepOne from "./components/StepOne";

function App() {
	// STEPS DATA
	const stepsData = [<StepOne />];

	const totalSteps = stepsData.length;
	let perStepPercentage = 100 / totalSteps;
	const [currentStep, setCurrentStep] = useState({
		precentage: 0,
		step: 1,
	});

	// STATE DESTRUCTURE
	const { step, precentage } = currentStep;

	const previousFunc = () => {
		setCurrentStep({
			precentage: precentage - perStepPercentage,
			step: step - 1,
		});
	};

	const nextFunc = () => {
		setCurrentStep({
			precentage: precentage + perStepPercentage,
			step: step + 1,
		});
	};

	return (
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
									class="progress"
									style={{
										boxShadow:
											(precentage !== 0 && "1px 1px 4px rgb(51, 209, 137)") ||
											"",
									}}
								>
									<span
										class="progress-bar"
										style={{ width: `${precentage}%` }}
									></span>
								</div>
							</div>
							<button onClick={nextFunc} className="col-2">
								Next
							</button>
						</div>
					)}
					<div className="form_body mt-4">
						{stepsData.map((item, i) => {
							return step === i + 1 && item;
						})}
					</div>
					{/* STEPPER HEADER END */}
				</div>
				{/* FORM CONTAINER END */}
			</div>
		</div>
	);
}

export default App;
