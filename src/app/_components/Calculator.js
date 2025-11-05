"use client"
import { useState } from "react";
import { kodeMono } from "../layout.js";

function NumberButton({ number, state }) {
    return (
        <button onClick={() => {
            state[1](state[0] + state[2] + number.toString());
            state[3]("");
            if (state[6] == "expression") {
                state[5](state[4] + number.toString());
            } else {
                state[5](number.toString());
                state[7]("expression");
            }
        }}>{number}</button>
    );
}

function OperatorButton({ operator, state }) {
    return (
        <button onClick={() => {
            state[0](operator);
            state[2](state[1] + operator);
        }}>{operator}</button>
    );
}

function Break() {
    return (
        <div style={{
            width: "100%"
        }}></div>
    );
}

export default function Calculator() {
    const [expression, updateExpression] = useState("");
    const [tempOperator, updateTempOperator] = useState("");
    const [display, changeDisplay] = useState("");
    const [answerOrExpression, changeAnswerOrExpression] = useState("expression");

    let numberButtonList = [<OperatorButton key="." operator="." state={[updateTempOperator, display, changeDisplay]} />]
    for (let i = 0; i <= 9; i++) {
        numberButtonList.push(<NumberButton key={i} number={i} state={[expression, updateExpression, tempOperator, updateTempOperator, display, changeDisplay, answerOrExpression, changeAnswerOrExpression]} />)
        if (i % 3 == 0 && i != 9) {
            numberButtonList.push(<Break key={"br" + i} />);
        }
    }

    function clear() {
        updateExpression("");
        updateTempOperator("");
        changeDisplay("");
        changeAnswerOrExpression("expression");
    }

    return (
        <div style={{
            width: "360px",
            padding: "30px",
            backgroundColor: "#a9fff1ff",
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
            boxShadow: "4px 4px 8px 5px #86a3b5ff",
            margin: "auto",
            borderRadius: "10px"
        }}>
            <p style={{
                marginTop: "0",
                backgroundColor: "#a876ffff",
                color: "white",
                padding: "8px",
                fontSize: "1.6em",
                overflowX: "auto",
                width: "300px"
            }}>{display}</p>
            <div id="operator-div">
                <OperatorButton operator="+" state={[updateTempOperator, display, changeDisplay]} />
                <OperatorButton operator="-" state={[updateTempOperator, display, changeDisplay]} />
                <OperatorButton operator="*" state={[updateTempOperator, display, changeDisplay]} />
                <OperatorButton operator="/" state={[updateTempOperator, display, changeDisplay]} />
            </div>
            <Break />
            {numberButtonList}
            <Break />
            <button onClick={() => {
                if (!isNaN(eval(expression))) {
                    changeDisplay(eval(expression));
                    changeAnswerOrExpression("answer");
                    updateExpression("");
                    updateTempOperator("");
                } else {
                    clear();
                    changeAnswerOrExpression("answer");
                    changeDisplay("NOT ALLOWED!!!")
                }
            }} style={{
                backgroundColor: "#a876ffff",
                color: "white"
            }}>=</button>
            <button onClick={clear} style={{
                backgroundColor: "#a876ffff",
                color: "white"
            }}>C</button>
        </div>
    );
}