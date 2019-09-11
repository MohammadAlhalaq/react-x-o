import React from 'react';
export default class ChildButton extends React.Component {
    state = {
        value: null,
    };

    changevalue = () => {
        this.props.onClick();
        this.setState({ value: this.props.player, winner: this.props.howwin });
    }
    render() {
        const { howwin } = this.props;

        return (
            <div className={`button ${howwin ? 'dis' : this.state.value !== null ? 'dis' : ''}`} onClick={this.changevalue}>{
                this.state.value}
            </div>
        )
    }
}