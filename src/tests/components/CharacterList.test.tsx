import CharactersList from "@/components/character/CharactersList";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { Mock, vi } from "vitest";

vi.mock("@/httpServices/api/getHarryPotterData", () => ({
    getHarryPotterData: vi.fn()
}));

import { getHarryPotterData } from "@/httpServices/api/getHarryPotterData";

describe("CharactersList", () => {
    beforeEach(cleanup);

    beforeEach(() => {
        (getHarryPotterData as Mock).mockResolvedValue([
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
                actor: "Daniel Radcliffe",
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
                actor: "Emma Watson"
            }
        ]);
    });

    it("should render Harry Potter characters correctly", async () => {
        render(<CharactersList />);

        await waitFor(() => {
            expect(screen.getByText("Harry Potter")).toBeInTheDocument();
            expect(screen.getByText("Hermione Granger")).toBeInTheDocument();

            expect(screen.getByAltText("Harry Potter")).toHaveAttribute(
                "src",
                "harry.png"
            );
            expect(screen.getByAltText("Hermione Granger")).toHaveAttribute(
                "src",
                "hermione.png"
            );

            expect(screen.getAllByText("Human")).toHaveLength(2);
            expect(
                screen.getAllByText((text) => text.includes("Gryffindor"))
            ).toHaveLength(2);
            expect(screen.getByText("Daniel Radcliffe")).toBeInTheDocument();
            expect(screen.getByText("Emma Watson")).toBeInTheDocument();
        });
    });
});
