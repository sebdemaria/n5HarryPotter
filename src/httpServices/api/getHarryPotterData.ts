import { HarryPotterCharacterResponse } from "@/types/harryPotterAPITypes";
import { HttpClient } from "../base/httpClient";

export const getHarryPotterData = async (
    BASE_URL: string,
    ENDPOINT: string
): Promise<HarryPotterCharacterResponse> => {
    if (!BASE_URL || !ENDPOINT) {
        throw new Error("No BASE_URL or ENDPOINT was provided");
    }

    const { data } = await HttpClient(
        BASE_URL,
        3000
    ).get<HarryPotterCharacterResponse>(ENDPOINT);

    return data;
};
