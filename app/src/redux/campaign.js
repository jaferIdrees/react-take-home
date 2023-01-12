import {  createAsyncThunk } from '@reduxjs/toolkit';
import GetCampaigns from "../API/get_campaigns";

const RETRIEVE_MISSIONS = 'RETRIEVE_MISSIONS';

const initialState = {campaigns: []};

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case "RETRIEVE_MISSIONS/fulfilled":
            {
                let newState = [];
                newState = payload;
                return newState;
            }
            default: return state;
    }
}

export const retrieveCampaigns = createAsyncThunk(
  RETRIEVE_MISSIONS,
async () => {
    try {
      const response = await GetCampaigns();
      
      return response.data;
    } catch (err) {
      
       return err;
      
    }
  });
  