import { getServerConfig } from "../config.server";

export async function getGreeting(name: string) {
  const config = getServerConfig();
  return {
    greeting: `Hello, ${name}!`,
    mode: config.nodeEnv ?? "unknown",
  };
}
