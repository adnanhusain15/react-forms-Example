import React from 'react';
import Example from './Example';



const App: React.FC = () => {
  return (
    <Example />
  )
}

export default App

/*
const config: Array<Array<FormConfig> | FormConfig> = [
    {
      type: 'text',
      valueKey: 'aText',
      fieldProps: {
        label: 'My Text',
        fullWidth: true,
        autoComplete: 'off'
      },

    },
    [{
      type: 'select',
      valueKey: 'aSelect',
      fieldProps: {
        label: 'Select',
        options: [{
          name: 'This is a very long string which migh go out of the div',
          value: 'long string'
        },
        {
          name: 'This is a short String',
          value: 'short string'
        }],
      },
      styles: {
        width: '50%'
      }
    }, {
      type: 'switch',
      valueKey: 'bSwitch',
      fieldProps: {
        label: 'dome',
      },

    }], {
      type: 'checkbox',
      valueKey: 'aCheck',
      fieldProps: {
        header: 'Check box',
        selectOptions: ['option1', 'option2', 'option3']
      }, condition: {
        hidden: true,
        defaultProps: {
          disabled: true,
          color: 'primary',
          header: 'only on 30 and abc'
        },
        truthyProps: {
          disabled: true,
          color: 'secondary'
        },
        logicOpn: 'AND',
        values: [{
          key: 'aText',
          compareValue: '30',
          operator: '>='
        }, {
          key: 'bText',
          compareValue: 'abc',
          operator: '==='
        }]
      }

    },
    {
      type: 'autocomplete',
      valueKey: 'aAutocomplete',
      fieldProps: {
        apiUrl: 'https://mamakoo-api.mithyalabs.com/api/users/autocomplete',
        params: { filter: { doc_type: 'Establishment', limit: 20 }, },
        renderInputProps: { fullWidth: true, label: 'New Autocomplete' },
        getRequestParam: getRequestParam,
        highlighterProps: {
          highlightText: true,
          highlighterStyles: {
            backgroundColor: '#FF0000',
            fontWeight: 900
          }
        }

      },
    },
    {
      type: 'autocomplete',
      valueKey: 'bAutocomplete',
      fieldProps: {
        renderInputProps: { label: 'New Autocomplete with no highlight' },
        options: [{ name: 'abc' }, { name: 'efl' }, { name: 'xyz' }, { name: 'plr' }, { name: 'lol' }],
      },
    },
    {
      type: 'autocomplete',
      valueKey: 'cAutocomplete',
      fieldProps: {
        renderInputProps: { label: 'New Autocomplete with default highlight' },
        options: [{ name: 'abc' }, { name: 'efl' }, { name: 'xyz' }, { name: 'plr' }, { name: 'lol' }],
        highlighterProps: {
          highlightText: true
        }
      },
    },
    {
      type: 'autocomplete',
      valueKey: 'dAutocomplete',
      fieldProps: {
        renderInputProps: { label: 'New Autocomplete with user renderOption' },
        options: [{ name: 'abc' }, { name: 'efl' }, { name: 'xyz' }, { name: 'plr' }, { name: 'lol' }],
        renderOption: renderOption
      },
    }
  ]
*/