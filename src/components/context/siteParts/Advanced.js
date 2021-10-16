import React,{useState,useContext} from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdvancedContext from '../advancedContext/advancedContext'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './Modalcss/advanced.css'

toast.configure()
Modal.setAppElement('#root')

export const Advanced = () => {

    const advancedContext = useContext(AdvancedContext)
    const {addAdvancedForm} =advancedContext

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:'' 
        },
        onSubmit:values =>{
            addAdvancedForm(values)
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

    const [advanced,setAdvanced]= useState('')
    const [modal,setModal] = useState(false)


    const notify = ()=>{
        toast(`Thank you ${name.split(' ')[0]}, i will contact you soon enough`,{
            
            autoClose: 4000,
            hideProgressBar: true,
            bodyClassName:'grow-font-size3',
            theme:'light'
            
            
            })
    }

    return (
        <div>
                <div className="col-3" >
                  <div className="card" data-aos='fade-left'>
                    <div className="col-side col-side-front col-3">
                            <div className="col-picture col-picture-3">
                            &nbsp; 
                            </div>
                            <div className="col-heading">
                            <span className="card-heading-span card-heading-span-3">Elite</span>
                                
                            </div>
                            <div className="col-details">
                                    <ul>
                                        <li>2 monitors or more</li>
                                        <li>Razer BlackWidow Keyboard</li>
                                        <li>Thrustmaster ESWAP X PRO Gamepad</li>
                                        <li className='more-elite'>More</li>
                                    </ul>
                            </div>
                    </div>
                    <div className="col-side col-side-back col-side-back-3 col-3">
                        <div className="card-cta">
                                   <div className="card-price-box">
                                       <div className="card-price-only">Only</div>
                                       <div className="card-price-value">$10,000</div>
                                   </div>
                                   <button  type='button' onClick={()=>{setModal(true)}}  className='btn btn--white btn-elite'>Subscribe</button>

                                   <Modal isOpen={modal}  className="Modal"
                                      overlayClassName="Overlay" onRequestClose={()=>setModal(false)}>
                                      <h1 className='sub-h3'>Fill Form</h1>

                                      <p className='p3'>Feel free to click outside the modal to exit</p>
                                      <form className='form' onSubmit={formik.handleSubmit}> 
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <input type="text" name="name" className='advanced' placeholder='Name' {...formik.getFieldProps('name')}/>
                                                    {formik.touched.name && formik.errors.name ? <div className='error'><i className="fas fa-exclamation-circle"></i> {formik.errors.name}</div> :null}
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" name="email" className='advanced' placeholder='Email' {...formik.getFieldProps('email')}/>
                                                    {formik.touched.email && formik.errors.email ? <div className='error'><i className="fas fa-exclamation-circle"></i> {formik.errors.email}</div> :null}
                                                </div>
                                            </div>

                                            <div className="form-group sub-3">
                                                    <input type="text" name="advanced" placeholder= 'Advanced' value={advanced} onChange= {e=>setAdvanced(e.target.value)} disabled/>
                                                </div>

                                            <div className="form-group">
                                              <textarea name="message"   className='advanced' cols="30" rows="6" placeholder='Anything else:' value={message} onChange={formik.handleChange}></textarea>
                                            </div>

                                            <button type='submit' className= 'btn btn-advanced' >Submit</button>
                                      </form>
                                   </Modal>






                        </div>  
                    </div>
                  </div>
                </div>
        </div>
    )
}
