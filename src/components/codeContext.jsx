import React, { Component } from "react";

class CodeContext extends Component {
	state = {};

	pullLogContext = () => {
		let splitLog = this.props.log.split(/\r?\n/);
		let index = splitLog.indexOf(this.props.text);

		if (index == -1) {
			return ["Error: Couldn't find context within log..."];
		}

		if (index < 1) {
			return [splitLog[0], splitLog[1], splitLog[2]];
		}

		return [splitLog[index - 1], splitLog[index], splitLog[index + 1]];
	};

	render() {
		let modalData = this.pullLogContext();
		return (
			<div>
				<button
					className="btn btn-sm btn-outline-link"
					data-toggle="modal"
					data-target="#Modal"
				>
					🔎
				</button>
				<div
					className="modal fade"
					id="Modal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="ModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-xl" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel">
									Log context
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body bg-dark">
								<p>
									<p className="text-white-50 text-monospace">
										{modalData[0] + "\n"}
									</p>
									<p className="text-white text-monospace">
										{modalData[1] + "\n"}
									</p>
									<p className="text-white-50 text-monospace">
										{modalData[2] + "\n"}
									</p>
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CodeContext;
