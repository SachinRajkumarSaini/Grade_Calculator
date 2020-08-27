import React from "react";
import { Jumbotron, Row, Col, Input, Button } from 'reactstrap';
import "./main.css";

document.body.style = 'background-color: #27c5b6;';
let grade = () => {
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let maths = document.getElementById('maths').value;
    let computer = document.getElementById('web-programming').value;
    let total = parseFloat(physics) + parseFloat(chemistry) + parseFloat(maths) + parseFloat(computer);
    let percentage = total / 400 * 100;
    let grade = "";


    if (physics === 0 && chemistry === 0 && maths === 0 && computer === 0) {
        alert('Please Enter The Marks of All Subject');
    } else {

        if (percentage <= 100 && percentage >= 90) {
            grade = 'A+';
        } else if (percentage < 90 && percentage >= 80) {
            grade = 'A';
        } else if (percentage < 80 && percentage >= 70) {
            grade = 'B+';
        } else if (percentage < 70 && percentage >= 60) {
            grade = 'B';
        } else if (percentage < 60 && percentage >= 50) {
            grade = 'C+';
        } else if (percentage < 50 && percentage > 40) {
            grade = 'C';
        } else {
            grade = 'F';
        }

        if (grade === 'F') {
            document.getElementById('result').innerHTML = `Out Of 400 Your Total is ${total} and Percentage is ${percentage} <br> Your Grade is ${grade} and You Are Fail.`
        } else {
            document.getElementById('result').innerHTML = `Out Of 400 Your Total is ${total} and Percentage is ${percentage} <br> Your Grade is ${grade} and You Are Pass.`
        }
    }
}

const Main = () => {
    return (
        <div className="main-area">
            <Jumbotron className="jumbotron">
                <Row className="row">
                    <Col lg="6" sm="12" className="text-area">
                        <ul><li>S</li><li>T</li><li>U</li><li>D</li><li>E</li><li>N</li><li>T</li></ul>
                        <ul><li>G</li><li>R</li><li>A</li><li>D</li><li>E</li></ul>
                        <ul><li>C</li><li>A</li><li>L</li><li>C</li><li>U</li><li>L</li><li>A</li><li>T</li><li>O</li><li>R</li></ul>
                    </Col>
                    <Col lg="6" sm="12" className="input-area">
                        <Row className="physics"><Input type="text" className="input" id="physics" placeholder="Physics"></Input></Row>
                        <Row className="chemistry"><Input type="text" className="input"  id="chemistry" placeholder="Chemistry"></Input></Row>
                        <Row className="maths"><Input type="text" className="input"  id="maths" placeholder="Maths"></Input></Row>
                        <Row className="web-programming"><Input type="text" className="input"  id="web-programming" placeholder="Web Programming"></Input></Row>
                        <Row className="button"><Button class="btn" onClick={grade}>Show Percentage</Button></Row>
                    </Col>
                </Row>
                <p id="result"></p>
            </Jumbotron>
        </div>
    );
}
export default Main;