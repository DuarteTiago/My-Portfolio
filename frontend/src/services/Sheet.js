import axios from "axios";

export const save = (data) => {
  const config = {
    method: "post",
    url: "https://sheet.best/api/sheets/0ecd29cc-8fbc-4cff-ae10-757ad33b98f1",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(config)
    .then((res) => {
      console.log("dados da planilha", res);
    })
    .catch((err) => {
      console.log(err);
    });
};
