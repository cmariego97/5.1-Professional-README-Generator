// render license badges
function renderLicenseBadge(license) {
  const apacheBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  const cc0Badge = `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
  const gplv3Badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  const gplv2Badge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
  const mitBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  const iscBadge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  const mozillaBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';

  if (license === 'Apache') {
    return apacheBadge;
  }
  else if (license === 'CC0') {
    return cc0Badge;
  }
  else if (license === 'GPLv3') {
    return gplv3Badge;
  }
  else if (license === 'GPLv2') {
    return gplv2Badge;
  }
  else if (license === 'MIT') {
    return mitBadge;
  }
  else if (license === 'ISC') {
    return iscBadge;
  }
  else if (license === 'Mozilla') {
    return mozillaBadge;  
  }
  // if there is no license, return an empty string
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
const apacheLink = 'https://www.apache.org/licenses/LICENSE-2.0';
const cc0Link = 'https://creativecommons.org/publicdomain/zero/1.0/';
const gplv3Link = 'https://opensource.org/licenses/gpl-3.0.html';
const gplv2Link = 'https://opensource.org/licenses/GPL-2.0';
const iscLink = 'https://opensource.org/licenses/ISC';
const mitLink = 'https://opensource.org/licenses/MIT';
const mozillaLink = 'https://opensource.org/licenses/MPL-2.0';

  if (license === 'Apache') {
    return apacheLink;
  }
  else if (license === 'CC0') {
    return cc0Link;
  }
  else if (license === 'GPLv3') {
    return gplv3Link;
  }
  else if (license === 'GPLv2') {
    return gplv2Link;
  }
  else if (license === 'ISC') {
    return iscLink;
  }
  else if (license === 'MIT') {
    return mitLink;
  }
  else if (license === 'Mozilla') {
    return mozillaLink;
  }
  // there is no license, return an empty string
  else {
    return 'N/A';
  }
}

// render license section of README file
function renderLicenseSection(license) {
  if (license === 'N/A') {
return '';
  }
  else {
return `## License
${renderLicenseBadge(license)}
 
${renderLicenseLink(license)}`;
  }
}

// generate Markdown file
function generateMarkdown(data) {
  if (data !== "None") {
    return `
# ${data.projectName}

## Description

${data.description}

## Table of Contents

- [Developer](#Developer-Info)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Developer Info

${data.info}

* E-mail: ${data.email}

* GitHub username: ${data.github}

## Installation

Enter this command to install dependencies:

~~~
${data.installation}
~~~

## Usage

1. How to generate a README file using the terminal and Node JS

![How to generate a README file using the terminal and Node JS](./assets/node-index-1.gif)

2. How the generated README file looks:

![How the generated README file looks:](./assets/readme-gen-ex.gif)

3. Markdown Preview demo:
![Markdown Preview demo:](./assets/readme-preview.gif)

${data.usage}

## Credits

Had some assistance from institution instructors.

--------

${renderLicenseSection(data.license)}

## How to Contribute

${data.contribution}

## Tests

Enter this command to run tests:

~~~
${data.tests}
~~~
`;
}
}

module.exports = generateMarkdown;
