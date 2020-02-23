import React, { FC } from 'react'
import { TextFieldProps, TextField } from '@material-ui/core'
import { IFieldProps } from 'react-forms'
import { FormikValues } from 'formik'
import { get } from 'lodash'

export interface IProps extends IFieldProps {
    fieldProps?: TextFieldProps
}
/*CREATING MY OWN TEXT FIELD COMPONENT USING MATERIAL UI TEXTFIELD*/
const MyComponent: FC<IProps> = (props) => {
    const { fieldProps = {} as TextFieldProps, formikProps = {} as FormikValues } = props;
    const updatedProps = {
        ...fieldProps,
        onChange: formikProps.handleChange,
        value: get(formikProps, `values.${fieldProps.name}`) || ''
    };
    return <TextField {...updatedProps} />
}
export default MyComponent