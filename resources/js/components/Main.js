import React, { Component } from "react";
import ReactDOM from "react-dom";

function Item(props) {
    return (
        <li>
            {props.item.id}: {props.item.text}
        </li>
    );
}

function List(props) {
    return (
        <ul>
            {props.arr.map(item => {
                return <Item key={item.id} item={item} />;
            })}
        </ul>
    );
}

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: window.store,
            counter: 0,
            loading: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            console.log("tic", this.state.loading, this.state.dataList);
            this.setState({
                loading: !this.state.loading
            });
        }, 2000);
    }

    handleClick() {
        this.setState(state => ({
            counter: this.state.counter + 1
        }));
    }

    render() {
        const { dataList, loading, counter } = this.state;
        console.log("render");
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello Teclis!</div>

                            <div className="card-body">
                                This is regular render page
                            </div>
                            <div> counter: {counter}</div>
                            <button onClick={this.handleClick}>
                                increment
                            </button>
                            {dataList.length > 0 && !loading ? (
                                <List arr={dataList} />
                            ) : (
                                "Loading..."
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
