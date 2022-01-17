import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoachDetail from "./CoachDetail";

const CoachesResults = () => {
	const [detail, setDetail] = useState(false);

	return (
		<div className="container-fluid">
			<div className="col-11 col-md-12 mx-auto">
				<div className="row gy-4">
					{[1, 1, 1].map((prev, i) => {
						return (
							<div key={i} className="col-12 col-sm-6 col-lg-4">
								<div className="coach_card rounded-3 bg-white px-4 py-4 position-relative">
									{i === 0 && (
										<div className="position-absolute end-0 top-0 themeBtn shadow-sm rounded-3 text-white px-2 f14 mt-1 me-1">
											Top Choice
										</div>
									)}
									<div className="d-flex justify-content-center">
										<img
											className="w-100"
											src="https://freerangestock.com/sample/116135/handsome-man-avatar-.jpg"
											alt=""
										/>
									</div>
									<h5 className="text-center py-2 mb-0">Lorem, ipsum dolor.</h5>
									<p className="text-center f14">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
									</p>

									<div className="d-flex flex-column">
										<button
											onClick={() => setDetail(true)}
											className="btn btn-light"
										>
											Learn more
										</button>
										<Link to="/payment/malvin" className="w-100">
											<button className="py-2 rounded-3 border-0 themeBtn text-white mt-3 w-100">
												Train with lorem
											</button>
										</Link>
									</div>
								</div>
							</div>
						);
					})}

					{detail && <CoachDetail setDetail={setDetail} />}
				</div>
			</div>
		</div>
	);
};

export default CoachesResults;
