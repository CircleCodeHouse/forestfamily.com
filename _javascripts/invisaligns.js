const fm = require('front-matter');
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs')

const createInvisaligns = () => {
  if (!existsSync('./invisalign')) mkdirSync('./invisalign');
  const patients = fm(readFileSync('./invisalign.html', 'utf-8')).attributes.patients;
  patients.filter(patient => patient.permalink).forEach(patient => {
      writeFileSync(`./invisalign/${patient.permalink.split('/').filter(i => i).join('-')}.md`, `---
layout: invisalign
permalink: ${patient.permalink}
---`)
  })
}

createInvisaligns()