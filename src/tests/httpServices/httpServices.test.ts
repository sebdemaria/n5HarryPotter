import { HttpClient } from "@/httpServices/base/httpClient";
import { describe, expect, it } from "vitest";

describe("httpServices", () => {
    it("should throw when no timeout or BASE_URL is provided", () => {
        expect(() => HttpClient("url", 0)).toThrow(
            "No BASE_URL or timeout was provided"
        );
        expect(() => HttpClient("", 100)).toThrow(
            "No BASE_URL or timeout was provided"
        );
    });

    it("should return axios object instance", () => {
        const instance = HttpClient("http://www.example.com", 100);

        expect(instance).toHaveProperty("get");
        expect(instance).toHaveProperty("post");
        expect(instance).toHaveProperty("put");
        expect(instance).toHaveProperty("delete");
    });
});
