import React from "react";

import {Col, Form, Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import EntryTable from "./Entry/EntryTable";
import axios from "axios";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word:'', languageFrom:'Est', entries: [], tempEntries: [], arrow: "->", fuzzyEnabled: false
        };
        this.wordChange = this.wordChange.bind(this);
    };

    wordChange = event => {
        this.setState({
            word: event.target.value
        });

        this.findEntries(event.target.value);
    };

    changeLanguage = () => {
        let tempLanguage = this.state.languageFrom;
        {tempLanguage === 'Est' ? tempLanguage = 'Eng' : tempLanguage = 'Est'}
        {this.state.languageFrom === 'Est' ?
            this.setState({
                languageFrom: 'Eng',
                arrow: "<-",
                word: ''
            }) :
            this.setState({
                languageFrom: "Est",
                arrow: "->",
                word: ''
            })}
            this.setState({
                entries: []
            })
    }

    fuzzyClicked = () => {
        const tempFuzzyEnabled = !this.state.fuzzyEnabled;

        this.setState({fuzzyEnabled: !this.state.fuzzyEnabled});

        this.findEntries(this.state.word, tempFuzzyEnabled);
    }

    findEntries(word = this.state.word, fuzzyEnabled = this.state.fuzzyEnabled, languageFrom = this.state.languageFrom) {
        axios.get("http://localhost:8080/entries")
            .then(response => response.data)
            .then(data => this.setState({tempEntries: data}));

        let suitableEntries = []
        this.state.tempEntries.forEach(entry => {
            if (this.state.languageFrom === 'Est') {
                if (fuzzyEnabled) {
                    if (entry.wordEst.toLowerCase().includes(word.toLowerCase())) {
                        suitableEntries.push(entry);
                    }
                } else {
                    if (entry.wordEst.toLowerCase() === word.toLowerCase()) {
                        suitableEntries.push(entry);
                    }
                }
                suitableEntries.sort((a, b) => a.wordEst.localeCompare(b.wordEst))

            } else {
                if (fuzzyEnabled) {
                    if (entry.wordEng.toLowerCase().includes(word.toLowerCase())) {
                        suitableEntries.push(entry);
                    }
                } else {
                    if (entry.wordEng.toLowerCase() === word.toLowerCase()) {
                        suitableEntries.push(entry);
                    }
                }
                suitableEntries.sort((a, b) => a.wordEng.localeCompare(b.wordEng))
            }
        });

        this.setState({
            entries: suitableEntries
        })
    }

    render() {
        const marginTop = {
            marginTop:"20px"
        };


        return (<>

            <Link to={"/entry"} className="btn btn-primary">
                <i className="fas fa-plus-circle"/> {'   '} New entry
            </Link>

            <Form.Group controlId="formBasicCheckbox" style={marginTop}>
                <Form.Check type="checkbox" label="Fuzzy matches" onClick={() => this.fuzzyClicked()}/>
            </Form.Group>


            <Card className={"border border-dark bg-dark text-white"} style={marginTop}>

                <Card.Body>


                        <Form.Row>
                            <Form.Group as={Col} controlId="wordInEstonian">
                                <h5 className="text-center">
                                    Estonian {'  '}
                                        <Button variant="secondary" onClick={() => this.changeLanguage()}>
                                             {this.state.arrow}
                                        </Button>

                                    {'  '} English
                                </h5>

                                <Form.Control required
                                              type="test" name="word"
                                              value={this.state.word}
                                              onChange={this.wordChange}
                                              autoComplete="off"
                                              className={"bg-dark text-white"}
                                              placeholder={"Enter word to translate"} />
                            </Form.Group>
                        </Form.Row>

                    <br/>

                    <EntryTable entriesToShow = {this.state.entries}/>

                </Card.Body>

            </Card>

        </>);
    }

}