import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const StepOne = ({ nextFunc }) => {
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../assets/fitnessAnimation.json"),
		});
	}, []);

	return (
		<div className="step_one">
			<h2 className="mb-2 fw600">
				Welcome to{" "}
				<span className="bottom_line">
					We<span className="color3">Live</span>Fit!
				</span>
			</h2>
			<h6 className="lh-lg">
				We are excited to kick off this journey together with you by finding the
				right coach for your needs. The road to your fitness goals starts now!
			</h6>
			<div className="animation">
				<div ref={container}></div>
				<button onClick={nextFunc}>Begin</button>
			</div>
		</div>
	);
};

export default StepOne;
