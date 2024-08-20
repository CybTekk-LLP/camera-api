import { email, images, name } from "$lib/stores/stores";
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
 * get email
 *
 * @param void
 * @returns {string}
 */
export const getEmail = (): string | undefined => {
  return get(email);
};

/**
 * set email
 *
 * @param {string} _email
 * @returns {void}
 */
export const setEmail = (_email: string): void => {
  return email.set(_email);
};
/**
 * delete all email
 *
 * @returns {void}
 */
export const clearEmail = (): void => {
  return email.set(undefined);
};

/**
 * get name
 *
 * @param void
 * @returns {string}
 */
export const getName = (): string | undefined => {
  return get(name);
};

/**
 * set name
 *
 * @param {string} _name
 * @returns {void}
 */
export const setName = (_name: string): void => {
  return name.set(_name);
};
/**
 * delete all name
 *
 * @returns {void}
 */
export const clearName = (): void => {
  return name.set(undefined);
};
