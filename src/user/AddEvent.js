import React, { Component } from 'react';
import './AddEvent.css';
import axios from 'axios';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fileIcon from '@fortawesome/fontawesome-free-regular/faFile';

class AddEvent extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: "",
			category: 4,
			description: "",
			location: "",
			start_date: "",
			start_time: "",
			end_date: "",
			end_time: "",
			userId: "",
			loggedIn: false,
			jsonCategories: {},
			categories: []
		}
		
		const url = "/api/loginCheck";	
		axios.get(url)
			.then(response => {
				if(response.data['username']) {
					const usr = response.data['username'];
					this.setState({
						userId: usr,
						loggedIn: true
					});
				}
			})
			.then(() => {
				axios.get("/api/categories")
					.then(response => {
						response = response.data;
						this.setState({
							jsonCategories: response
						});
						let temp = [];
						for(var key in response) {
							temp.push(key)
						}
						this.setState({
							categories: temp
						});
					})
			});
		
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	render() {
		return (
			<main>
				<h1>Add event</h1>
				
				<div id="addEventWrapper">
					<form action="/api/event" method="POST" enctype="multipart/form-data">
						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">Event name</label>
								<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
							</div>

							<div className="addEventItem">
								<label className="addEventLabel">Category</label>
								<select name="category" value={this.state.category} onChange={this.handleInputChange} >
									{this.state.categories.map((item) => (
										<option value={this.state.jsonCategories[item]}>{item.split('_').join(' ')}</option>
									))}
								</select>
							</div>
						</div>
						
						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">Short event description</label>
								<textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
							</div>
							<div className="addEventItem">
								<label className="addEventLabel">Location</label>
								<input name="location" type="text" value={this.state.location} onChange={this.handleInputChange} />
							</div>
						</div>

						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">Start date</label>
								<input type="date" name="start_date" value={this.state.start_date} onChange={this.handleInputChange} />
							</div>
							
							<div className="addEventItem">
								<label className="addEventLabel">Start time</label>
								<input type="time" name="start_time" value={this.state.start_time} onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="addEventRow">
							<div className="addEventItem">
								<label className="addEventLabel">End date</label>
								<input type="date" name="end_date" value={this.state.end_date} onChange={this.handleInputChange} />
							</div>
							
							<div className="addEventItem">
								<label className="addEventLabel">End time</label>
								<input type="time" name="end_time" value={this.state.end_time} onChange={this.handleInputChange} />
							</div>
						</div>
						
						<div className="addEventRow">
							<label className="addEventLabel" id="addImageLabel">Add an image if you want:</label>
							<label for="fileUpload" id="addImageBtn"><FontAwesomeIcon icon={fileIcon}/> Select</label>
							<input id="fileUpload" type="file" name="image" />
						</div>
						
						<input type="hidden" name="owner" value={this.state.userId} onChange={this.handleInputChange}/>
						
						<div className="addEventRow">
							<button type="submit">Submit event</button>
						</div>
					</form>
				</div>
			</main>
		);
	}
	
	handleInputChange(event) {
		const targetField = event.target;
		const value = targetField.value;
		const field = targetField.name;
		this.setState({
			[field]: value
		});
	}
}

export default AddEvent;