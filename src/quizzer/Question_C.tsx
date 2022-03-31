import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export interface new_Question extends Question {
    edit: boolean;
}

function MultipleChoiceQuestion_C({
    options,
    expected,
    points,
    edit
}: {
    options: string[];
    expected: string;
    points: number;
    edit: boolean;
}): JSX.Element {
    const [chosen, setChosen] = useState<string>(options[0]);
    return (
        <div>
            {options.map((option: string) => (
                <Form.Check
                    key={option}
                    inline
                    type="radio"
                    name="options"
                    onChange={(event: ChangeEvent) =>
                        setChosen(event.target.value)
                    }
                    id={`option-choice-${option}`}
                    label={<span>{option}</span>}
                    value={option}
                    checked={chosen === option}
                />
            ))}
            {chosen === expected && (
                <div>
                    Points Earned: {points}/{points}
                </div>
            )}
            {chosen !== expected && <div>Points Earned: 0/{points}</div>}
        </div>
    );
}

function ShortAnswerQuestion_C({
    expected,
    points
}: {
    expected: string;
    points: number;
}): JSX.Element {
    const [input, setInput] = useState<string>("");
    return (
        <div>
            <Form.Group>
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={input}
                    onChange={(event: ChangeEvent) =>
                        setInput(event.target.value)
                    }
                />
            </Form.Group>
            {input === expected && (
                <div>
                    Points Earned: {points}/{points}
                </div>
            )}
            {input !== expected && <div>Points Earned: 0/{points}</div>}
        </div>
    );
}

export function Question_C({
    id,
    name,
    body,
    type,
    options,
    expected,
    points,
    published,
    edit
}: new_Question): JSX.Element {
    const [stateName] = useState<string>(name);
    const [stateBody] = useState<string>(body);
    const [stateType] = useState<QuestionType>(type);
    const [stateOptions] = useState<string[]>([...options]);
    const [stateExpected] = useState<string>(expected);
    const [statePoints] = useState<number>(points);
    const [statePublished] = useState<boolean>(published);
    return (
        <div>
            {statePublished && (
                <div>
                    <div>
                        {stateName}: ({statePoints} points) QuestionID: {id}
                    </div>
                    <div>{stateBody}</div>
                    {stateType === "multiple_choice_question" && (
                        <MultipleChoiceQuestion_C
                            options={stateOptions}
                            expected={stateExpected}
                            points={statePoints}
                            edit={edit}
                        ></MultipleChoiceQuestion_C>
                    )}
                    {stateType === "short_answer_question" && (
                        <ShortAnswerQuestion_C
                            expected={stateExpected}
                            points={statePoints}
                        ></ShortAnswerQuestion_C>
                    )}
                </div>
            )}
        </div>
    );
}
