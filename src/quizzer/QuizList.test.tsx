import React from "react";
import { render, screen } from "@testing-library/react";
import { QuizList } from "./QuizList";
import { Question } from "../interfaces/question";

describe("QuizList component test", () => {
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

    const PREMADES = [
        {
            questions: [...question],
            title: "Math Quiz 1",
            description: "The first math quiz",
            points: [...question].reduce(
                (total: number, questions: Question): number =>
                    total + questions.points,
                0
            )
        }
    ];
    beforeEach(() => {
        render(<QuizList quizzes_in={PREMADES} />);
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
    // Not Completed Tests Below
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
