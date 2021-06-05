import React from 'react';
import Banner from './banner';
import Nav from './nav';
import Category from './category';
import Populer from './populer';
import {Switch, Route} from 'react-router-dom';

export default function Content(params) {
    return(
        <React.Fragment>
            <header className="h-2/10 pr-10 pt-5 w-full">
                <Banner/>
            </header>
            <nav className="h-2/10 w-full">
                <Nav/>
            </nav>
            <section className="h-6/10 w-full">
                <Switch>
                    <Route path={`/category/:id`}>
                        <Category/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/">
                        <Populer/>
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
    
}