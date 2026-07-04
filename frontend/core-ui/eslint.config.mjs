import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            // ====================================================================================
            // 1. CHIỀU DỌC: QUẢN LÝ LAYER (TẦNG KIẾN TRÚC)
            // ====================================================================================
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: [
                'type:page',
                'type:feature',
                'type:core',
                'type:shared',
                'type:ui',
              ],
            },
            {
              sourceTag: 'type:page',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:data-access',
                'type:api',
                'type:util',
                'type:shared',
                'type:core-facade',
              ],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:data-access',
                'type:util',
                'type:api',
                'type:shared',
                'type:core-facade',
              ],
            },
            {
              sourceTag: 'type:feature-lazy',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:data-access',
                'type:util',
                'type:api',
                'type:shared',
                'type:core-facade',
              ],
            },
            {
              sourceTag: '*',
              notDependOnLibsWithTags: ['type:feature-lazy', 'type:page'],
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: [
                'type:api',
                'type:util',
                'type:core',
                'type:api-generated',
                'type:types',
                'type:core-facade',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:util',
                'type:types',
                'type:core-facade',
                'type:api',
              ],
              bannedExternalImports: [
                '@ngrx/*',
                '@shopapp/core/*',
                'rxjs/internal/*',
              ],
            },
            {
              sourceTag: 'type:types',
              onlyDependOnLibsWithTags: ['type:types'],
            },
            {
              sourceTag: 'type:api-generated',
              onlyDependOnLibsWithTags: ['type:types', 'type:util'],
            },
            {
              sourceTag: 'type:api',
              onlyDependOnLibsWithTags: ['type:util', 'type:types'],
            },
            {
              sourceTag: 'type:core-facade',
              onlyDependOnLibsWithTags: ['type:types'],
            },
            {
              sourceTag: 'type:core',
              onlyDependOnLibsWithTags: [
                'type:core',
                'type:util',
                'type:types',
                'type:core-facade',
              ],
            },
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: [
                'type:shared',
                'type:ui',
                'type:util',
                'type:types',
                'type:core-facade',
              ],
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util', 'type:types'],
            },

            // ====================================================================================
            // 2. CHIỀU NGANG: QUẢN LÝ DOMAIN (BOUNDED CONTEXT)
            // ====================================================================================

            // --- APPS ---
            {
              sourceTag: 'domain:storefront',
              onlyDependOnLibsWithTags: [
                'domain:commerce',
                'domain:crm',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:merchant',
              onlyDependOnLibsWithTags: [
                'domain:commerce',
                'domain:operations',
                'domain:store-ops',
                'domain:crm',
                'domain:finance',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:backoffice',
              onlyDependOnLibsWithTags: [
                'domain:operations',
                'domain:crm',
                'domain:store-ops',
                'domain:finance',
                'domain:commerce',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:pos',
              onlyDependOnLibsWithTags: [
                'domain:store-ops',
                'domain:commerce',
                'domain:crm',
                'domain:shared',
                'domain:core',
              ],
            },

            // --- DOMAINS ---
            {
              sourceTag: 'domain:commerce',
              onlyDependOnLibsWithTags: [
                'domain:commerce',
                'domain:operations:api',
                'domain:crm:api',
                'domain:finance:api',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:operations',
              onlyDependOnLibsWithTags: [
                'domain:operations',
                'domain:commerce:api',
                'domain:crm:api',
                'domain:store-ops:api',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:crm',
              onlyDependOnLibsWithTags: [
                'domain:crm',
                'domain:commerce:api',
                'domain:operations:api',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:store-ops',
              onlyDependOnLibsWithTags: [
                'domain:store-ops',
                'domain:commerce:api',
                'domain:operations:api',
                'domain:finance:api',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:finance',
              onlyDependOnLibsWithTags: [
                'domain:finance',
                'domain:operations:api',
                'domain:store-ops:api',
                'domain:shared',
                'domain:core',
              ],
            },
            {
              sourceTag: 'domain:core',
              onlyDependOnLibsWithTags: ['domain:core', 'domain:shared'],
            },
            {
              sourceTag: 'domain:shared',
              onlyDependOnLibsWithTags: ['domain:shared'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    // Cấu hình riêng cho Angular template
  },
  {
    files: ['**/*.html'],
    // Cấu hình riêng cho HTML
  },
];
