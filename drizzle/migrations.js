// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import m0000 from './20260925123950_v1_initial_config/migration.sql';
import m0001 from './20260925142048_v2_add_completed_tasks_preferences_tier/migration.sql';
import m0002 from './20260930140604_v3_add_manually_assigned_field_tasks/migration.sql';
import m0003 from './20260930165931_v4_add_remaining_preferences/migration.sql';

  export default {
    migrations: {
      "20260925123950_v1_initial_config": m0000,
"20260925142048_v2_add_completed_tasks_preferences_tier": m0001,
"20260930140604_v3_add_manually_assigned_field_tasks": m0002,
"20260930165931_v4_add_remaining_preferences": m0003
}
  }
  