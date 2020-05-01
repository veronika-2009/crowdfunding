import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const tags = [
    'Food', 'Game', 'Books',
    'Gastronomi', 'Litteratur', 'Covid19', 'Social innovatii', 'Sport',
    'Music', 'Film',
    'Boger', 'Magazine', 'Vegan', 'Charity', 'Help'
];

const AutoCompleteFilter = () => {
    return (
        <div>
              <MuiThemeProvider>
            <AutoComplete
                floatingLabelText="Enter tag"
                filter={AutoComplete.fuzzyFilter}
                dataSource={tags}
                maxSearchResults={5}
            />
            </MuiThemeProvider>
        </div>
    )
};

export default AutoCompleteFilter;
