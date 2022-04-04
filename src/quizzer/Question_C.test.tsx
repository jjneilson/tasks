import React from "react";
import { render } from "@testing-library/react";
import { Question_C } from "./Question_C";

describe("Question component tests", () => {
    beforeEach(() => {
        render(
            <Question_C
                id={0}
                name="test"
                body="test"
                options={["a", "b", "c"]}
                type="multiple_choice_question"
                expected="c"
                points={1}
                published={true}
            />
        );
    });
});
