const Form =()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you can add logic to send the form data to a server or API
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <lable htmlFor="name">Name:</lable>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required /> <br></br>
            <lable htmlFor="email">Email:</lable>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required /> <br></br>
            <lable htmlFor="message">Message:</lable>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea> <br></br>
            <button type="submit">Submit</button>
             </form>
        </div>
    )
}
