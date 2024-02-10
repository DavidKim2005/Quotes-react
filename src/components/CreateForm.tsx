import { Form } from "react-bootstrap"
import axiosApi from "../AxiosApi"

const CreateForm: React.FC = () => {
    

    return (
        <Form>
            <Form.Select aria-label="Default select example" className="mb-3">
                <option>Category</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter quote</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button typeof="submit" className="btn btn-outline-success">Success</button>
        </Form>
    )
}

export default CreateForm