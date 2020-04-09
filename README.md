<p align="center">
  <a href="https://sakuragumi.tk">
    <img
      alt="さくら組"
      src="https://sakuragumi.tk/img/sakuragumi.svg"
      width="200"
    />
  </a>
</p>

さくら組ホームページのリポジトリです。静的サイトジェネレーターである**Jekyll**を利用しています。

![Jekyll site CI](https://github.com/sakuraJunior/new_homepage/workflows/Jekyll%20site%20CI/badge.svg)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/sakuraJunior/new_homepage.svg)](http://isitmaintained.com/project/sakuraJunior/new_homepage "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/sakuraJunior/new_homepage.svg)](http://isitmaintained.com/project/sakuraJunior/new_homepage "Percentage of issues still open")

### 環境構築の手順

**実機を使う場合**
```
# gem install jekyll
# jekyll server
```
**GitPodを使う場合**

[ここ](https://gitpod.io/#https://github.com/sakuraJunior/new_homepage)のページで上のコマンドを実行してください。

### 構成
共通のHTML | 共通のCSS | 共通のJS
--- | --- | ---
layouts/default.html | assets/css/default.css | assets/js/default.js

ページごとのHTML | ページごとのCSS | ページごとのJS
--- | --- | ---
/ | assets/css/{{ page.title &#124; downcase }}.css | assets/js/{{ page.title &#124; downcase }}.js

画像 | ...
--- | ---
assets/img/ | ...
