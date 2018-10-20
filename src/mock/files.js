import {fakeResponse} from '../util/mock';

export const getFileList = () => {
    const fileList = [
        {id: 1, name: 'file1'},
        {id: 2, name: 'file2'},
        {id: 3, name: 'file3'},
    ];
    return fakeResponse(fileList);
}
