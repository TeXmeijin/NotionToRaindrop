# about

Notion のページ内にブックマークされた Web 記事を [Raindrop](https://raindrop.io/) でインポート可能な形式に変換するリポジトリ。

# how to use

## Notion export

click the Export menu.

[![Image from Gyazo](https://i.gyazo.com/e2f68ceaf3bec3d194319f37db80e13a.png)](https://gyazo.com/e2f68ceaf3bec3d194319f37db80e13a)

And choice HTML format and including sub pages.

[![Image from Gyazo](https://i.gyazo.com/7db2eaf819a4119be6f8ecd7d92b13fd.png)](https://gyazo.com/7db2eaf819a4119be6f8ecd7d92b13fd)

## put files

put the html files in `exports` directory.

## execute command

```bash
$ node convertMultipleNotionPageToRaindrop.js > output.html
```