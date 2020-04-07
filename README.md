<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://sakuragumi.tk/img/sakuragumi.svg"
      width="200"
    />
  </a>
</p>

さくら組ホームページリポジトリ。静的サイトジェネレーターである**Jekyll**を利用しています。
## 説明
* `layouts/default.html`に共通のHTMLを、`assets/css/default.css`,`assets/js/default.js`に共通のCSSとJSを入れます。`{{ content }}`というところにそれぞれのHTMLが追加されます。
* 画像などは`assets/img`に配置してください。
* 共通ではないCSS,JSに関しては`assets/css/ページタイトル.css`,`assets/js/ページタイトル.js`を作成し、その中に記述してください。自動で読み込まれます。

**注意**：独自ドメインの設定をしていない場合、相対リンクのが**うまく機能しない**場合があります。