const fs = require('fs')

let output =
  '<!DOCTYPE NETSCAPE-Bookmark-file-1><HTML><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><Title>Imported From Github</Title><DT><H3 FOLDED>Notion Exports</H3><DL><p>'

fs.readdir('./exports/articles/', function (err, files) {
  if (err) throw err
  files
    .filter(function (file) {
      try {
        return fs.statSync('./exports/articles/' + file).isFile()
      } catch (error) {}
    })
    .forEach(function (file) {
      const html = fs.readFileSync('./exports/articles/' + file).toString()
      if (!html) return

      const match = html
        .split('</header>')[0]
        .match(
          /<a href=\"https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)\" class=\"url-value\">(.+?)<\/a>/,
        )

      if (!match) return

      let title = html.match(/<title>(.+?)<\/title>/)
      if (title) {
      } else {
        title = match[3]
      }

      output += '<DT>' + `<a href=${match[3]}>${title[1]}</a>`
    })
    
  output += '</DL><p></HTML>'

  console.log(output)
})
