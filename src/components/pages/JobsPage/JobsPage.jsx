import React, {Component} from 'react';
import { MainLayout } from '../MainLayout';

class JobsPage extends Component {
    static displayName = 'JobsPage';

    render() {
        return (
            <div>
                <MainLayout />
                <h1>Jobs listing...</h1>
            </div>
        );
    }
}

export default JobsPage;
