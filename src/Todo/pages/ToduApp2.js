import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import moment from 'moment';
import { FormControlLabel, FormControl, Radio, RadioGroup } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import Popup from "./Popup"

function ToduApp2() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [time, setTime] = useState(0);
    const [formData, setFormData] = useState({
        role: 'personal',
        name: '',
        info: '',
        // status:'pending'
    })
    const tododata = JSON.parse(localStorage.getItem("todo")) || [];
    const [data, setData] = useState(tododata || []);
    const [edit, setEdit] = useState(false);
    const [todoEdit, setTodoEdit] = useState();
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);



    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, id: uuidv4(), status: 'pending', [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
        localStorage.setItem('todo', JSON.stringify([...data, formData]))
        setFormData({ role: 'personal', name: '', info: '' })
        setEdit(false)

    }
    // const handleDone = (id) => {
    //     const doneTodo = data?.find((user) => user.id === id)
    //     if (doneTodo) {
    //         const updatedata = data?.map((user) => {
    //             if (user.id === id) {
    //                 return { ...user, status: "btn-danger" }
    //             }
    //             console.log("btn-success");
    //             return user
    //         })
    //         localStorage.setItem("todo", JSON.stringify(updatedata))
    //         navigate("/dashbord/admin")
    //     }
    // }

    const handleEdit = (id) => {
        setOpen(true)
        setEdit(true)
        const finduser = data.find((ele) => ele.id === id)
        setFormData(finduser)
        setTodoEdit(id)
    }

    const handleUpDateTodu = (e) => {
        e.preventDefault()
        data.splice(todoEdit, 1, formData)
        setData([...data])
        localStorage.setItem('todo', JSON.stringify([...data]))
        setEdit(false)
        setFormData({ role: 'personal', name: '', info: '' })

    }

    const handleDelete = (id) => {
        setSelectedItemId(id);
        setConfirmationPopupOpen(true);
    }

    const handleDeleteClick = (id) => {
        const deleteData = data.filter((item) => item.id !== id)
        setData(deleteData)
        localStorage.setItem('todo', JSON.stringify(deleteData))

        setConfirmationPopupOpen(false);
    };
    const closeConfirmationPopup = () => {
        setSelectedItemId(null);
        setConfirmationPopupOpen(false);
    };







    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);
    }, [time]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 border borderd todoimg shadow p-3'>
                        <div className='row'>
                            <div className='col-5  col-sm-6 col-md-8'>
                                <p className='text-white yourthings'>Your Things,</p>
                                <p className='text-white yourthings mt-0'>To Do</p>
                            </div>

                            <div className='col-7 col-sm-6 col-md-4'>
                                <h6 className='text-white'>{time}</h6>
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
                    <div className='col-1 col-md-2'></div>
                    <div className='col-10 col-md-8 border borderd maintodo shadow p-3'>
                        <div>
                            <div className='text-center mb-3'>
                                <button className='btn btn-success' onClick={() => setOpen(true)}>+ Add Todo</button>
                            </div>

                            <Modal
                                open={open}
                                onClose={() => setOpen(false)}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description" >
                                <Box sx={style} className='box'>

                                    <form onSubmit={handleSubmit}>
                                        <div className='row'>
                                            <div className='col-12 col-sm-6 col-md-4 mb-3 '>
                                                <div className='form-group'>
                                                    <input type='text' className='form-control bg-light' placeholder='Todo Name'
                                                        name='name' value={formData.name} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-6 col-md-8 mb-3 '>
                                                <div className='form-group'>
                                                    <input type='text' className='form-control bg-light' placeholder='Todo info'
                                                        name='info' value={formData.info} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-6 col-md-6 mb-3 '>
                                                <div className='form-group'>
                                                    <FormControl>
                                                        <RadioGroup row name='role' defaultValue="personal">
                                                            <FormControlLabel value="personal" control={<Radio />} label="Personal" onChange={handleChange} />
                                                            <FormControlLabel value="business " control={<Radio />} label="Business " onChange={handleChange} />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-6 col-md-4 mb-3 '>
                                                <div className='form-group'>
                                                    {edit ? <button onClick={handleUpDateTodu} type='submit' className='btn btn-success'>Update</button> :
                                                        <button type='submit' className='btn btn-success'>Add Todo</button>}
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </Box>
                            </Modal>
                        </div>
                        <div className="row p-lg-2 mt-4">
                            <table class="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th scope="col">Todo </th>
                                        <th scope="col">Todo Info</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((todo) => {
                                        return (
                                            <tr scope="row" className={todo.role}>
                                                <td>{todo.name}</td>
                                                <td >{todo.info}</td>
                                                <td className='align d-flex  justify-content-between'><button onClick={() => handleEdit(todo.id)} className='btn p-0 text-primary '><ModeEditIcon /></button>
                                                    <button onClick={() => handleDelete(todo.id)} className='btn p-0 text-danger'><DeleteOutlineIcon /></button></td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <Popup
                    isOpen={isConfirmationPopupOpen}
                    onClose={closeConfirmationPopup}
                    onDelete={() => handleDeleteClick(selectedItemId)}
                />
        </>
    )
}

export default ToduApp2
