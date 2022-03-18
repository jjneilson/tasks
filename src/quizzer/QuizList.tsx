import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz_Int, Quiz } from "./Quiz";
import { Question } from "../interfaces/question";

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
    },
    {
        questions: [...question],
        title: "Math Quiz 2",
        description: "The second math quiz",
        points: 0
    }
];

interface listprops {
    setQuizzes: (newQuiz: Quiz_Int[]) => void;
    quizzes: Quiz_Int[];
}

function AddQuiz({ setQuizzes, quizzes }: listprops): JSX.Element {
    return (
        <Button
            onClick={() =>
                setQuizzes([
                    ...quizzes,
                    {
                        questions: [],
                        title: "New Quiz",
                        description: "New Quiz",
                        points: 0
                    }
                ])
            }
        >
            Add new empty quiz
        </Button>
    );
}

export function QuizList(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz_Int[]>(PREMADES);
    return (
        <div>
            {quizzes.map((quiz: Quiz_Int) => (
                <div key={quiz.title}>
                    <Quiz
                        questions={quiz.questions}
                        title={quiz.title}
                        description={quiz.description}
                        points={quiz.points}
                    ></Quiz>
                    <hr></hr>
                </div>
            ))}
            <AddQuiz setQuizzes={setQuizzes} quizzes={quizzes}></AddQuiz>
        </div>
    );
}
