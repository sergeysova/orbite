# orbite

A meta-package that groups the most useful npm packages into one, making developers' lives easier.

> Still in early development.

**Benefits:**

- All package versions are compatible with each other.
- Easy to start a new project: just run `npm install react effector orbite`.
- Easy to upgrade after installation: run `npm install orbite@latest`.
- No restrictions on using any tools; they are all tree-shakable and load only what you use.
- No restrictions on installing any other packages.
- JUWUW — Just Use What You Want.

## Packages bundled into

| Package                    | Implemented | Import as                |
| -------------------------- | ----------- | ------------------------ |
| [patronum]                 | ✅          | `orbite/patronum`        |
| [atomic-router]            | ✅          | `orbite/router`          |
| [atomic-router-react]      | ✅          | `orbite/router`          |
| [effector-react]           | ✅          | `orbite/react`           |
| [effector-storage]         | ✅          | `orbite/storage`         |
| [effector-storage/local]   | ✅          | `orbite/storage/local`   |
| [effector-storage/query]   | ✅          | `orbite/storage/query`   |
| [effector-storage/session] | ✅          | `orbite/storage/session` |
| [effector-factorio]        | ✅          | `orbite/factorio`        |
| [@effector/reflect]        | ✅          | `orbite/reflect`         |
| @withease/i18next          |             |                          |
| @withease/web-api          |             |                          |
| @farfetched/core           |             |                          |
| @farfetched/zod            |             |                          |
| zod                        |             |                          |
| nanoid                     |             |                          |

[patronum]: https://github.com/effector/patronum
[atomic-router]: https://github.com/atomic-router/atomic-router
[atomic-router-react]: https://github.com/atomic-router/react
[effector-react]: https://github.com/effector/effector
[effector-storage]: https://github.com/yumauri/effector-storage
[effector-storage/local]: https://github.com/yumauri/effector-storage/blob/main/src/local/README.md
[effector-storage/query]: https://github.com/yumauri/effector-storage/blob/main/src/query/README.md
[effector-storage/session]: https://github.com/yumauri/effector-storage/blob/main/src/session/README.md
[effector-factorio]: https://github.com/kelin2025/effector-factorio#readme
[@effector/reflect]: https://github.com/effector/reflect#readme

## Orbite depends on

- effector — `^23.2`
- react — `^18.3`
