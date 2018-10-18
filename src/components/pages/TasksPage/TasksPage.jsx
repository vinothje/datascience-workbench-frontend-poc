import React, {Component} from 'react';
import { MainLayout } from '../MainLayout';

class TasksPage extends Component {
    static displayName = 'TasksPage';

    render() {
        return (
            <div>
                <MainLayout />
                <h1>Tasks listing...</h1>
            </div>        );
    }
}

export default TasksPage;
