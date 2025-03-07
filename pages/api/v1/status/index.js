import database from "infra/database.js";

async function status(request, response) {
  const versionDbResult = await database.query("SHOW server_version;");
  const versionDbValue = versionDbResult.rows[0].server_version;
  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;
  const usedConnectionsResult = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';",
  );
  const usedConnectionsValue = usedConnectionsResult.rows[0].count;
  console.log(usedConnectionsResult);
  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      version: versionDbValue,
      max_connections: parseInt(maxConnectionsValue),
      opened_connections: usedConnectionsValue,
    },
    //used_connections: usedConnections.rowCount,
  });
}

export default status;
