#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const image_folder = [];
image_folder.push("./images_main/", "./images_main2/", "./images_mudrog/", "./images_sfx/", "./images_icons/", "./images_icons2/", "./images_odium/", "./wiki_img/", "./images_mark/", "./images_maps/", "./wiki_weapons/");
const ROOT_DIR = './images_';
const README_FILENAME = 'README.md';
const NB_IMAGES_PER_LINE = 6;
image_folder.forEach((element) => {
let nbImages = 0;
let mdContent = '[Основные Токены](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_main/README.md)';
mdContent += ` |
[Основные Токены 2](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_main2/README.md)`;
mdContent += ` |
[Мудроградовки](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_mudrog/README.md)`;
mdContent += ` |
[Иконки](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_icons/README.md)`;
mdContent += ` |
[Иконки Доп.](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_icons2/README.md)`;
mdContent += ` |
[Эффекты](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_sfx/README.md)`;
mdContent += ` |
[Токены Марка](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_mark/README.md)`;
mdContent += ` |
[Одиум](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_odium/README.md)`;
mdContent += ` |
[Карты](https://github.com/CatacombNoop/ktms-tokens/blob/main/images_maps/README.md)`;
mdContent += ` |
[**Вики**](https://github.com/CatacombNoop/ktms-tokens/wiki)`;
mdContent += ` |
<table><tr>`;



fs.readdirSync(element).forEach((image) => {
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

fs.writeFileSync(path.join(element, README_FILENAME), mdContent);

});