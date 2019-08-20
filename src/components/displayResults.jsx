import React, { Component } from "react";
import DeviceInfoCard from "./deviceInfoCard";
import "../custom.css";

class DisplayResults extends Component {
	state = {};

	// Render the table data with given data array
	renderTableData = data => {
		return data.map((dataPoint, index) => {
			return (
				<tr key={index}>
					<td className="mr-0">{dataPoint}</td>
				</tr>
			);
		});
	};

	// Render a table with the provided data array & title
	renderTable(data, title) {
		return (
			<table className="table table-striped">
				<thead className="thead-light">
					<tr>
						<th
							data-toggle="collapse"
							data-target={"#" + title.charAt(0)}
							className="dropdown-toggle"
						>
							{title}{" "}
							<span className="badge badge-info m-1">{data.length}</span>
							{/* <span className="font-weight-light align-right">
								click to expose // hide
							</span> */}
						</th>
					</tr>
				</thead>
				<tbody id={title.charAt(0)} className="collapse">
					{this.renderTableData(data)}
				</tbody>
			</table>
		);
	}

	// Roku style rendering
	renderRoku = () => {
		return (
			<span>
				<DeviceInfoCard
					provider={this.props.tableData.deviceInfo.provider}
					version={this.props.tableData.deviceInfo.version}
					model={this.props.tableData.deviceInfo.model}
					adobeID={this.props.tableData.deviceInfo.adobeID}
					an={this.props.tableData.deviceInfo.an}
				/>
				{this.renderTable(this.props.tableData.pubAd, "Pub Ads")}
				{this.renderTable(this.props.tableData.streamID, "Stream IDs")}
				{this.renderTable(this.props.tableData.error, "Errors")}
			</span>
		);
	};

	// Fire TV style rendering
	renderFTV = () => {
		return (
			<span>
				<DeviceInfoCard
					provider={this.props.tableData.deviceInfo.provider}
					version={this.props.tableData.deviceInfo.version}
					model={this.props.tableData.deviceInfo.model}
					adobeID={this.props.tableData.deviceInfo.adobeID}
					an={this.props.tableData.deviceInfo.an}
				/>
				{this.renderTable(this.props.tableData.pubAd, "Pub Ads")}
				{this.renderTable(this.props.tableData.streamID, "Stream IDs")}
				{this.renderTable(this.props.tableData.error, "Errors")}
			</span>
		);
	};

	// Determines which parse method to use based on provided device ID
	renderDevice = () => {
		switch (this.props.deviceID) {
			case "Roku":
				console.log("Rendering Roku...");
				return this.renderRoku();
			case "FTV":
				console.log("Rendering FTV...");
				return this.renderFTV();
			default:
				break;
		}
	};

	render() {
		return <div>{this.renderDevice()}</div>;
	}
}

export default DisplayResults;
