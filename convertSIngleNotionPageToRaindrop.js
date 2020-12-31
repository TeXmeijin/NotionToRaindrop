const html = process.argv[2]

const urls = html.matchAll(/<a href=\"https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)\">(.+?)<\/a>/g)

let output = '<!DOCTYPE NETSCAPE-Bookmark-file-1><HTML><META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\"><Title>Imported From Github</Title><DT><H3 FOLDED>Notion Exports</H3><DL><p>'

for (const match of urls) {
//   console.log(`${match[0]}`);
  output += '<DT>' + match[0]
}

output += '</DL><p></HTML>'

console.log(output)