import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
    firstName?: string;
    lastName?: string;
  };
}

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { email, firstName, lastName } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "Email is required" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    merge_fields: {
      FNAME: firstName || "noname",
      LNAME: lastName || "nosurname",
    },
    status: "subscribed",
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot us an email and we'll add you to the list.`,
      });
    }

    return res.status(201).json({ message: "success" });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return res.status(500).json({ error: error.message });
    } else {
      console.log("Unexpected error", error);
    }
  }
};
