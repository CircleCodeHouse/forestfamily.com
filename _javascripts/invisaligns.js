const fm = require('front-matter');
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs')

const createInvisaligns = () => {
  if (!existsSync('./invisalign')) mkdirSync('./invisalign');
  const invisaligns = fm(readFileSync('./settings.html', 'utf-8')).attributes.invisaligns;
  invisaligns.filter(invisalign => invisalign.permalink).forEach(invisalign => {
      writeFileSync(`./invisalign/${invisalign.permalink.split('/').filter(i => i).join('-')}.md`, `---
layout: invisalign
permalink: ${invisalign.permalink}
---`)
  })
}

createInvisaligns()