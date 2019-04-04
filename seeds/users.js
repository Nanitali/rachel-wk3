exports.seed = function (knex, Promise) {
  return knex('things').del()
    .then(function () {
      return knex('things').insert([
        { id: 1, name: 'Tomato', url: 'https://ya-webdesign.com/images/vegetables-clipart-png-5.png', shininess: 4, carbohydrates: 1, stealth: 2 },
        { id: 2, name: 'Yellow pages', url: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/10/31/10/yellow.jpg', shininess: 3, carbohydrates: 0, stealth: 3 },
        { id: 3, name: 'Rat', url: 'https://resources.stuff.co.nz/content/dam/images/1/r/f/7/n/s/image.related.StuffLandscapeSixteenByNine.710x400.1rf77x.png/1535002141888.jpg', shininess: 1, carbohydrates: 3, stealth: 4 },
        { id: 4, name: 'Socks', url: 'https://i.pinimg.com/originals/bd/68/59/bd68590f41c66100d34e3cbf6670e21a.jpg', shininess: 4, carbohydrates: 0, stealth: 4 },
        { id: 5, name: 'Hoverboard', url: 'https://i.kinja-img.com/gawker-media/image/upload/s--Il3hAWvL--/c_scale,f_auto,fl_progressive,q_80,w_800/thhgxl7kfsppfbrbvqbp.jpg', shininess: 3, carbohydrates: 3, stealth: 1 },
        { id: 6, name: 'Weet-bix', url: 'https://previews.123rf.com/images/jabiru/jabiru1103/jabiru110300075/9011575-iconic-australian-breakfast-cereal-weet-bix-served-in-a-bowl-.jpg', shininess: 0, carbohydrates: 5, stealth: 3 },
        { id: 7, name: 'Nemo', url: 'https://media.npr.org/assets/img/2013/02/08/nemo072way_custom-9c0f9196c8e635b53fa1dedecc2d36a1f04b3b28-s800-c85.jpg', shininess: 5, carbohydrates: 2, stealth: 5 },
        { id: 8, name: 'Chako', url: 'https://raw.githubusercontent.com/Nanitali/nanitali.github.io/master/Maine-coon%20blog/chako.jpg', shininess: 1, carbohydrates: 5, stealth: 5 },
        { id: 9, name: 'Full Cookie Jar', url: 'https://i.etsystatic.com/7516676/r/il/c73dda/863506629/il_fullxfull.863506629_fy6c.jpg', shininess: 3, carbohydrates: 3, stealth: 4 },
        { id: 10, name: 'Bubble Tea', url: 'http://tul.imgix.net/content/article/bubble-tea-ranking.jpg', shininess: 2, carbohydrates: 4, stealth: 2 }
      ])
    })
}
