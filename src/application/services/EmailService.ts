import {
  Logger,
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  PUBLIC_BASE_URI,
  KLAVIYO_PRIVATE_API_KEY,
} from "@/config";

import fetch from "node-fetch";

export class EmailService {
  async sendEmail(recipientEmail: string) {
    const url = "https://a.klaviyo.com/api/events/";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        revision: "2024-06-15",
        "content-type": "application/json",
        Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_API_KEY}`,
      },
      body: JSON.stringify({
        data: {
          type: "event",
          attributes: {
            properties: {
              submit: "Yes",
            },
            metric: {
              data: {
                type: "metric",
                attributes: {
                  name: "Picture Submit",
                },
              },
            },
            profile: {
              data: {
                type: "profile",
                attributes: {
                  image:
                    "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg",
                  properties: {
                    submit: "Yes",
                  },
                  email: `${recipientEmail}`,
                },
              },
            },
          },
        },
      }),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => JSON.parse(json))
      .catch((err) => console.error("error:" + err));
  }
}
