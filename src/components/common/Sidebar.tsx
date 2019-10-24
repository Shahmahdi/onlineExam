import React from "react";
import { ButtonGroup, Alignment, Button } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";

const SidebarComponent = () => {
	return (
		<div className="fixed bg-white w3 w6-m w11-l pt6 vh-100 br b--tigrowLightGray-1">
			<ButtonGroup
				alignText={Alignment.LEFT}
				className="bp3-minimal bp3-vertical bp3-fill sidebar-margin"
			>
				<NavLink exact activeStyle={{ background: "#0fa3a3" }} to={`/landing`}>
					<Button className="mv2 outline-0" icon="control">
						Home
						</Button>
				</NavLink>
				<NavLink exact activeStyle={{ background: "#0fa3a3" }} to={`/exam`} >
					<Button className="mv2 outline-0" icon="layout-auto">
						Exam
						</Button>
				</NavLink>
				<NavLink exact activeStyle={{ background: "#0fa3a3" }} to={`/about`} >
					<Button className="mv2 outline-0" icon="briefcase">
						About
						</Button>
				</NavLink>
			</ButtonGroup>
		</div>
	);
};

export const Sidebar = SidebarComponent;