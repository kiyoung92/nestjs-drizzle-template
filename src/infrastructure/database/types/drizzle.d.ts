import { MySql2Database } from 'drizzle-orm/mysql2';

import * as schema from '../schemas/schema';

export type DrizzleORM = MySql2Database<typeof schema>;
