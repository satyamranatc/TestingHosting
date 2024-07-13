import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 5100

const app = express();
app.use(cors());

let Users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },

]

app.get('/', (req, res) => {
    res.send('Hello, Vite and React!');
})
app.get('/api/data', (req, res) => {
    res.json({"Data": Users})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})