import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

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
            loading: true
        };
    }

    render() {
        const { dataList } = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello Teclis! </div>

                            <div className="card-body">This is SSR page!</div>
                            {dataList.length > 0 ? (
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

let { data } = context;

const html = ReactDOMServer.renderToString(<Main dataList={data} />);
dispatch(html);
