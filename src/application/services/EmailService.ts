import {
  Logger,
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  PUBLIC_BASE_URI,
  KLAVIYO_PRIVATE_API_KEY,
} from "@/config";

import fetch from "node-fetch";

export class EmailService {
  async uploadImage(imageURL) {
    const url = "https://a.klaviyo.com/api/images/";
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
          type: "image",
          attributes: {
            import_from_url: `${imageURL}`,
            hidden: false,
          },
        },
      }),
    };

    const data = await fetch(url, options);
    return await data.json();
  }
  async sendEmail(recipientEmail: string, imageURL: string) {
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
              imageURL: imageURL,
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
                  properties: {
                    submit: "Yes",
                  },
                  email: `${recipientEmail}`,
                },
                imageURL:
                  "https://d3k81ch9hvuctc.cloudfront.net/company/TWnsJV/images/e9c9c693-0df8-4954-8b6d-47af088b0fd1.jpeg",
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
