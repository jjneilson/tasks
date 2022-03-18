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

export function Quiz({
    questions,
    title,
    description,
    points
}: Quiz_Int): JSX.Element {
    const [stateQuestions] = useState<Question[]>([...questions]);
    const [stateTitle] = useState<string>(title);
    const [stateDescription] = useState<string>(description);
    const [statePoints] = useState<number>(points);
    const [edit, setEdit] = useState<boolean>(false);
    const [view, setView] = useState<boolean>(false);
    return (
        <div>
            <h4>{stateTitle}</h4>
            <div>{stateDescription}</div>
            <div>Points: {statePoints}</div>
            {view &&
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
            {!edit && (
                <Button onClick={() => setView(!view)}>Toggle View Quiz</Button>
            )}
            {!view && (
                <Button onClick={() => setEdit(!edit)}>Toggle Edit Quiz</Button>
            )}
            {!edit && !view && <Button>Delete Quiz</Button>}
        </div>
    );
}
