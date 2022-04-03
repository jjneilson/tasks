import React from "react";
import { render, screen } from "@testing-library/react";
import { Quiz } from "./Quiz";
import { Question } from "../interfaces/question";

describe("Quiz component test", () => {
    const question: Question[] = [
        {
            id: 0,
            name: "Question 1",
            type: "multiple_choice_question",
            body: "This is a multiple choice question",
            expected: "c",
            options: ["a", "b", "c"],
            points: 1,
            published: true
        },
        {
            id: 1,
            name: "Question 2",
            type: "short_answer_question",
            body: "This is a short answer question",
            expected: "1+1",
            options: [],
            points: 1,
            published: true
        }
    ];
    beforeEach(() => {
        render(
            <Quiz
                questions={question}
                title="test"
                description="test"
                points={2}
            />
        );
    });
    test("A button to add questions exists", () => {
        const addButton = screen.getByRole("button", {
            name: /Add New Question/i
        });
        expect(addButton).toBeInTheDocument();
    });
    test("A button to remove questions exists", () => {
        const removeButton = screen.getByRole("button", {
            name: /Delete Last Question/i
        });
        expect(removeButton).toBeInTheDocument();
    });
    test("You can add a new question", () => {
        const adder = screen.getByRole("button", {
            name: /Add new empty quiz/i
        });
        adder.click();
    });
    test("You can remove a question", () => {
        const remover = screen.getByRole("button", {
            name: /Add new empty quiz/i
        });
        remover.click();
    });
});
