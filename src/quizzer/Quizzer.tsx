import React from "react";
import appSketch from "../Assets/sketch.jpg";
import { QuizList } from "./QuizList";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <QuizList></QuizList>
            <hr></hr>
            <img src={appSketch} alt="App Sketch" />
            <ul>
                <li>Added Sketch</li>
                <li>Can add a new quiz</li>
            </ul>
        </div>
    );
}
