import { Button, Grid, Input, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UserForm = ({addUser , submitted , data , isEdit, updateUser}) => {

    const [regno ,setRegno] = useState(0);
    const [name, setName] = useState("");
    const [id, setId] = useState(null);

    useEffect(() => {
        if(!submitted){
            setId(null); // reset _id when data is not submitted 
            setRegno(0);
            setName('');
        }
    },[submitted])

    useEffect(() => {

        if(data){
            setRegno(data.regno);
            setName(data.name);
            setId(data._id);
        }

    },[data])

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#F0F0F0',
                marginBottom: '30px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a shadow for depth
                maxWidth: '600px', // Set maximum width of form container
                margin: '0 auto' // Center form container horizontally
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h4" sx={{color: '#000000', marginBottom: '20px'}}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography component={'label'} htmlFor='regno' sx={{ color: '#000000', fontSize: '16px', display: 'block', marginBottom: '5px' }}>
                    RegNo :
                </Typography>
                <Input
                    type='number'
                    id='regno'
                    name='regno'
                    sx={{ width: '100%', borderColor: 'CCCCCC' }}
                    value={regno}
                    onChange={e => setRegno(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography component={'label'} htmlFor='name' sx={{ color: '#000000', fontSize: '16px', display: 'block', marginBottom: '5px' }}>
                    Name :
                </Typography>
                <Input
                    type='text'
                    id='name'
                    name='name'
                    sx={{ width: '100%', borderColor: 'CCCCCC' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#007BFF',
                        color: '#FFFFFF',
                        "&:hover": {
                            backgroundColor: '#00c6e6'
                        },
                        display: 'block', // Make the button full width
                        margin: '20px auto 0' // Center button horizontally and add top margin
                    }}
                    onClick={() => {
                        isEdit ? updateUser({ _id: id, regno, name }) : addUser({ regno, name }); // Pass _id for update
                    }}
                >
                    {isEdit ? 'Update' : 'Add'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default UserForm;
