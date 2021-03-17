import React from 'react'
import { Formik, Form, Field } from 'formik';
import './Form.css'

const Contact = props => {

    function onSubmit() {
        console.log('Submissão funcionando')
    }

    return (
        <div className='col'>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={onSubmit}
                render={() => (
                    <Form>
                        <div>
                            <Field type="text" name="name" />
                        </div>
                        <div>
                            <Field type="text" name="surname" />
                        </div>
                        <div>
                            <Field type="email" name="email" />
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}

export default Contact