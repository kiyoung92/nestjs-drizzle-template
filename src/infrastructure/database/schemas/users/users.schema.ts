import { relations } from 'drizzle-orm';
import {
  index,
  int,
  mysqlTable,
  primaryKey,
  timestamp,
  unique,
  varchar,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable(
  'users',
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 150 }).notNull(),
    phoneNumber: varchar('phone_number', { length: 15 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    createdAt: timestamp('created_at', { fsp: 3, mode: 'string' }).notNull(),
    updatedAt: timestamp('updated_at', { fsp: 3, mode: 'string' }).notNull(),
    deletedAt: timestamp('deleted_at', { fsp: 3, mode: 'string' }),
  },
  (table) => {
    return {
      usersId: primaryKey({ columns: [table.id], name: 'users_id' }),
      phoneNumber: unique('phone_number').on(table.phoneNumber),
      email: unique('email').on(table.email),
    };
  },
);

export const usersRelations = relations(users, ({ many }) => ({
  userHistories: many(userHistories),
}));

export const userHistories = mysqlTable(
  'user_histories',
  {
    id: int().autoincrement().notNull(),
    userId: int('user_id')
      .notNull()
      .references(() => users.id),
    name: varchar({ length: 150 }),
    phoneNumber: varchar('phone_number', { length: 15 }),
    email: varchar({ length: 255 }),
    createdAt: timestamp('created_at', { fsp: 3, mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      userId: index('user_id').on(table.userId),
      userHistoriesId: primaryKey({
        columns: [table.id],
        name: 'user_histories_id',
      }),
    };
  },
);

export const userHistoriesRelations = relations(userHistories, ({ one }) => ({
  user: one(users, {
    fields: [userHistories.userId],
    references: [users.id],
  }),
}));
