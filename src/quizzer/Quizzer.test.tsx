import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Component Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The sketch is rendered", () => {
        const imageShow = screen.getAllByAltText(/App Sketch/i);
        expect(imageShow[0]).toBeInTheDocument();
    });
    test("There is a list of completed requirements", () => {
        const listShow = screen.getByRole("list");
        expect(listShow).toBeInTheDocument();
    });
});
