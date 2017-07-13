# Lyft Node Example Application

An example application leveraging Lyft's Node SDK to interact with [Lyft's public API](https://www.lyft.com/developers). Lovingly based on [Jordan Patton's](https://github.com/jordanpatton) excellent [Lyft Node Starter Kit](https://github.com/jordanpatton/lyft-node-starter-kit.git) but updated to support the official Lyft Node SDK.

### Installation (requires [node](https://nodejs.org))

Clone this repo, install the `lyft-node-sdk` locally, cd to this subdirectory, then install:

```bash
git clone https://github.com/lyft/lyft-node-sdk
cd lyft-node-sdk
npm install
cd example
npm install
```

### Configuration

1. Sign up for a developer account at [lyft.com/developers](https://www.lyft.com/developers).
2. Create a new application or use a pre-existing one; make sure to note your Client ID and Client Secret.
3. Update your Redirect URL on your application to `http://localhost:3000/oauth/lyft/landing`
4. Copy `.env-example` to `.env`, replacing the variables with your own.
5. Run `npm run start` and you're golden!

Note that there are other, optional configuration options available in `config/config.js` . If you'd like to use them, just take care to set them in your `.env` file before you start the server with `npm run start`.

### Usage

- Open [localhost](http://localhost:3000) in your favorite web browser.

### Resources

- [Lyft Developer Portal](https://www.lyft.com/developers)
- [Lyft Public API Documentation](https://developer.lyft.com/docs)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Google Material Icons](https://design.google.com/icons/)

### Questions

**Q:** What do I do if I get `500 Internal Server Error`?

**A:** Stop your server (`Ctrl + C`) and restart it (`node app.js`). In your browser, [hard reload](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache).
