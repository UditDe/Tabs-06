import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0); //this is for iterating jobs

	const fetchJobs = async () => {
		const res = await fetch(url);
		const dataOfJobs = await res.json();
		setJobs(dataOfJobs);
		setLoading(false);
	};
	// console.log(jobs);

	useEffect(() => {
		fetchJobs();
	}, []);

	if (loading) {
		return (
			<section className="section loading">
				<h1>loading</h1>
			</section>
		);
	}

	const { company, dates, duties, title } = jobs[value];
	// console.log(dates);
	return (
		<section className="section">
			{/* title goes here */}
			<div className="title">
				<h2>Experience</h2>
				<div className="underline"></div>
			</div>

			<div className="job-center">
				{/* btn container */}
				<div className="btn-container">
					{jobs.map((item, index) => {
						return (
							<button
								className={`job-btn ${index === value && "active-btn"}`}
								key={item.id}
								onClick={() => setValue(index)}
							>
								{item.company}
							</button>
						);
					})}
				</div>

				{/* jobs info */}
				<article className="job-info">
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className="job-date">{dates}</p>

					{duties.map((duty, index) => {
						return (
							<div key={index} className="job-desc">
								<FaAngleDoubleRight className="job-icon" ></FaAngleDoubleRight>
								<p>{duty}</p>
							</div>
						);
					})}
				</article>
			</div>
		</section>
	);
}

export default App;
