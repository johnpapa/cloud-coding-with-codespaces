import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

// See: https://playwright.dev/docs/test-configuration.
const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* See: https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* See: https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,
    // trace: 'on-first-retry',
    trace: 'on',

    /* See: https://playwright.dev/docs/test-advanced */
    baseURL: 'http://localhost:4280/home',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // Uncomment to test against other browsers
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge',
      },
    },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests
   See: https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  */
  webServer: [
    {
      command: 'npm run start',
      port: 4200,
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'npm run local',
      port: 4280,
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
};

export default config;
