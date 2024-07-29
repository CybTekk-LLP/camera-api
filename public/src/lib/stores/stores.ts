import { persisted } from "svelte-local-storage-store";

export const images = persisted<string[]>("images", []);
export const email = persisted<string | undefined>("email", undefined);
