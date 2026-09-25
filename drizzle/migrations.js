// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import m0000 from './20260925123950_v1_initial_config/migration.sql';

  export default {
    journal: {
      entries: [
        {
          idx: 0,
          when: 1758803990000,
          tag: "20260925123950_v1_initial_config",
          breakpoints: true,
        },
      ],
    },
    migrations: {
      "20260925123950_v1_initial_config": m0000
    }
  }
  