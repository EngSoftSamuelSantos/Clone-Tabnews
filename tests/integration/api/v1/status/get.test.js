test("GET to /api/v1/status mostra retorno 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  expect(responseBody.dependencies.version).toEqual("16.8");
  expect(responseBody.dependencies.max_connections).toEqual(100);
  expect(responseBody.dependencies.opened_connections).toEqual(2);
});
