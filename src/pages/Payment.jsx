import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation().pathname.split("/")[1];
	localStorage.setItem("storedLocation", JSON.stringify(location));

	let orderedCoaches = JSON.parse(localStorage.getItem("orderedCoaches"));

	const singleCoach =
		orderedCoaches.length && orderedCoaches.filter((prev) => prev.id === id);

	const { name, picture, speciality } = singleCoach[0];

	return (
		<div className="payment_Container">
			<div className="container-fluid">
				<button
					onClick={() => navigate(-1)}
					className="border-0 rounded-pill py-2 text-white themeBtn px-4 d-flex justify-content-center align-items-center"
				>
					<BiLeftArrowAlt /> Back
				</button>
				<div className="row mt-4">
					<div className="col-12">
						<h4>YOUR COACH</h4>
						<div className="themeBtn py-3 rounded-3 px-4 px-md-0">
							<div className="row align-items-center gy-3">
								<div className="col-3 d-flex justify-content-center">
									<img className="w-100" src={picture} alt={name} />{" "}
								</div>
								<div className="col-12 col-md-9 ps-md-0 text-white">
									<h4>{name}</h4>
									<p className="mb-0">{speciality}</p>
								</div>
							</div>
						</div>
						<div className="mt-5">
							<h4>MEMBERSHIP PRICING</h4>
							<div className="mt-4">
								<div className="row align-items-center">
									<div className="col-12 col-md-5">
										<div className="d-flex align-items-end">
											<h1 className="display-4 fw-bold mb-0">SGD$99</h1>
											<span className="ms-2 mb-1 fw800">/MO</span>
										</div>
										<p>
											Join risk free for 30 days with a money back guarantee
										</p>
									</div>
									<div className="col-12 col-md-7">
										<div className="border-2 border-start ps-3 border-dark">
											<p>
												Personal Training at a truly affordable pricing, At just
												$99/ month, that's the cost of single session with an
												in-person trainer
											</p>

											<ul className="list-unstyled">
												<li>✓ Expert 1-1 coaching</li>
												<li>✓ Weekly Custom workouts</li>
												<li>✓ Daily access to your own fitness trainer</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="btn_container d-flex flex-column flex-md-row justify-content-center mt-5">
								<a
									target="blank"
									href="https://welivefit.co/signup"
									className="w-100"
								>
									<button className="border-0 rounded-3 py-2 text-white themeBtn">
										Join Now <IoIosArrowRoundForward fontSize={20} />
									</button>
								</a>
								<a
									target="blank"
									href="https://welivefit.co/signup#faq"
									className="w-100"
								>
									<button className="mt-3 mt-md-0 ms-0 ms-md-3 border-0 rounded-3 py-2 text-white themeBtn">
										FAQs
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
