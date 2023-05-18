import { parse } from "pg-connection-string";

export default ({ env }) => {
  const config = env("DATABASE_URL") ? parse(env("DATABASE_URL")) : null;

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config?.host,
        port: config?.port,
        database: config?.database,
        user: config?.user,
        password: config?.password,
        ssl: false,
      },
      debug: false,
    },
  };
};
