export async function POST(request) {
  try {
    const body = await request.json();

    // Validate form data
    if (!body.name || !body.email || !body.service) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    // For now, just log the data
    console.log("Quote request received:", body);

    // You can add your email sending logic here
    // Example with nodemailer or SendGrid API

    return Response.json(
      { 
        message: "Quote request received successfully",
        data: body 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
