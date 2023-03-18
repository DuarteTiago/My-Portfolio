const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error(err));
