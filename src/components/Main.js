import React from "react";
import { Jumbotron, Row, Col, Input, Button, Form } from 'reactstrap';
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
    } else if (percentage <= 40) {
        grade = 'F';
    }


    if (physics == "" || chemistry == "" || maths == "" || computer == "") {
        alert('Please Enter The Marks of Subject');
    }
    else if (physics == 100 || chemistry == 100 || maths == 100 || computer == 100) {

        document.getElementById('result').innerHTML = `Out Of 400 Your Total is ${total} and Percentage is ${percentage}. Your Grade is ${grade} and You Are Pass.`
    }
    else if (physics.length > 2) {
        document.getElementById('phys').innerHTML = `Please Enter the Marks Between 1 to 100`
    }
    else if (chemistry.length > 2) {
        document.getElementById('chem').innerHTML = `Please Enter the Marks Between 1 to 100`
    }
    else if (maths.length > 2) {
        document.getElementById('math').innerHTML = `Please Enter the Marks Between 1 to 100`
    }
    else if (computer.length > 2) {
        document.getElementById('web').innerHTML = `Please Enter the Marks Between 1 to 100`
    }
    else if (grade == 'F') {
        document.getElementById('result').innerHTML = `Out Of 400 Your Total is ${total} and Percentage is ${percentage}. Your Grade is ${grade} and You Are Fail.`
    } else if (grade == 'A+' || grade == 'A' || grade == 'B+' || grade == 'B' || grade == 'C+' || grade == '') {
        document.getElementById('result').innerHTML = `Out Of 400 Your Total is ${total} and Percentage is ${percentage}. Your Grade is ${grade} and You Are Pass.`
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
                        <Form>
                            <div className="form-group">
                                <Input type="number" id="physics" className="form-control shadow-none" placeholder="Physics"></Input>
                                <Row><span id="phys"></span></Row>
                            </div>
                            <div className="form-group">
                                <Input type="number" id="chemistry" className="form-control shadow-none" placeholder="Chemistry"></Input>
                                <Row><span id="chem"></span></Row>
                            </div>
                            <div className="form-group">
                                <Input type="number" id="maths" className="form-control shadow-none" placeholder="Maths"></Input>
                                <Row><span id="math"></span></Row>
                            </div>
                            <div className="form-group">
                                <Input type="number" id="web-programming" className="form-control shadow-none" placeholder="Web Programming"></Input>
                                <Row><span id="web"></span></Row>
                            </div>
                            <Button className="btn shadow-none" onClick={grade}>Show Percentage</Button>
                        </Form>
                    </Col>
                </Row>
                <p id="result"></p>
            </Jumbotron>
        </div>
    );
}
export default Main;