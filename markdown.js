#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = './images_sfx/';
const README_FILENAME = 'README.md';
const NB_IMAGES_PER_LINE = 6;
let nbImages = 0;
let mdContent = '[Основные Токены](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_main/README.md)\
[Мудроградовки](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_mudrog/README.md)\
[Иконки](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_icons/README.md)\
[Эффекты](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_sfx/README.md)\
<table><tr>'
fs.readdirSync(ROOT_DIR).forEach((image) => {
  if (image !== README_FILENAME && image !== 'markdown.js') {
    if (!(nbImages % NB_IMAGES_PER_LINE)) {
      if (nbImages > 0) {
        mdContent += `
</tr>`;
      }
      mdContent += `
<tr>`;
    }
    nbImages++;
    mdContent += `
<td valign="bottom">
<img src="./${image}" width="100" height="100"><br>
${image}
</td>
`;
  }
});
mdContent += `
</tr></table>`;

fs.writeFileSync(path.join(ROOT_DIR, README_FILENAME), mdContent);