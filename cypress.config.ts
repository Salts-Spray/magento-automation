import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);

      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: 'cypress/integration/**/*.feature',
    // supportFile: 'cypress/support/index.ts',
    stepDefinitions: 'cypress/support/step_definitions/**/*.{js,ts}',
    defaultCommandTimeout: 10000,
  },
  browser: 'all', // Explicitly allow all supported browsers
});