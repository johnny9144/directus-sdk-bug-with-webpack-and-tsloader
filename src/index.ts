import { createDirectus, authentication, rest, readItem } from "@directus/sdk";

async function getCmsClient({ url, email, password }) {
  const client = createDirectus(url).with(authentication()).with(rest());

  await client.login(email, password, {});

  return client;
}

async function run() {
  const client = await getCmsClient({
    url: "http://localhost:8055",
    email: "random",
    password: "random",
  });

  const result = await client.request(
    readItem("random", "2072d782-9ed5-4f65-9a87-36a233ae8333")
  );

  console.log(result);
}

run();
