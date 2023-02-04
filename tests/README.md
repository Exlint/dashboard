# Exlint Automations

Automation for Exlint, using `Playwright` package

## Prerequisites

To run the automations locally, you must create a GitHub user, and get a [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) key using [GitHub 2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

When enabling 2FA in GitHub, you should see a QRCode. You should decode this QRCode using some online tool, like [ZXing](https://zxing.org/w/decode.jspx). After decoding, you should get this result:

`otpauth://totp/GitHub:<USERNAME>?secret=<YOUR_SECRET>&issuer=GitHub`

You still need to validate this key, so run this simple script locally:

```js
const totp = require('totp-generator');

const token = totp('<YOUR_SECRET>');
console.log(token);
```

Then return back to the GitHub 2FA enable page, and enter this logged token. Now you are ready to run the automations locally.

## Running

Create a file `./tests/.env` and paste in the following code block and make sure to replace the values with your credentials:

```
AUTOMATION_GITHUB_EMAIL="<YOUR_EMAIL>"
AUTOMATION_GITHUB_PASSWORD="<YOUR_PASSWORD>"
AUTOMATION_GITHUB_TOTP_KEY="<YOUR_SECRET>"
```

Then, in the root folder of the project, run this command: `pnpm test:local`

## Debugging

You can debug the automations tests locally by running this command: `pnpm test:debug`
Note, the [prerequisites](#prerequisites) are the same for this command.
