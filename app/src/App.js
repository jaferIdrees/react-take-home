import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCampaigns } from "./redux/campaign";

function App() {
	const campaigns = useSelector((state) => state.campaigns)
	const dispatch = useDispatch();

	if (campaigns.length ===0)dispatch(retrieveCampaigns());
	return (<>
		<h3>campaigns List</h3>
		{ campaigns.map((campaign) => 
		<p key={campaign.id}>{campaign.campaign_name}</p>
		)}
    </>
	);
}

export default App;
