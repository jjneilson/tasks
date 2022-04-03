import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz_Int, Quiz } from "./Quiz";

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

function RemoveQuiz({ setQuizzes, quizzes }: listprops): JSX.Element {
    return (
        <Button
            onClick={() =>
                setQuizzes([...quizzes.splice(0, quizzes.length - 1)])
            }
        >
            Delete Last Quiz
        </Button>
    );
}

export function QuizList({
    quizzes_in
}: {
    quizzes_in: Quiz_Int[];
}): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz_Int[]>(quizzes_in);
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
            <RemoveQuiz setQuizzes={setQuizzes} quizzes={quizzes}></RemoveQuiz>
        </div>
    );
}
