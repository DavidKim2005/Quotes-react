import { useCallback, useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Quote, Quotes } from "../types";
import axiosApi from "../AxiosApi";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Quote[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosApi.get<Quotes>('/quotes.json') 
      const data = response.data

      if (data) {
        const parsedCategories = Object.keys(data).map(id => ({
          ...data[id],
          id
        }));
        setCategories(parsedCategories);
      } else {
        setCategories([])
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }, [])

  useEffect(() => {
    void fetchData()
  }, [fetchData])

  return (
    <>
    {categories.map(category => (
      <Card key={category.id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{category.author}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category.category}</Card.Subtitle>
          <Card.Text>
            {category.text}
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
    </>
  )
}

export default Categories;
