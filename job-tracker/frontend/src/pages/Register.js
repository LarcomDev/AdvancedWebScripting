import {useState} from 'react'

const Register = () => {
    const [error, setError] = useState(false)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        setError(false)

        if(user.length === 0 || pass.length === 0) {
            setError(true)
        }
    }

    return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='rounded-xl shadow-xl bg-slate-600 w-[25%] h-fit flex flex-col items-center p-8 gap-5'>
            <h1 className='text-5xl text-white'>Sign up</h1>
            <form onSubmit={handleRegister} className='flex flex-col gap-3 w-1/2'>
                <input type="text" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} className='h-10 rounded-lg p-2'/>
                <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} className='h-10 rounded-lg p-2'/>
                <input type="submit" value="Login" className='h-16 rounded-lg p-5 bg-slate-300 text-xl'/>
            </form>
            {error? <p className='text-red-600 text-xl'>All fields must be filled</p> : null}
            <p className='text-white text-lg'>Already have an account? <a href="/login" className='text-blue-400 underline'>Log in</a></p>
        </div>
    </div>
    )
}

export default Register