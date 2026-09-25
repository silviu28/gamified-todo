// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import m0000 from './20260925123950_v1_initial_config/migration.sql';
import m0001 from './20260925142048_v2_add_completed_tasks_preferences_tier/migration.sql';

  export default {
    migrations: {
      "20260925123950_v1_initial_config": m0000,
"20260925142048_v2_add_completed_tasks_preferences_tier": m0001
}
  }
  