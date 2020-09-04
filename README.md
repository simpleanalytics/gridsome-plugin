<a href="https://simpleanalytics.com/?ref=github.com/simpleanalytics/gridsome-plugin">
  <img src="https://assets.simpleanalytics.com/images/logos/logo-github-readme.png" alt="Simple Analytics logo" align="right" height="62" />
</a>

# Gridsome Plugin

[Simple Analytics](https://simpleanalytics.com) is a clean, simple, and privacy friendly analytics tool. Actionable data in a beautiful dashboard. It does not use cookies and you can bypass ad blockers. Make sure to signup to get most value out of this plugin.

It uses the [Simple Analytics Vue](https://www.npmjs.com/package/simple-analytics-vue) package.

## Install

- `npm install gridsome-plugin-simple-analytics`
- `yarn add gridsome-plugin-simple-analytics`

## Usage

```js
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-simple-analytics'
    }
  ]
}
```

### Bypass Ad Blockers

You can also optionally specify a custom domain to bypass ad blockers. Read more about this in [our documentation](https://docs.simpleanalytics.com/bypass-ad-blockers).

```js
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-simple-analytics',
      options: {
        domain: 'api.example.com'
      }
    }
  ]
}
```
