// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions or issues, you can reach me at ${data.email}. You can also check out my GitHub profile at [https://github.com/${data.github}](https://github.com/${data.github}).
  `;
}
module.exports = generateMarkdown;
