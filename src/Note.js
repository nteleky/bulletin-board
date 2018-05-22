import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
        this._newText = "yada"
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        });
    }

    save(e) {
        e.preventDefault();
        console.log(this._newText.value);
        this.setState({
            editing: false
        });
    }

    remove() {
        console.log('removing note!');
    }

    renderForm() {
        return (
            <form>
                <textarea ref={input => this._newText = input} />
                <button onClick={this.save}><FaFloppyO /></button>
            </form>
        )
    }

    renderDisplay() {
        return (
            <p> {this._newText.value} </p>
        )
    }

    render() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencil /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        );
    }
}

export default Note;
