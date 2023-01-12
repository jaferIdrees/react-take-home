import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCampaigns } from "./redux/campaign";

function App() {
	const campaigns = useSelector((state) => state.campaignsReducer)
	const dispatch = useDispatch();
	dispatch(retrieveCampaigns());
	console.log(campaigns)
	return (<>
		<h3>Learn React</h3>
		<p>{typeof campaigns}</p>
    </>
	);
}

export default App;
