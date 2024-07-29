import { email, images } from "$lib/stores/stores";
import { get } from "svelte/store";

/**
 * get images
 *
 * @param void
 * @returns {string[]}
 */
export const getImages = (): string[] => {
  return get(images);
};

/**
 * set images
 *
 * @param {string} _image
 * @returns {void}
 */
export const setImage = (_image: string): void => {
  // QUEUE
  const currImages = get(images);
  currImages.push(_image);
  if (currImages.length > 3) currImages.shift();
  return images.set(currImages);
};

/**
 * delete image
 *
 * @param {number} _index
 * @returns {void}
 */
export const deleteImage = (_index: number): void => {
  let currImages = get(images);
  delete currImages[_index];
  currImages = currImages.filter((item) => item);
  return images.set(currImages);
};

/**
 * delete all images
 *
 * @returns {void}
 */
export const clearImages = (): void => {
  return images.set([]);
};


/**
 * get images
 *
 * @param void
 * @returns {string}
 */
export const getEmail = (): string | undefined => {
  return get(email);
};

/**
 * set images
 *
 * @param {string} _image
 * @returns {void}
 */
export const setEmail = (_image: string): void => {
  return email.set(_image);
};
/**
 * delete all images
 *
 * @returns {void}
 */
export const clearEmail = (): void => {
  return email.set(undefined);
};
