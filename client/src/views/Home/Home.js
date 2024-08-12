import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast, { Toaster } from "react-hot-toast"
import axios from 'axios'
import StudentCard from '../../components/PatientCard/PatientCard'
import { Link } from 'react-router-dom'

function Home() {

  const [user, setUser] = useState("")
  const [students, setStudents] = useState([])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = "/login"
    }
  }, [])

  const loadStudents = async () => {
    if (!user._id) {
      return
    }


    const response = await axios.get(`${process.env.REACT_APP_API_URL}/students?userId=${user._id}`)
    // toast.loading('Loading Patient Details...')

    const allStudents = response.data.data


    setStudents(allStudents)
    // toast.dismiss()
    
  }

  
  useEffect(() => {

    loadStudents()

  },)

  return (
    <div>
      <div className='home-div'>
      <h1 className='home-greeting'>👨🏻‍⚕️Hello!<span className='name-1'></span></h1>
      <h2 className='greeting'>Welcome to Seva Hospital⚕️ </h2>
      <h2 className='home-heading'>Your Added Patient Information Are Below👇🏻</h2>
        <Link to='/add-student'>
        <button type='button' className='home-button'>New Appointment</button>
        </Link>
      
        <span className='home-logout' onClick={() => {
          localStorage.clear()
          toast.success("Logged out Successfully")

          setTimeout(() => {
            window.location.href = "/login"
          }, 1000)
        }}>
          Logout
        </span>
      </div>


      <div className='students-container'>
        {
          students.map((student) => {
            const { _id, name, age, grade, address, phone, email, branch, photo, createdAt } = student



            return (<StudentCard
              key={_id}
              _id={_id}
              name={name}
              age={age}
              grade={grade}
              address={address}
              phone={phone}
              email={email}
              branch={branch}
              photo={photo}
              createdAt={createdAt}
              loadStudents={loadStudents}
            />)
          })
        }
      </div>
      <Link to="./add-student">
      </Link>
      <Toaster />
    </div>
  )
}

export default Home