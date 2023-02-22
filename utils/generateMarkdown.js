// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![${data.license} License](https://img.shields.io/badge/license-${data.license}-blue)
  
  ## Description

  ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)  

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

  ## License
  This project is licensed under the ${data.license} license.

  ## Questions
  For questions or support, please contact ${data.email}. To see other projects, visit https://github.com/${data.github}/.

  ## Screenshot
 ![Screenshot](${data.screenshot})

  ## Video
  [${data.title} Video Demo](${data.video})
`;
}
module.exports = generateMarkdown;
