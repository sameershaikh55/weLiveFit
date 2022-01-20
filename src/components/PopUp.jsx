import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		navigate("/", { replace: true });

		const { firstName, lastName, email } = data;
		const sendingData = {
			firstName,
			lastName,
			email,
		};
		const collectionRef = collection(db, "leads");
		await addDoc(collectionRef, sendingData);
		reset();
	};

	return (
		<div data-aos="fade" className="pop-up-container form-popup">
			<div className="inner-pop-up radius">
				<div className="container-fluid">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="pop-up-body px-3 row gy-4"
					>
						<div className="col-12">
							Setup your profile to see your recommended coaches.
						</div>
						<div className="col-6 position-relative">
							<input
								className={`w-100 ${
									errors.firstName && errors.firstName.message && "error_field"
								}`}
								type="text"
								placeholder="First name"
								{...register("firstName", {
									required: "Required*",
									minLength: { value: 3, message: "Insufficient length*" },
									pattern: {
										value: /^[A-Za-z]+$/i,
										message: "Invalid Name*",
									},
								})}
							/>
							{errors.firstName && (
								<p className="mb-0 text-danger fw600 f12 position-absolute">
									{errors.firstName.message}
								</p>
							)}
						</div>
						<div className="col-6 position-relative">
							<input
								className={`w-100 ${
									errors.lastName && errors.lastName.message && "error_field"
								}`}
								type="text"
								placeholder="Last name"
								{...register("lastName", {
									required: "Required*",
									minLength: { value: 3, message: "Insufficient length*" },
									pattern: {
										value: /^[A-Za-z]+$/i,
										message: "Invalid Name*",
									},
								})}
							/>
							{errors.lastName && (
								<p className="mb-0 text-danger fw600 f12 position-absolute">
									{errors.lastName.message}
								</p>
							)}
						</div>
						<div className="col-12 position-relative">
							<input
								className={`w-100 ${
									errors.email && errors.email.message && "error_field"
								}`}
								type="text"
								placeholder="Email"
								{...register("email", {
									required: "Required*",
									pattern: {
										value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
										message: "Invalid Email*",
									},
								})}
							/>
							{errors.email && (
								<p className="mb-0 text-danger fw600 f12 position-absolute">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="col-12">
							<button type="submit" className="w-100">
								See my coaches
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PopUp;
