import fs from 'fs-extra'
import getTheme from './theme'

console.log('starting genereting theme json')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/discord-dark.json',
      getTheme({
        color: 'dark',
        name: 'Discord Dark',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished genereting theme json')
