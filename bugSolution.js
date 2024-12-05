const express = require('express');
const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Invalid JSON received:', err);
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next();
});

app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty request body' });
  }
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));