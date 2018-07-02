export const GET_DATA_RECEIVED = 'GET_DATA_RECEIVED';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_DATA = 'GET_DATA';


export const SELECT_APPLICATION = 'SELECT_APPLICATION';
export const SELECT_ENVIRONMENT = 'SELECT_ENVIRONMENT';

export const ADD_SAVETO = 'ADD_SAVETO';
export const CLEAR_SAVETO = 'CLEAR-SAVETO';
export const UPDATE_APPLICATION = "UPDATE_APPLICATION";
export const UPDATE_ENVIRONMENT = "UPDATE_ENVIRONMENT";
export const UPDATE_DATABASE = "UPDATE_DATABASE";
export const UPDATE_SERVER = "UPDATE_SERVER";
export const SAVE_DATA = 'SAVE_DATA';


export function GetData() {
    return {
        type : GET_DATA,
    }
}

export function GetDataReceived(data) {
    return {
        type: GET_DATA_RECEIVED,
        data
    }
}

export function GetDataError(data) {
    return {
        type: GET_DATA_ERROR,
        data
    }
}

export function SaveData(data) {
    return {
        type: SAVE_DATA,
        data
    }
}

export function SelectApplication(data) {
    return { 
        type: SELECT_APPLICATION, 
        data
    }
}

export function SelectEnvironment(data) {
    return { 
        type: SELECT_ENVIRONMENT, 
        data
    }
}

let nextSaveId = 0;
export function AddUpdateAppEnvDbServer(data) {
    return {
        type: ADD_SAVETO,
        id: nextSaveId++
    }
}

export function ClearUpdateAppEnvDbServer(data) {
    nextSaveId = 0;
    return {
        type: CLEAR_SAVETO,
        data
    }
}

export function UpdateApplication(id, data) {
    return {
        type: UPDATE_APPLICATION,
        id,
        data
    }
}

export function UpdateEnvironment(id, data) {
    return {
        type: UPDATE_ENVIRONMENT,
        id,
        data
    }
}

export function UpdateDatabase(id, data) {
    return {
        type: UPDATE_DATABASE,
        id,
        data
    }
}

export function UpdateServer(id, data) {
    return {
        type: UPDATE_SERVER,
        id,
        data
    }
}