import React from 'react'
import moment from 'moment';

function TodoApp() {

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
                                <h6 className='text-white'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
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
                    <h1 className='add'>ajinkya</h1>
                    </div>


                </div>


            </div>
        </>
    )
}

export default TodoApp

{/* <img src="https://wallpapershome.com/images/pages/ico_h/25231.jpeg" className=' todoimg' alt=""/> */ }