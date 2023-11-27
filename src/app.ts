import Express = require('express');
import bodyParser = require('body-parser');
import  todosRoutes  from './routes/todos';
const app = Express();
app.use(bodyParser.json())
app.use(todosRoutes);

app.listen(3000)