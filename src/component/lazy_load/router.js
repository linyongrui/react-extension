import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Loading from './loading'

const About = lazy(() =>  import('./about/about.js') )
const Home = lazy(() => {return import('./home/home.js') })

export default class router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <Link className="list-group-item" to="/about">About</Link>
                                <Link className="list-group-item" to="./home">Home</Link>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Suspense fallback={Loading}>
                                        <Route path="/about" component={About}></Route>
                                        <Route path="/home" component={Home}></Route>
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
