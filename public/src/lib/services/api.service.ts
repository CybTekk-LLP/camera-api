import { PUBLIC_BASE_URI } from "$env/static/public";
import axios from "axios";

export const api = axios.create({
  baseURL: PUBLIC_BASE_URI,
  timeout: 5000,
  withCredentials: true,
});
/**
 * Upload a gallery file
 *
 * @param {File[]} gallery
 * @returns { URI: String}
 */
export const uploadGallery = async (gallery: File[]): Promise<string[]> => {
  const formData = new FormData();
  for (const image of gallery) {
    formData.append("gallery", image);
  }
  try {
    const { data } = await api.post("/uploads/gallery", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data.uri;
  } catch (error) {
    console.error(error);
  }
  return [];
};
/**
 * Upload image for email
 *
 * @param {string} imageurl
 */
export const uploadImageForEmail = async (
  imageurl: string
): Promise<string> => {
  const uploadData = await api
    .post(`uploads/images/email`, { imageurl })
    .catch((error) => {
      console.log(error);
    });
  return uploadData?.data;
};

/**
 * Send Email
 * @param {string} email
 */

export const sendMail = async (
  email: string,
  imageurl: string
): Promise<string> => {
  const sendMailData = await api
    .post(`/email?email=${email}&imageurl=${imageurl}`)
    .catch((error) => {
      console.log(error);
    });
  return sendMailData?.data;
};
