// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const MIT = {
  link: "https://opensource.org/licenses/MIT",
  badge: 'https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge',
  alt: 'MIT'
}

const Mozilla = {
  link: "https://opensource.org/licenses/MPL-2.0",
  badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=for-the-badge',
  alt: 'Mozilla Public License 2.0'
}

const Apache = {
  link: "https://opensource.org/licenses/Apache-2.0",
  badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  alt: 'Apache'  
}

/*
function renderLicenseBadge(license) {

}*/

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const getLicenseInfo = ({badge, link}, license) => {
  return `## License
  [![License badge](${badge})](${link})
  This work is covered by ${license} license. For more information [see full license.](${link})`
}

function renderLicenseSection(license, name) {
  let licCode;

  switch (license){
    case 'MIT':
      licCode = MIT;
      break;
    case 'Mozilla':
      licCode = Mozilla;
      break;
    case 'Apache 2.0':
      licCode = Apache;
      break;
  }

  if (license === 'no license') {
    return `## License
    No license.`
  } else {
    return `${getLicenseInfo(licCode, license)}
  ${license} © ${name}`
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license, data.name);

  return `# ${data.title}
  ## Description
  ${data.description}
  [See deployed application.](${data.deployedLink})
  ## Table of Contents
  - [Installation](#installation)
  - [Usage Information](#how-to-use)
  - [Contributing](#contributing)
  - [Tests Instruction](#tests)
  - [Licence](#licence)
  - [Questions and Feedback](#questions-and-feedback)
  ## Usage Information
  ${data.information}
  ## Contributing
  ${data.guidelines}
  ## Tests
  ${data.test}
  ${licenseSection}
  ## Questions and Feedback
  Got questions or feedback? You can contact me on:
    - [Github](https://github.com/${data.username})
    - [Email](mailto:${data.email})
 `;
}

module.exports = generateMarkdown;
