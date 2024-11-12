const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
  .option('url', {
    alias: 'u',
    description: 'Shortened URL to expand',
    type: 'string',
    demandOption: true,
  })
  .help()
  .alias('help', 'h')
  .argv;

const unshortenUrl = async (shortUrl) => {
  try {
    const response = await axios.get(`https://unshorten.me/s/${shortUrl}`);
    if (response.data) {
      console.log(`Expanded URL: ${response.data}`);
    } else {
      console.log('Could not expand the URL.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

unshortenUrl(argv.url);
