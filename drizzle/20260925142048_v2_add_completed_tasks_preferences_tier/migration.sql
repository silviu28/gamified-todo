CREATE TABLE `completed_tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`task_id` integer NOT NULL,
	`multiplier` real DEFAULT 1 NOT NULL,
	`completion_date` integer NOT NULL,
	CONSTRAINT `fk_completed_tasks_task_id_tasks_id_fk` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE TABLE `preferences` (
	`_id` integer PRIMARY KEY DEFAULT 1,
	`accent` text DEFAULT 'lime' NOT NULL,
	`thumbnail` text DEFAULT '' NOT NULL,
	`profile_picture` text DEFAULT '' NOT NULL,
	`username` text DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tier` (
	`_id` integer PRIMARY KEY DEFAULT 1,
	`tier` integer DEFAULT 0 NOT NULL,
	`tasks_count` integer DEFAULT 0 NOT NULL,
	`consolidated_pts` integer DEFAULT 0 NOT NULL
);
