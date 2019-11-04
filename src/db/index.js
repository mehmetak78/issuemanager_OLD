import {setError} from "../utils/errorUtil";

export const addData = async (data, path) => {

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
            return {error: setError(res, res.status, res.statusText)};
        }
    } catch (err) {
        return {error:setError(err)};
    }

};





// For JUST TESTING PURPOSE
// Change method Name to addData to call from Add Button of Add User
// CALLING a GET request from contact-keeper users.js
// go to contact-keeper and run server  : npm run server
// Server will wait for some seconds before response
// You can test spinner
export const addData2 = async (data, path) => {

    try {
        const res = await fetch("/api/users");

        if (res.ok) {
            const data = await res.json();
            return {data};
        }else {
            return {error: setError(res, res.status, res.statusText)};
        }

    } catch (err) {
        return {error:setError(err)};
    }

};