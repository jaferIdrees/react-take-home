import axios from 'axios';

const URL = 'https://www.plugco.in/public/take_home_sample_feed';

const GetCampaigns = () => {
    const campaignsHttp = axios.create({
        baseURL: URL,
        headers: {
            'Content-type': 'application/json'
        }
    })
    return campaignsHttp.get('');
  }

  
export default GetCampaigns;