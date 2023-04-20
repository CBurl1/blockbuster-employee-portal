import {useState} from 'react'

function NewClient({addClientToState}) {

    const [first_name, setFirstName ] = useState('')
    const [last_name, setLastName] = useState('')
    const [age, setAge] = useState('')

    const handleFirstName = e => setFirstName(e.target.value)
    const handleLastName = e => setLastName(e.target.value)
    const handleAge = e => setAge(e.target.value)
    
    const handleSubmit = e => {
        e.preventDefault()

        const newClient = {
            first_name: first_name,
            last_name: last_name,
            age: age
        }
        
        fetch("http://127.0.0.1:5555/clients", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newClient)
        })
        .then(r => r.json())
        .then(addClientToState)
    }

    return (
        <div className='new-client-form'>
            <h2>New Client</h2>
            <form onSubmit ={handleSubmit}>
                <input onChange= {handleFirstName} type='text' name='first_name' placeholder='First name' />
                <input onChange= {handleLastName} type='text' name='last_name' step='0.01' placeholder='Last name' />
                <input onChange= {handleAge} type='number' name='age' placeholder='Client Age' />
                <button type='submit'>Add Client</button>
            </form>
        </div>
    )
}

export default NewClient