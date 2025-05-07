import axios, { AxiosInstance } from "axios";

export const HttpClient = (
    BASE_URL: string,
    timeout: number
): AxiosInstance => {
    if (!BASE_URL || !timeout)
        throw new Error("No BASE_URL or timeout was provided");

    return axios.create({
        baseURL: BASE_URL,
        timeout: timeout
    });
};
