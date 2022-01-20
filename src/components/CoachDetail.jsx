import React from "react";

const CoachDetail = ({ detail, setDetail }) => {
	const {
		name,
		picture,
		speciality,
		description,
		experience,
		loves,
		specialties,
	} = detail;

	let nameBreak = name.split(" ");

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
						<img className="w-100" src={picture} alt={name} />{" "}
					</div>
					<div className="col-9">
						<h4>{name}</h4>
						<p className="mb-0">{speciality}</p>
					</div>
				</div>
				<div className="mt-4">
					<div className="row">
						<div className="col-6 col-md-4">
							<h5>Certified</h5>
							<ul>
								{experience.map((prev, i) => {
									return <li key={i}>{prev}</li>;
								})}
							</ul>
						</div>
						<div className="col-6 col-md-4">
							<h5>Specialties</h5>
							<ul>
								{specialties.map((prev, i) => {
									return <li key={i}>{prev}</li>;
								})}
							</ul>
						</div>
						<div className="col-6 col-md-4">
							<h5>Interests</h5>
							<ul>
								{loves.map((prev, i) => {
									return <li key={i}>{prev}</li>;
								})}
							</ul>
						</div>

						<div className="mt-4">
							<h5>About {nameBreak[0]}</h5>
							<div dangerouslySetInnerHTML={{ __html: description }}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoachDetail;
