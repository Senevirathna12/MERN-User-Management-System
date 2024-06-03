import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

const UsersTable = ({rows ,selectedUser, deleteUser}) => {
  return (
    <TableContainer>
        <Table>
            <TableHead sx={{
                backgroundColor:'#343A40',
                
            }}>
                <TableRow>
                    <TableCell sx={{ color: '#FFFFFF' }}>RegNo</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>Name</TableCell>
                    <TableCell sx={{ color: '#FFFFFF' }}>Action</TableCell>
                </TableRow>
            </TableHead>

            <TableBody sx={{
                backgroundColor:''
            }}>
                {
                    rows.length > 0 ? rows.map(row =>(
                        <TableRow key={row._id} >
                            <TableCell component='th' scope='row'>{row.regno}</TableCell>
                            <TableCell component='th' scope='row'>{row.name}</TableCell>
                            <TableCell >
                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={()=>{ selectedUser({ regno:row.regno, name:row.name, _id:row._id })}}
                                >
                                    Update
                                </Button>

                                <Button
                                    sx={{margin:'0px 10px'}}
                                    onClick={()=>{deleteUser({_id:row._id})}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )):(
                        <TableRow>
                            <TableCell component='th' scope='row'>No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default UsersTable; 
