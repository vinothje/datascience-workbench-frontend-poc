import React, {Component} from 'react';
import {MainLayout} from '../MainLayout';

class FilesPage extends Component {
    static displayName = 'FilesPage';

    render() {
        return (
            <div>
                <MainLayout />
                <h1>Files listing...</h1>
            </div>
        );
    }
}

export default FilesPage;
