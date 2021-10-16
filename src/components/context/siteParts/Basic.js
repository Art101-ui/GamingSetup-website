import React,{useState,useContext} from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BasicContext from '../basicContext/basicContext'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './Modalcss/basic.css'

toast.configure()
Modal.setAppElement('#root')

export const Basic = () => {

    const basicContext = useContext(BasicContext)
    const {addBasicForm} =basicContext

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:'' 
        },
        onSubmit:values =>{
            addBasicForm(values)
            setModal(false)
            notify()
            formik.resetForm()          
        },
        validationSchema: Yup.object({
            name:Yup.string().required('Your name is not entered'),
            email:Yup.string()
                 .email(`Please enter your email address in format: name@example.com`)
                 .required('Your email address is not entered')
        })
            
    }    
    )
    
    const {name,message} = formik.values


    const [basic,setBasic]= useState('')
    const [modal,setModal] = useState(false)

    const notify = ()=>{
        toast(`Thank you ${name.split(' ')[0]}, i will contact you soon enough`,{
            
            autoClose: 4000,
            hideProgressBar: true,
            bodyClassName:'grow-font-size1',
            theme:'light'
            
            
            })
    }


    return (
        <div>
            <div className="col-1" >
                    <div className="card" data-aos='fade-right'>
                        <div className=" col-side col-side-front  col-1">
                                <div className="col-picture col-picture-1">
                                    &nbsp;
                                </div>
                                <h4 className="col-heading">
                                   <span className="card-heading-span card-heading-span-1">Basic</span>
                                    
                                </h4>
                                <div className="col-details">
                                    <ul>
                                        <li>1 monitor</li>
                                        <li>Normal keyboard</li>
                                        <li>Gamepad</li>
                                        <li>Steeless Arctics Headset</li>
                                    </ul>
                                </div>
                        </div>
                        <div className=" col-side  col-side-back col-side-back-1 col-1">
                               <div className="card-cta">
                                   <div className="card-price-box">
                                       <div className="card-price-only">Only</div>
                                       <div className="card-price-value">$1,000</div>
                                   </div>
                                     <button type='button' onClick={()=>{
                                         setModal(true)
                                          setBasic(basic)}}  className='btn btn--white btn-basic'>Subscribe</button>


                                   <Modal isOpen={modal}  className="Modal "
                                      overlayClassName="Overlay" onRequestClose={()=>setModal(false)}>
                                      <h1 className='sub-h1'>Fill Form</h1>

                                      <p className='p1'>Feel free to click outside the modal to exit</p>
                                      <form className='form' onSubmit= {formik.handleSubmit} > 
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <input type="text" className= 'basic' name="name" placeholder='Name' {...formik.getFieldProps('name')}/>
                                                    {formik.touched.name && formik.errors.name ? <div className='error'><i className="fas fa-exclamation-circle"></i> {formik.errors.name}</div> :null}
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" name="email" className= 'basic' placeholder='Email' {...formik.getFieldProps('email')}/>
                                                   {formik.touched.email && formik.errors.email ? <div className='error'><i className="fas fa-exclamation-circle"></i> {formik.errors.email}</div> :null}
                                                </div>
                                            </div>

                                            <div className="form-group sub-1">
                                                    <input type="text" name="basic" placeholder= 'Basic' value={basic}  style={{
                                          color:'darkOrange'}} disabled/>
                                                </div>

                                            <div className="form-group">
                                              <textarea name="message" className= 'basic'  cols="30" rows="6" placeholder='Anything else:'  value={message} onChange= {formik.handleChange}></textarea>
                                            </div>

                                            <button  type = 'submit' className= 'btn btn-basic'>Submit</button>
                                      </form>
                                   </Modal>
                               </div>  
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}
