// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`
  }
  else{
    return ''
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `* [License](#license)`
  }
  else{
    return ''
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return`## License
    
    This project is licensed under ${license} license.`
  }
  else{
    return ''
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions 

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please contact me at ${data.email}. 
  My GitHub profile can be found at [${data.github}](https://github.com/${data.github}).
 `;
}

module.exports = generateMarkdown;
