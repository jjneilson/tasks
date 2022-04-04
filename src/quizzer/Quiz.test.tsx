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
    test("You can switch to edit mode", () => {
        const editMode = screen.getByRole("button", {
            name: /Toggle Edit Quiz/i
        });
        editMode.click();
    });
    test("You can switch to view mode", () => {
        const viewMode = screen.getByRole("button", {
            name: /Toggle View Quiz/i
        });
        viewMode.click();
    });
    test("A button to add questions exists", () => {
        const editMode = screen.getByRole("button", {
            name: /Toggle Edit Quiz/i
        });
        editMode.click();
        const addButton = screen.getByRole("button", {
            name: /Add New Question/i
        });
        expect(addButton).toBeInTheDocument();
    });
    test("A button to remove questions exists", () => {
        const editMode = screen.getByRole("button", {
            name: /Toggle Edit Quiz/i
        });
        editMode.click();
        const removeButton = screen.getByRole("button", {
            name: /Delete Last Question/i
        });
        expect(removeButton).toBeInTheDocument();
    });
    test("The total number of questions and number of points is displayed", () => {
        const points_questions = screen.getByTestId(/pointsquestions/i);
        expect(points_questions).toBeInTheDocument();
    });
    test("The description is displayed", () => {
        const description = screen.getByTestId(/description/i);
        expect(description).toBeInTheDocument();
    });
    test("The title is displayed", () => {
        const title = screen.getByTestId(/title/i);
        expect(title).toBeInTheDocument();
    });
    // Not Completed Test Below
    test("You can add a new question", () => {
        const editMode = screen.getByRole("button", {
            name: /Toggle Edit Quiz/i
        });
        editMode.click();
        const adder = screen.getByRole("button", {
            name: /Add New Question/i
        });
        adder.click();
    });
    test("You can remove a question", () => {
        const editMode = screen.getByRole("button", {
            name: /Toggle Edit Quiz/i
        });
        editMode.click();
        const remover = screen.getByRole("button", {
            name: /Delete Last Question/i
        });
        remover.click();
    });
});
