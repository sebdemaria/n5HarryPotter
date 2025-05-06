import { describe, expect, it, vi } from "vitest";

vi.mock("@/httpServices/api/getHarryPotterData", () => {
    return {
        getHarryPotterData: vi.fn((BASE_URL?: string, ENDPOINT?: string) => {
            if (!BASE_URL || !ENDPOINT) {
                return Promise.reject(
                    new Error("No BASE_URL or ENDPOINT was provided")
                );
            }

            return Promise.resolve([
                {
                    id: "1",
                    name: "Harry Potter",
                    image: "harry.png",
                    species: "Human",
                    gender: "Male",
                    house: "Gryffindor",
                    dateOfBirth: "31-07-1980",
                    yearOfBirth: 1980,
                    wizard: true,
                    ancestry: "Half-blood",
                    eyeColour: "green",
                    hairColour: "black",
                    wand: {
                        wood: "holly",
                        core: "phoenix feather",
                        length: 11
                    },
                    patronus: "stag",
                    hogwartsStudent: true,
                    hogwartsStaff: false,
                    actor: "Daniel Radcliffe",
                    alternate_names: [],
                    alternate_actors: [],
                    alive: true
                },
                {
                    id: "2",
                    name: "Hermione Granger",
                    image: "hermione.png",
                    species: "Human",
                    gender: "Female",
                    house: "Gryffindor",
                    dateOfBirth: "19-09-1979",
                    yearOfBirth: 1979,
                    wizard: true,
                    ancestry: "Muggle-born",
                    eyeColour: "brown",
                    hairColour: "brown",
                    wand: {
                        wood: "vine",
                        core: "dragon heartstring",
                        length: 10.75
                    },
                    patronus: "otter",
                    hogwartsStudent: true,
                    hogwartsStaff: false,
                    actor: "Emma Watson",
                    alternate_names: [],
                    alternate_actors: [],
                    alive: true
                }
            ]);
        })
    };
});

import { getHarryPotterData } from "@/httpServices/api/getHarryPotterData";

describe("getHarryPotterData", () => {
    it("should throw if no BASE_URL or endpoint is provided", async () => {
        await expect(getHarryPotterData("url", "")).rejects.toThrow(
            "No BASE_URL or ENDPOINT was provided"
        );

        await expect(getHarryPotterData("", "/character")).rejects.toThrow(
            "No BASE_URL or ENDPOINT was provided"
        );
    });

    it("should return mock character list", async () => {
        const characters = await getHarryPotterData(
            "https://mock.api",
            "/character"
        );

        expect(Array.isArray(characters)).toBe(true);
        expect(characters.length).toBe(2);
        expect(characters[0].name).toBe("Harry Potter");
        expect(characters[1].name).toBe("Hermione Granger");
    });
});
