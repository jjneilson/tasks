import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Question_C } from "./Question_C";

export interface Quiz_Int {
    questions: Question[]; //List of questions in the quiz
    title: string; //Title of the quiz
    description: string; //Description of the quiz
    points: number; //Total amount of points in the quiz
}

interface listprops {
    setQuestions: (newQuestion: Question[]) => void;
    questions: Question[];
}

function AddQuestion({ setQuestions, questions }: listprops): JSX.Element {
    return (
        <Button
            onClick={() =>
                setQuestions([
                    ...questions,
                    {
                        id: 0,
                        name: "New Question",
                        type: "multiple_choice_question",
                        body: "New Question",
                        expected: "a",
                        options: ["a"],
                        points: 1,
                        published: true
                    }
                ])
            }
        >
            Add New Question
        </Button>
    );
}

function RemoveQuestion({ setQuestions, questions }: listprops): JSX.Element {
    return (
        <Button
            onClick={() =>
                setQuestions([...questions.splice(0, questions.length - 1)])
            }
        >
            Delete Last Question
        </Button>
    );
}

export function Quiz({
    questions,
    title,
    description,
    points
}: Quiz_Int): JSX.Element {
    const [stateQuestions, setQuestions] = useState<Question[]>([...questions]);
    const [stateTitle] = useState<string>(title);
    const [stateDescription] = useState<string>(description);
    const [statePoints] = useState<number>(points);
    const [edit, setEdit] = useState<boolean>(false);
    const [view, setView] = useState<boolean>(false);
    return (
        <div>
            <h4>{stateTitle}</h4>
            <div>{stateDescription}</div>
            <div>
                Questions: {stateQuestions.length} Points: {statePoints}
            </div>
            {(view || edit) &&
                stateQuestions.map((question: Question) => (
                    <Question_C
                        key={question.id}
                        id={question.id}
                        name={question.name}
                        body={question.body}
                        type={question.type}
                        options={question.options}
                        expected={question.expected}
                        points={question.points}
                        published={question.published}
                    ></Question_C>
                ))}
            {edit && (
                <div>
                    <AddQuestion
                        setQuestions={setQuestions}
                        questions={stateQuestions}
                    ></AddQuestion>
                    <RemoveQuestion
                        setQuestions={setQuestions}
                        questions={stateQuestions}
                    ></RemoveQuestion>
                </div>
            )}
            {!edit && (
                <Button onClick={() => setView(!view)}>Toggle View Quiz</Button>
            )}
            {!view && (
                <Button onClick={() => setEdit(!edit)}>Toggle Edit Quiz</Button>
            )}
        </div>
    );
}
