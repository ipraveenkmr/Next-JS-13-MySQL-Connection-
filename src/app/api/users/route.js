export async function GET(request) {
  let users = [
    {
      id: 1,
      name: "Praveen",
      email: "praveen@trickuweb.com",
    },
    {
      id: 2,
      name: "Nitin",
      email: "nitin@trickuweb.com",
    },
  ];

  let data = JSON.stringify(users);
  return new Response(data, {
    status: 200,
  });
}
