import React from "react";
import { render, screen } from "@testing-library/react";
import { QuizList } from "./QuizList";

describe("QuizList component test", () => {
    beforeEach(() => {
        render(<QuizList />);
    });
    test("A button to add quizzes exists", () => {
        const addButton = screen.getByRole("button", {
            name: /Add new empty quiz/i
        });
        expect(addButton).toBeInTheDocument();
    });
    test("A button to remove quizzes exists", () => {
        const removeButton = screen.getByRole("button", {
            name: /Delete Last Quiz/i
        });
        expect(removeButton).toBeInTheDocument();
    });
    test("You can add a new quiz", () => {
        const adder = screen.getByRole("button", {
            name: /Add new empty quiz/i
        });
        adder.click();
    });
    test("You can remove a quiz", () => {
        const remover = screen.getByRole("button", {
            name: /Add new empty quiz/i
        });
        remover.click();
    });
});
