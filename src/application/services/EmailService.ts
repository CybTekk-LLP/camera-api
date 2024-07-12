import { KLAVIYO_PRIVATE_API_KEY } from "@/config";

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

  async sendEmail(recipientEmail: string, images: string[]) {
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
              imageURL: images[0],
              imagePre: images[1],
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
                imageURL: images[0],
                imagePre: images[1],
              },
            },
          },
        },
      }),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        JSON.parse(json);
        console.log("gvhnmk,km,l");
      })
      .catch((err) => console.error("error:" + err));
  }
}
