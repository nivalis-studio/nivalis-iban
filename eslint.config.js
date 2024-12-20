import { nivalis } from '@nivalis/eslint-config';

export default nivalis(
  {
    tailwindcss: false,
    typescript: {
      configPath: './tsconfig.json',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
);
