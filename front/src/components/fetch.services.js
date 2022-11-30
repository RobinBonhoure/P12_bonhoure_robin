const url = 'http://localhost:3000/user';

// GET DATA FROM BACKEND
// param : endpoint (/performance || /average-sessions || (empty) || /activity)
const getFetch = async (endpoint) => {
    try {
        let res = await fetch(`${url + '/' + endpoint}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// GET DATA PERFORMANCE
// param : id form url
export const getPerformance = async (id) => {
    const performance = await getFetch(`${id + '/performance'}`);
    return performance
};

// GET DATA GENERAL
// param : id form url
export const getInitial = async (id) => {
    const initial = await getFetch(`${id + '/'}`);
    return initial
};

// GET DATA AVERAGE SESSIONS
// param : id form url
export const getSessions = async (id) => {
    const initial = await getFetch(`${id + '/average-sessions'}`);
    return initial
};

// GET DATA ACTIVITY
// param : id form url
export const getActivity = async (id) => {
    const activity = await getFetch(`${id + '/activity'}`);
    return activity
};