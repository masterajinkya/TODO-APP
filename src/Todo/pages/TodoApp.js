import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import moment from 'moment';

function TodoApp() {

    const [date, setDate] = useState(0);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
    }, [date]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: '41%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


        const [open, setOpen] = useState(false);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-1 col-lg-3'></div>
                    <div className='col-10 col-lg-6 border borderd todoimg shadow p-3'>
                        <div className='row'>
                            <div className='col-5  col-sm-6 col-lg-8'>
                                <p className='text-white yourthings'>Your Things,</p>
                                <p className='text-white yourthings mt-0'>To Do</p>
                            </div>

                            <div className='col-7 col-sm-6 col-lg-4'>
                                <h6 className='text-white'>{date}</h6>
                                <div className='row text-center text-white'>
                                    <div className='col-6 mt-4 text-warning'>
                                        <h6>1</h6>
                                        <h6>Pending</h6>
                                    </div>
                                    <div className='col-6 mt-4 text-primary'>
                                        <h6>1</h6>
                                        <h6>Complete</h6>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div>
                            <Button onClick={() => setOpen(true)}>Open modal</Button>
                            <Modal
                                open={open}
                                onClose={ () => setOpen(false)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default TodoApp

{/* <img src="https://wallpapershome.com/images/pages/ico_h/25231.jpeg" className=' todoimg' alt=""/> */ }