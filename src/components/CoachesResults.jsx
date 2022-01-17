import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoachDetail from "./CoachDetail";

const CoachesResults = ({ orderedCoaches }) => {
	const [detailShow, setDetailShow] = useState(false);
	const [detail, setDetail] = useState();

	function detailFunc(data) {
		setDetailShow(true);
		setDetail(data);
	}

	return (
		<div className="container-fluid">
			<style jsx>{`
				.line-limit-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					overflow: hidden;
					width: 100%;
					-webkit-box-orient: vertical;
				}
			`}</style>

			<div className="col-11 col-md-12 mx-auto">
				<div className="row gy-4">
					{orderedCoaches.map((prev, i) => {
						const { name, picture, speciality, id } = prev;
						return (
							<div key={i} className="col-12 col-sm-6 col-lg-4" data-aos="fade">
								<div className="coach_card rounded-3 bg-white px-4 py-4 position-relative d-flex flex-column justify-content-between">
									{i === 0 && (
										<div className="position-absolute end-0 top-0 themeBtn shadow-sm rounded-3 text-white px-2 f14 mt-1 me-1">
											Top Choice
										</div>
									)}
									<div>
										<div className="d-flex justify-content-center">
											<img className="w-100" src={picture} alt={name} />
										</div>
										<h5 className="text-center py-2 mb-0">{name}</h5>
										<p className="text-center f14 line-limit-2">{speciality}</p>
									</div>

									<div className="d-flex flex-column">
										<button
											onClick={() => detailFunc(prev)}
											className="btn btn-light"
										>
											Learn more
										</button>
										<Link to={`/payment/${id}`} className="w-100">
											<button className="py-2 rounded-3 border-0 themeBtn text-white mt-3 w-100">
												Train with lorem
											</button>
										</Link>
									</div>
								</div>
							</div>
						);
					})}

					{detailShow && (
						<CoachDetail detail={detail} setDetail={setDetailShow} />
					)}
				</div>
			</div>
		</div>
	);
};

export default CoachesResults;
