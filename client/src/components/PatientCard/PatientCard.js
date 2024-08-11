import React from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import "./PatientCard.css"

function StudentCard({_id, name, age, grade, address, phone, email, branch, photo, createdAt, loadStudents}) {

  const deleteStudent = async ()=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/student/${_id}`)

    toast.success(response.data.message)
    

    loadStudents()
  }

  return (
    <div className='student-card'>
      <img src={photo} alt="" className='photo'/>
      <h2 className='name'>{name}( <span className='age'>Age:{age}</span>)</h2>
      <p className='email'>
        Email ID:{email}
      </p>
      <span className='grade'>
        Symptoms:{grade}
      </span>
      <span className='branch'>
        {branch}
      </span>
      <span className='phone'>
        Mobile No:{phone}
      </span>
      <span className='date'>
        Added on: {new Date(createdAt).toLocaleString()}
      </span>
      <span className='address'>
       Address:{address}
      </span>

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" className='delete-icon' onClick={deleteStudent} >
<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
</svg>
        <Toaster/>
    </div>
  )
}

export default StudentCard