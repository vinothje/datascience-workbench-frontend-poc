import React, {Component} from 'react';

class FilesPage extends Component {
    static displayName = 'FilesPage';

    componentDidMount() {
        const {actions} = this.props;
        actions.getFileList();
    }

    render() {
        return (
            <div>
                <h1>Files listing...</h1>
            </div>
        );
    }
}

export default FilesPage;
