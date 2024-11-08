# scss html

SCSS를 통해 사용해서 vogue 사이트 생성

### 페이지

- [메인 페이지](https://ra-ky.github.io/scss-html/)
- [서브 메인 페이지](https://ra-ky.github.io/scss-html/page-main.html)
- [서브 페이지](https://ra-ky.github.io/scss-html/page-sub.html)
- [뷰 페이지](https://ra-ky.github.io/scss-html/page.html)

### 디렉토리 구조

```
project/
├── assets/
│   ├── css/                    # 생성된 CSS
│   │   ├── styles.css
│   │   └── styles.min.css
│   ├── images/                 # 이미지 파일
│   │   └── logo.png
│   └── scss/                   # SCSS 파일
│       ├── _footer.scss        # 하단 스타일
│       ├── _header.scss        # 상단 스타일
│       ├── _layout.scss        # 레이아웃 스타일
│       ├── _posts.scss         # 글 관련 스타일
│       ├── _reset.scss         # html 스타일 리셋
│       ├── _*-media.scss       # media 관련 스타일
│       └── style.scss          # 전체 스타일 로드
├── index.html                  # 메인 HTML 파일
├── index.js                    # 자바스크립트 파일
├── page-main.html              # 자바스크립트 파일
├── page-sub.html               # 자바스크립트 파일
└── page.html                   # 서브 메인 HTML 파일
```
