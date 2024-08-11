import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import "./AddPatient.css"
function AddPatient() {

    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [grade, setGrade] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [branch, setBranch] = useState('')
    const [photo, setPhoto] = useState('')


    useEffect(()=>{
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    
        if(currentUser){
          setUser(currentUser)
        }
    
        if(!currentUser){
          window.location.href = "/login"
        }
      },[])

      const addStudent = async ()=>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/student`,{
            user: user._id,
            name,
            age,
            grade,
            address,
            phone,
            email,
            branch,
            photo
        })
        console.log(response)
        if(response.data.success){
          toast.success("Patient Details Added Successfully")

          setName('')
          setAge('')
          setGrade('')
          setAddress('')
          setPhone('')
          setEmail('')
          setBranch('')
          setPhoto('')
        }
        else{
          toast.error("Failed to Add Student Details")
        }

      

        setTimeout(() => {
            window.location.href = "/"
        }, 1000);
      }


  return (
    <div>
        <div className='form-div'>
        <form action="" className='form'>

        <h2 className='heading'>Add Appointment Details 🏥</h2>

            <input
            type="text"
            placeholder="Patient Name"
            className="user-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            type="number"
            placeholder="Patient's Age"
            className="user-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
            <input
            type="text"
            placeholder="Patient's Blood Group"
            className="user-input"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            />
            <input
            type="text"
            placeholder="Patient's Address"
            className="user-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <input
            type="number"
            placeholder="Patient's Phone Number"
            className="user-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <input
            type="text"
            placeholder="Patient's Email ID"
            className="user-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="text"
            placeholder="Patient's Symptoms"
            className="user-input"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            />
            <input
            type="text"
            placeholder="Patient's Image URL"
            className="user-input"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            />
            <p className='img-name'>Patient Profile Preview:</p>          
           <img src={photo} alt="" className='img'/>
          
            <button type="button" className='btn' onClick={addStudent}>Add Patient Details ➕</button>
        </form>
        </div>
        <Toaster />
    </div>
  )
}

export default AddPatient