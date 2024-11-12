<body>
<div>
# URL Expander

A simple Node.js script that expands shortened URLs using the `unshorten.me` API. This script is designed for environments like Termux on Android, where using `puppeteer` may not be feasible.

## Features
- Expands shortened URLs (e.g., `bit.ly`, `t.co`) to reveal the original link.
- Lightweight and works without the need for a full browser automation tool like `puppeteer`.


## Installation

To set up the project locally, follow these steps:

1. ***Install needed packages termux***

    ```bash
    pkg update
    pkg upgrade
    pkg install npm
    pkg install nodejs
    pkg install git
    pkg install yarn
    termux-setup-storage
    ```
    
2. ***Clone the repository:***

    ```bash
    git clone https://github.com/DFansyah/expand-URLs.git
    cd expand-URLs
   ```
   
3. ***For run this script***

    ```bash
    npm install or yarn install
    node index.js -u <short URLs>
    ```
</div>
</body>