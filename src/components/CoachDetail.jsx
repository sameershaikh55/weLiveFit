import React from "react";

const CoachDetail = ({ setDetail }) => {
	return (
		<div className="pop-up-container" data-aos="fade">
			<div className="inner-pop-up p-4" data-aos="fade-up">
				<div className="d-flex justify-content-end position-relative">
					<svg
						style={{ height: "22px", width: "22px" }}
						onClick={() => setDetail(false)}
						class="pointer cross"
						focusable="false"
						aria-hidden="true"
						viewBox="0 0 24 24"
						data-testid="CloseIcon"
					>
						<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
					</svg>
				</div>

				<div className="row align-items-center">
					<div className="col-3 d-flex justify-content-center">
						<img
							className="w-100"
							src="https://freerangestock.com/sample/116135/handsome-man-avatar-.jpg"
							alt=""
						/>{" "}
					</div>
					<div className="col-9">
						<h4>Lorem ipsum dolor sit amet.</h4>
						<p className="mb-0">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
							maxime amet itaque officia vero fugiat in pariatur, similique ea.
							Aspernatur.
						</p>
					</div>
				</div>
				<div className="mt-4">
					<div className="row">
						<div className="col-4">
							<h5>Experience</h5>
							<ul>
								{[1, 1, 1].map((prev, i) => {
									return <li key={i}>7 years experience</li>;
								})}
							</ul>
						</div>
						<div className="col-4">
							<h5>Specialties</h5>
							<ul>
								{[1, 1, 1].map((prev, i) => {
									return <li key={i}>7 years experience</li>;
								})}
							</ul>
						</div>
						<div className="col-4">
							<h5>Loves</h5>
							<ul>
								{[1, 1, 1].map((prev, i) => {
									return <li key={i}>7 years experience</li>;
								})}
							</ul>
						</div>

						<div className="mt-4">
							<h5>About Jared</h5>
							<p>
								Jared's enthusiasm for health began with his mother’s type 2
								diabetes diagnosis just as he was starting wrestling in
								highschool, which he continued to compete in throughout college.
								Both of these events motivated him to get his bachelor's degree
								in Exercise Science and Human Performance. From there, it was a
								smooth transition into his personal training career where he has
								helped others with similar issues while also getting to coach
								wrestling. Jared has experience working with 7 to 65 years olds
								of all fitness levels. He really enjoys coaching clients on how
								to reach their short term and long term goals through small
								habitual changes. Jared empowers all of his clients to have the
								ability to take control of their life while moving towards a
								long and healthy life.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoachDetail;
