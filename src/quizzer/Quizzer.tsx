import React from "react";
import appSketch from "../Assets/sketch.jpg";
import { Question } from "../interfaces/question";
import { QuizList } from "./QuizList";

/*
Users can see a list of quizzes, including the quizzes title, description, and how many questions it has 
Users can select a specific quiz to see the questions, including the question’s name, body, and points Quiz questions can be of AT LEAST two types: a short answer question or multiple choice question 
Users can enter or choose an answer for a quiz question, and be told if they are correct 
Users can see how many total points they have earned Users can clear out their existing answers for a quiz
Users can publish or unpublish a question Users can filter the questions in a list so that only published questions are shown
Users can edit the questions and fields of a quiz
Users can add a new quiz question
Users can delete an existing quiz question
Users can reorder quiz questions
Users can add a new quiz
Users can delete an existing quiz
*/

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

export function Quizzer(): JSX.Element {
    return (
        <div>
            <QuizList quizzes_in={PREMADES}></QuizList>
            <hr></hr>
            <img src={appSketch} alt="App Sketch" />
            <ul>
                <li>Added Sketch</li>
                <li>
                    Users can see a list of quizzes, including the quizzes
                    title, description, and how many questions it has
                </li>
                <li>
                    Users can select a specific quiz to see the questions,
                    including the question’s name, body, and points Quiz
                    questions can be of AT LEAST two types: a short answer
                    question or multiple choice question
                </li>
                <li>
                    Users can enter or choose an answer for a quiz question, and
                    be told if they are correct
                </li>
                <li>Users can add a new quiz</li>
                <li>Users can delete an existing quiz</li>
                <li>Users can add a new quiz question</li>
                <li>Users can delete an existing quiz question</li>
            </ul>
        </div>
    );
}
