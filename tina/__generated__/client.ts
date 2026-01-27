import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ef72ff47fc188ec1c51f329fada86e678330f1c9', queries,  });
export default client;
  