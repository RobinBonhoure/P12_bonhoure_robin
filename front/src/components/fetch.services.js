import { performanceMocked, initialMocked, activityMocked, averageSessionsMocked } from '../mock/data-mocked.js'

// SWITCH MOCKED OR API DATA
const mocked = false;
const url = 'http://localhost:3000/user';

// GET DATA FROM BACKEND
// param : endpoint (/performance || /average-sessions || (empty) || /activity)
const getFetch = async (endpoint) => {
    try {
        let res = await fetch(`${url + '/' + endpoint}`);
        return await res.json();
    } catch (error) {
        return false
    }
}

// GET DATA PERFORMANCE
// param : id form url
export const getPerformance = async (id) => {
    if (mocked) return performanceMocked
    const performance = await getFetch(`${id + '/performance'}`);
    return performance
};

// GET DATA GENERAL
// param : id form url
export const getInitial = async (id) => {
    if (mocked) return initialMocked
    const initial = await getFetch(`${id + '/'}`);
    return initial
};

// GET DATA AVERAGE SESSIONS
// param : id form url
export const getSessions = async (id) => {
    if (mocked) return averageSessionsMocked
    const initial = await getFetch(`${id + '/average-sessions'}`);
    return initial
};

// GET DATA ACTIVITY
// param : id form url
export const getActivity = async (id) => {
    if (mocked) return activityMocked
    const activity = await getFetch(`${id + '/activity'}`);
    return activity
};