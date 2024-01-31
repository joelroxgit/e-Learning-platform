import { errorHandler } from "./middlewares/errorHandler";
import { app } from "./server";

app.use('api/users')
app.use('api/courseitems')
app.use('api/bills')


app.use(errorHandler)

