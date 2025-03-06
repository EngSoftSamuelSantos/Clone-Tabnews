import database from "infra/database.js";

async function status(request, response) {
  const rresult = await database.query("SELECT 1 + 1 as sum;");
  console.log(rresult.rows);
  response.status(200).json({ chave: "Samuel é acima da média" });
}

export default status;
