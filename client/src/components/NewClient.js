import {useState} from 'react'

function NewClient({addClient}) {

    const [newFName, setFirstName ] = useState('')
    const [newLName, setLastName] = useState('')
    const [newAge, setAge] = useState('')
    const [newEmail, setEmailAddress] = useState('')
    const [newNumber, setTelephoneNumber] = useState('')

    const fnameChange = e => setFirstName(e.target.value)
    const lnameChange = e => setLastName(e.target.value)
    const ageChange = e => setAge(e.target.value)
    const emailChange = e => setEmailAddress(e.target.value)
    const numberChange = e => setTelephoneNumber(e.target.value)

    
    const handleSubmit = e => {
        e.preventDefault()
         const newClient = { 
            first_name: newFName,
            last_name: newLName,
            age: newAge,
            email_address: newEmail,
            telephone_number: newNumber
        }
        addClient(newClient)
    }

    return (
        <div className='new-client-form'>
            <form onSubmit ={handleSubmit}>
                <input onChange= {fnameChange} type='text' name='fname' placeholder='First name' />
                <input onChange= {lnameChange} type='text' name='lname' placeholder='Last name' />
                <input onChange= {ageChange} type='number' name='age' placeholder='Client Age' />
                <input onChange= {emailChange} type='text' name='email' placeholder='Client Email' />
                <input onChange= {numberChange} type='text' name='number' placeholder='Client Telephone' />
                <button type='submit'>Add Client</button>
            </form>
        </div>
    )
}

export default NewClient