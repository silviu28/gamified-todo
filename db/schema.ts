import { relations } from 'drizzle-orm/_relations';
import { sqliteTable, text, integer, real, unique } from 'drizzle-orm/sqlite-core';

export const notes = sqliteTable('notes', {
  id: integer('id')
    .primaryKey({ autoIncrement: true }),

  title: text('title', { length: 128 })
    .notNull()
    .unique(),

  content: text('content'),

  creationDate: integer('creation_date', { mode: 'timestamp' }),
});

export const skills = sqliteTable('skills', {
  id: integer('id')
    .primaryKey({ autoIncrement: true }),

  name: text('name', { length: 128 })
    .notNull()
    .unique(),

  pts: integer('pts', { mode: 'number' })
    .notNull()
    .default(0),
});

export const tasks = sqliteTable('tasks', {
  id: integer('id')
    .primaryKey({ autoIncrement: true }),

  name: text('name', { length: 128 })
    .notNull()
    .unique(),

  priority: integer('priority')
    .notNull()
    .default(1),
    
  frequency: real('frequency')
    .notNull()
    .default(3600000),

  creationDate: integer('creation_date', { mode: 'timestamp' }),
});

export const skillTasks = sqliteTable('skill_tasks', {
  id: integer('id')
    .primaryKey({ autoIncrement: true }),

  skillId: integer('skill_id')
    .notNull()
    .references(() => skills.id, { onDelete: 'cascade' }),

  taskId: integer('task_id')
    .notNull()
    .references(() => tasks.id, { onDelete: 'cascade' }),
    
  pts: integer('pts')
    .notNull(),
}, (table) => [unique().on(table.skillId, table.taskId)]);

export const skillsRelations = relations(skills, ({ many }) => ({
  skillTasks: many(skillTasks),
}));

export const tasksRelations = relations(tasks, ({ many }) => ({
  skillTasks: many(skillTasks),
}));

export const skillTasksRelations = relations(skillTasks, ({ one }) => ({
  skill: one(skills, { fields: [skillTasks.skillId], references: [skills.id] }),
  task: one(tasks, { fields: [skillTasks.taskId], references: [tasks.id] }),
}));