# init 
`pnpm install`

# linter & formatter

> Use [Biome](https://biomejs.dev/) as linter and formatter

Please download `Biome` extension first!

# core package

- dev : `pnpm run dev --filter @wander-web-wizard/core`
- build : `pnpm run build --filter @wander-web-wizard/core`

# build utils

`pnpm run build --filter @wander-web-wizard/utils`

# packages

- add packages for entire workspace : `pnpm add <package_name> -w`
- remove packages for entire workspace : `pnpm rm <package_name> -w`
- add packages for sub-workspace only: `pnpm add <package_name> -F <sub-workspace_name>` or `pnpm add <package_name> --filter <sub-workspace_name>`. (eg: `pnpm add typescript -F @wander-web-wizard/core`)
- remove packages for sub-workspace : `pnpm rm <package_name> -F <sub-workspace_name>` or `pnpm rm <package_name> --filter <sub-workspace_name>`. (eg: `pnpm rm typescript -F @wander-web-wizard/core`)
