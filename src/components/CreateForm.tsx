import { Form } from "react-bootstrap"
import axiosApi from "../AxiosApi"
import { useState } from "react"

const CreateForm: React.FC = () => {
    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axiosApi.post('/quotes.json', {author, quote})
        setAuthor('')
        setQuote('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Select aria-label="Default select example" className="mb-3">
                <option>Category</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter quote</Form.Label>
                <Form.Control as="textarea" placeholder="Enter quote" rows={3} value={quote} onChange={(e) => setQuote(e.target.value)} />
            </Form.Group>
            <button typeof="submit" className="btn btn-outline-success">Success</button>
        </Form>
    )
}

export default CreateForm