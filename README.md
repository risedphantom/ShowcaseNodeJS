# ShowcaseNodeJS
ShowcaseNodeJS - это легковесный сайт-визитка, написанный на node js. Web-сайт состоит 6 страниц. Серверная часть на node js + express. Движок представлений - handlebars. Минималистичный дизайн и лаконичное преподнесение информации.

Отличный выбор для не front-end разработчика.

## Decrypting secrets
All `*.secret.yaml` files are encrypted with `sops`

First of all install `sops` with
```bash
wget -q https://github.com/getsops/sops/releases/download/v3.7.3/sops_3.7.3_amd64.deb
sudo dpkg -i sops_3.7.3_amd64.deb
```
To grant access to secret you need to generate your own GPG key and export it's key id
```
gpg --gen-key
gpg --list-keys
```
Then ask repository maintainer to add it to `.sops.yaml`

After that you can decrypt all secrets
```
make decrypt
```
!DO NOT FORGET TO ENCRYPT THEM BEFORE COMMIT

```
make encrypt
```
