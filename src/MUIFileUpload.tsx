import React, { FC, useState } from 'react'
import { Button, Input, Typography, Box, FilledInput, OutlinedInput } from '@material-ui/core'
export const MUIFileUpload: FC = () => {
    const [isUpload, setIsUpload] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0)
            console.log(e.target.files[0]);
        (e.target.files) ? setIsUpload(true) : setIsUpload(false)
    }
    return <Box display='flex' justifyContent='space-between'>
        <Input
            style={{ flex: 1 }} type={'file'} placeholder={'File upload'} onChange={handleChange} >'Input'</Input>
        <Button size='medium' variant='outlined' disabled={isUpload}>Save File</Button></Box>
}