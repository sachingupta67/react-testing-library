import { HttpResponse, http } from "msw";

export const handlers = [
  // Example: Mock a GET request
  http.get("http://localhost:3000/api/users", () => {
    return HttpResponse.json({
      data: [
        {
          name: "User 1",
          id: "1",
        },
        {
          name: "User 2",
          id: "2",
        }
      ],
    });
  }),

  // Example: Mock a POST request
  http.post("https://api.example.com/login", async ({ request }) => {
    const { email, password } = (await request.json()) as {
      email: string;
      password: string;
    };

    if (email === "user@example.com" && password === "password123") {
      return HttpResponse.json({
        token: "mock-jwt-token",
      });
    }

    return new HttpResponse(null, { status: 401 });
  }),
];
