export const getToken = state => state.token;
export const getPlanets = state => state.planets;
export const getVehicles = state => state.vehicles;

export const getError = state => state.error;
export const hasError = state => state.error.length > 0
export const getErrorMessage = state => state.errorMessage;
export const getErrorType = state => state.errorType;