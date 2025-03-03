function status(request, response) {
  response.status(200).json({ chave: "Samuel é acima da média" });
}

export default status;
