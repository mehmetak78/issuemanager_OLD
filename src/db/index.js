import {sendError} from "../utils/errorUtil";

const MAX_ROW_COUNT = 100;

export const getData = async (path, searchText) => {
    try {
        const res = await fetch(`${path}?q=${searchText}&_limit=${MAX_ROW_COUNT}`);

        if (res.ok) {
            const resData = await res.json();
            console.log(res.headers["X-Total-Count"]);
            return {data: resData};
        } else {
            return {error: sendError(res, res.status, res.statusText)};
        }
    } catch (err) {
        return {error: sendError(err)};
    }
};

export const insertDB = async (data, path) => {
    try {
        const res = await fetch(path,
                                {
                                    method: "POST",
                                    body: JSON.stringify(data),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
        );
        if (res.ok) {
            const resData = await res.json();
            return {data: resData};
        } else {
            return {error: sendError(res, res.status, res.statusText)};
        }
    } catch (err) {
        return {error: sendError(err)};
    }
};

export const updateDB = async (data, path) => {
    try {
        const res = await fetch(`${path}/${data.id}`,
                                {
                                    method: "PUT",
                                    body: JSON.stringify(data),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
        );
        if (res.ok) {
            const resData = await res.json();
            return {data: resData};
        } else {
            return {error: sendError(res, res.status, res.statusText)};
        }
    } catch (err) {
        return {error: sendError(err)};
    }
};

export const deleteDB = async (data, path) => {
    try {
        const res = await fetch(`${path}/${data.id}`,
                                {
                                    method: "DELETE",
                                }
        );
        if (res.ok) {
            return {data: data};
        } else {
            return {error: sendError(res, res.status, res.statusText)};
        }
    } catch (err) {
        return {error: sendError(err)};
    }
};


// For JUST TESTING PURPOSE
// Change method Name to addData to call from Add Button of Add User
// CALLING a GET request from contact-keeper users.js
// go to contact-keeper and run server  : npm run server
// And use code : const res = await  waitingCallTest(null, null); wherever you want to test
// Server will wait for some seconds before response
// You can test spinner

export const waitingCallTest = async (data, path) => {

    try {
        const res = await fetch("/api/users");

        if (res.ok) {
            const data = await res.json();
            return {data};
        } else {
            return {error: sendError(res, res.status, res.statusText)};
        }

    } catch (err) {
        return {error: sendError(err)};
    }

};