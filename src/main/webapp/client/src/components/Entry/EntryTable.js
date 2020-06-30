import React from "react";

import {Table, Image, ButtonGroup, Button} from 'react-bootstrap';
import axios from 'axios';
import {Link} from "react-router-dom";
import MyToast from "../MyToast";

export default class EntryTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        entries: []
    };

    componentDidMount() {
        this.setState({
            entries: this.props.entriesToShow
        })
    }

    deleteEntry = (entryId) => {
        axios.delete("http://localhost:8080/entries/"+entryId)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        entries: this.state.entries.filter(entry => entry.id !== entryId)
                    });
                    setTimeout(() => window.location.reload(false), 500);
                } else {
                    this.setState({"show":false});
                }
            });
    };

    render() {

        return (<>

            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast show={this.state.show} message="Entry deleted successfully." type="danger"/>
            </div>

            <Table bordered hover striped variant="dark">

                <thead>
                <tr>
                    <th>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" width="25" height="25"/>
                        {'  '} Estonian
                    </th>
                    <th>
                        <Image src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" width="25" height="25"/>
                        {'  '} English
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
                </thead>

                <tbody>
                {
                    this.props.entriesToShow.length === 0 ?
                        <tr className="text-center">
                            <td colSpan="6">No entries available</td>
                        </tr> :
                        this.props.entriesToShow.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.wordEst}</td>
                                <td>{entry.wordEng}</td>
                                <td>
                                    <ButtonGroup>

                                        <Link to={"edit/"+entry.id} className="btn btn-light"><i className="far fa-edit"/></Link>
                                        {'  '}

                                        <Button variant="danger" onClick={() => this.deleteEntry(entry.id)}>
                                            <i className="far fa-trash-alt"/>
                                        </Button>

                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))
                }
                </tbody>

            </Table>

        </>);
    }

}