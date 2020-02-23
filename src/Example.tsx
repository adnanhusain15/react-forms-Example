import React, { FC } from 'react'
import { FormikValues } from 'formik'
import { ReactForm, FormConfig, IFormActionProps, IFieldProps, attachField, setDefaultProps } from 'react-forms'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import * as Yup from 'yup'
import { get } from 'lodash'
import Highlighter from "react-highlight-words";
import MyComponent from './MyComponent'
import { MUIFileUpload } from './MUIFileUpload'

/*ATTACHING THE COMPONENT TO react-forms LIBRARY USING THE attachField METHOD*/
attachField('my-text-component', <MyComponent />, { label: 'My text Component' })
attachField('fileUpload', <MUIFileUpload />, { label: 'My text Component' })
/*setting default fieldprops for the Textfield component. This would serve as default props throughtout the Project.*/
setDefaultProps('text', { fullWidth: true, color: 'secondary', autoComplete: 'off' });


const Example: FC = () => {
    const formValidator = Yup.object({
        firstName: Yup.string().required('Required')

    })
    /*CUSTOM RENDER OPTIONS COMPONENT FOR AUTOCOMPLETE*/
    const renderOption = (option: { name: string }, { inputValue = '' as string }: any) => {
        return (
            <div>
                <Highlighter
                    searchWords={[inputValue]}
                    textToHighlight={option.name}
                    highlightStyle={{ backgroundColor: '#0000ff' }}
                />
            </div>
        );
    }
    const formConfig: Array<Array<FormConfig> | FormConfig> = [[{
        type: 'text',
        valueKey: 'firstName',
        fieldProps: {
            label: 'First Name'
        },
        styles: {

        }
    }, {
        type: 'text',
        valueKey: 'lastName',
        fieldProps: {
            label: 'Last name'
        }
    }],
    [{
        type: 'radio',
        valueKey: 'myRadio',
        fieldProps: {
            radioGroupProps: {
                row: true
            },
            options: ['Male', 'Female'],
            header: 'Gender',
            headerProps: {
                color: 'primary',
                required: true
            },
        }
    }, {
        type: 'text',
        valueKey: 'myAge',
        fieldProps: {
            type: 'number',
            fullWidth: true
        },
        condition: {
            defaultProps: {
                disabled: true,
                label: 'Age (Enable only for male)',
                color: 'secondary'
            },
            truthyProps: {
                color: 'primary',
                disabled: false,
                label: 'Age'
            },
            logicOpn: 'AND',
            values: [{
                key: 'myRadio',
                compareValue: 'Male',
                operator: '==='
            }]
        }
    }],
    {
        type: 'checkbox',
        valueKey: 'myChechbox',
        fieldProps: {
            checkboxProps: {
                size: 'small'
            },
            checkGroupProps: {
                row: true
            },
            options: [
                { name: 'Option 1', value: 'option_1' },
                { name: 'Option 2', value: 'option_2' },
                { name: 'Option 3', value: 'option_3' },
                { name: 'Option 4', value: 'option_4' },
                { name: 'Option 5', value: 'option_5' }],
            header: 'Select an option',
            headerProps: {
                color: 'primary',
            },
        },
        styles: {

        }
    },
    {
        type: 'autocomplete',
        valueKey: 'myAutocomplete',
        fieldProps: {
            options: [{ name: 'abc' }, { name: 'efl' }, { name: 'xyz' }, { name: 'plr' }, { name: 'lol' }],
            highlighterProps: {
                highlightText: true,
                /* Default highlighting will be used. Uncomment below statements to use your own highlight style*/
                // highlighterStyles: {
                //     backgroundColor: '#add8e6',
                //     fontWeight: 700
                // }
            }
        }
    }, {
        type: 'autocomplete',
        valueKey: 'myAutocomplete2',
        fieldProps: {
            renderInputProps: {
                label: 'Autocomplete with custom renderOption'
            },
            options: [{ name: 'abc' }, { name: 'efl' }, { name: 'xyz' }, { name: 'plr' }, { name: 'lol' }],
            renderOption: renderOption,
        }
    },
    {
        type: 'my-text-component',
        valueKey: 'myComponent',
        fieldProps: {
            fullWidth: true
        }
    },
    {
        type: 'fileUpload',
        valueKey: 'myFileUploader',
        styles: {
            height: '100%'
        }
    }
    ]

    const onSubmit = (values: object) => {
        console.log(values);
    }

    const formActionConfig: IFormActionProps = {
        submitButtonText: 'Submit my form!',
        submitButtonLayout: 'fullwidth',
    }

    return <div style={{ width: 480, margin: '0 auto' }}>
        <ReactForm
            formId={'testForm'}
            config={formConfig}
            initialValues={{ myRadio: 'Male', myChechbox: [] }}
            actionConfig={formActionConfig}
            onSubmit={onSubmit}
            validationSchema={formValidator}
        />
    </div>
}
export default Example
