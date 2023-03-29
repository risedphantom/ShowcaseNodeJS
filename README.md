# ShowcaseNodeJS
ShowcaseNodeJS - это легковесный сайт-визитка, написанный на node js. Web-сайт состоит 6 страниц. Серверная часть на node js + express. Движок представлений - handlebars. Минималистичный дизайн и лаконичное преподнесение информации.

Отличный выбор для не front-end разработчика.

## Decrypt secret directory
All files in secret/* are encrypted with `git-crypt`
To grant access to this dir you need to generate your own GPG key and export it
```
gpg --gen-key
gpg --list-keys
gpg --export --armor $KEY_ID
```
Then ask repository maintainer to add it to `git-crypt` with
```
git-crypt add-gpg-user --trusted $EMAIL
```
After that you can decrypt secret dir
```
git-crypt unlock
```
From now on you can use git normally - encrypt/decrypt happen transparently for your key
