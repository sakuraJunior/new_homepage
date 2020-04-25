<p align="center">
  <a href="https://sakuragumi.tk">
    <img
      alt="さくら組"
      src="assets/img/sakuragumiTitle.svg"
      width="400"
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

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/sakuraJunior/new_homepage)

### ディレクトリ構造
    .
    ├── index.html
    ├── about.html
    ├── ...
    ├── CNAME                 # ドメインの設定ファイル
    └── .github
    │      └── workflows
    │         ├── jekyll.yml  # GitHub Active 設定ファイル
    └── _data
    │   ├── navigation.yml    # ナビゲーション用ファイル
    │   ├── externalLink.yml  # ナビゲーション用ファイル
    └── layouts
    │   ├── default.html      # デフォルトのレイアウト
    └── assets
    │   └── css
    │      ├── default.css    # デフォルトのスタイル
    │      ├── {{ page.style }}.css  # ページ別のスタイル
    │   └── js
    │      ├── default.js     # デフォルトのJavaScript
    │      ├── {{ page.script }}.js  # ページ別のJavaScript
    │   └── img
    │      ├── sakuragumiIcon.svg
    │      ├── sakuragumiTitle.svg   
    │      ├──...
