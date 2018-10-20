import React, {Component} from 'react';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory, Router, Route, IndexRedirect, IndexRoute} from 'react-router';

import store from '../../store';
import {MainLayout} from '../pages/MainLayout';
import {FilesPage} from '../pages/FilesPage';
import {JobsPage} from '../pages/JobsPage';
import {TasksPage} from '../pages/TasksPage';

const history = syncHistoryWithStore(hashHistory, store);

class Routes extends Component {
    static displayName = 'Routes';

    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={MainLayout} store={store}>
                    <Route name="files" path="files" component={FilesPage} />
                    <Route name="tasks" path="tasks" component={TasksPage} />
                    <Route name="jobs" path="jobs" component={JobsPage} />
                </Route>
            </Router>
        );
        // return (
        //     <Router history={history}>
        //         <Route exact path="/" component={MainLayout} store={store}>
        //             <IndexRedirect to="files" />
        //             <Route name="files" path="/files" component={FilesPage}>
        //                 <IndexRoute />
        //                 <Route name="add" path="add" component={FileAddPage} />
        //                 <Route path=":fileId">
        //                     <IndexRedirect to="view" />
        //                     <Route path="view" name="view" component={FileViewPage} />
        //                 </Route>
        //             </Route>

        //             <Route name="tasks" path="/tasks" component={TasksPage} />

        //             <Route name="jobs" path="/jobs" component={JobsPage} />
        //         </Route>
        //     </Router>
        // );
    }
}

export {Routes};
