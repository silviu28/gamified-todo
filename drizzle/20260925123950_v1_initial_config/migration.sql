CREATE TABLE `notes` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`title` text(128) NOT NULL UNIQUE,
	`content` text,
	`creation_date` integer
);
--> statement-breakpoint
CREATE TABLE `skill_tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`skill_id` integer NOT NULL,
	`task_id` integer NOT NULL,
	`pts` integer NOT NULL,
	CONSTRAINT `fk_skill_tasks_skill_id_skills_id_fk` FOREIGN KEY (`skill_id`) REFERENCES `skills`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_skill_tasks_task_id_tasks_id_fk` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE CASCADE,
	CONSTRAINT `skill_tasks_skill_id_task_id_unique` UNIQUE(`skill_id`,`task_id`)
);
--> statement-breakpoint
CREATE TABLE `skills` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text(128) NOT NULL UNIQUE,
	`pts` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text(128) NOT NULL UNIQUE,
	`priority` integer DEFAULT 1 NOT NULL,
	`frequency` real DEFAULT 3600000 NOT NULL,
	`creation_date` integer
);
