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
        console.log('editing note!');
        this.setState({
            editing: true
        });
    }

    save(e) {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({
            editing: false
        });
    }

    remove() {
    }

    renderForm() {
        return (
            <form onSubmit={this.save}>
                <textarea ref={input => this._newText = input} />
                <button><FaFloppyO /></button>
            </form>
        )
    }

    renderDisplay() {
        return (
            <div className="editing">
                <p> {this.props.children} </p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencil /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        );
    }

    render() {
        return (
            <div className="note">
                {this.state.editing ? this.renderForm() : this.renderDisplay()}
            </div>
        );
    }
}

export default Note;
