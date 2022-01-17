import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Payment = () => {
	return (
		<div className="payment_Container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h4>YOUR COACH</h4>
						<div className="mt-4 themeBtn py-3 rounded-3 px-4 px-md-0">
							<div className="row align-items-center gy-3">
								<div className="col-3 d-flex justify-content-center">
									<img
										className="w-100"
										src="https://freerangestock.com/sample/116135/handsome-man-avatar-.jpg"
										alt=""
									/>{" "}
								</div>
								<div className="col-12 col-md-9 ps-md-0 text-white">
									<h4>Lorem ipsum dolor sit amet.</h4>
									<p className="mb-0">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Possimus maxime amet itaque officia vero fugiat in pariatur,
										similique ea. Aspernatur.
									</p>
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
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											At, impedit.
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
