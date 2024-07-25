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

  async sendEmail(recipientEmail: string, images) {
    const url = "https://a.klaviyo.com/api/events/";
    const staticImage =
      "https://raw.githubusercontent.com/CybTekk-LLP/stoneTEKK-emails/main/window.png";
    let imagePre = staticImage;
    let imageNew = staticImage;

    if (images.length === 1) {
      imageNew = images[0];
    } else if (images.length % 2 === 0) {
      imagePre = images[images.length - 2];
      imageNew = images[images.length - 1];
    } else {
      imageNew = images[images.length - 1];
      imagePre = staticImage;
    }

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
              imagePre: imagePre,
              imageNew: imageNew,
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
                imagePre: imagePre,
                imageNew: imageNew,
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
      })
      .catch((err) => console.error("error:" + err));
  }
}
