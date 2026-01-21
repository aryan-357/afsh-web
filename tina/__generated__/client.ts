import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/2.0/content/372c1232-2d0e-429a-a325-cb4750dc6248/github/main', token: 'ef72ff47fc188ec1c51f329fada86e678330f1c9', queries, });
export default client;
