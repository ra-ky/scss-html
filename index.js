var posts_list = [
  {
    image: "assets/images/post0.webp",
    category: "셀러브리티 스타일",
    date: "2024.10.20",
    title: "헐렁한 청바지의 짝꿍은 스니커즈만이 아닙니다",
    author: "황혜원",
  },
  {
    image: "assets/images/post1.webp",
    category: "Beauty",
    date: "2024.11.04",
    title: "MY FIRST LUXURY",
    author: "",
  },
  {
    image: "assets/images/post2.webp",
    category: "패션 뉴스",
    date: "2024.11.05",
    title: "사르노가 '올드 할리우드'에 바치는 헌사, 구찌 노떼 컬렉션",
    author: "안건호, Nicole Phelps",
  },
  {
    image: "assets/images/post3.webp",
    category: "뷰티 화보",
    date: "2024.11.04",
    title: "모든 여성에겐 자신만의 누드 컬러가 있다",
    author: "이주현, Nicole Phelps",
  },
  {
    image: "assets/images/post4.webp",
    category: "셀러브리티 스타일",
    date: "2024.11.01",
    title: "클래식한 아가일 패턴, 셀럽들의 활용법",
    author: "오기쁨",
  },
  {
    image: "assets/images/post5.webp",
    category: "뷰티 트렌드",
    date: "2024.11.04",
    title: "송혜교의 단발 변천사",
    author: "오기쁨",
  },
  {
    image: "assets/images/post6.webp",
    category: "셀러브리티 스타일",
    date: "2024.10.21",
    title: "안젤리나 졸리가 통 좁은 바지를 입는 법",
    author: "이소미",
  },
  {
    image: "assets/images/post7.webp",
    category: "패션 아이템",
    date: "2024.11.04",
    title: "걸음걸이가 달라지는 올겨울 유행 스커트!",
    author: "황혜원",
  },
  {
    image: "assets/images/post8.webp",
    category: "웰리스",
    date: "2024.11.02",
    title: "신경과학자들이 권장하는 뇌 회로 젊어지는 일상 활동 2가지",
    author: "김초롱, Marie Bladt",
  },
  {
    image: "assets/images/post9.webp",
    category: "셀러브리티 스타일",
    date: "2024.11.05",
    title: "겨울이면 여전히 사랑받는 ‘뷰티 인사이드’ 한효주 룩",
    author: "오기쁨",
  },
];

// 페이지가 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
  // progress
  const progress = document.querySelector(".progress");
  // top 버튼
  const btnTop = document.querySelector(".btn_top");
  // 푸터
  const footer = document.querySelector("footer");

  // 스크롤 이벤트를 감지하여 헤더의 클래스를 토글합니다.
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const footerRect = footer.getBoundingClientRect();
    const footerTop = footerRect.top;

    // 푸터 영역에 도달했으면 .lock 클래스 추가
    if (footerTop <= window.innerHeight) {
      btnTop.classList.add("lock");
    } else {
      btnTop.classList.remove("lock");
    }

    // console.log(window.scrollY);
    if (window.scrollY > 300) {
      // 스크롤이 300px 이상 내려갔을 때
      btnTop.classList.add("visible");
    } else {
      btnTop.classList.remove("visible");
    }

    if (window.scrollY > lastScrollY) {
      // 스크롤을 내릴 때: 헤더 숨기기
      header.classList.add("hidden");
    } else {
      // 스크롤을 올릴 때: 헤더 보이기
      header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;

    if (progress) {
      const scrollTop = window.scrollY; // 현재 스크롤 위치
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight; // 문서의 총 높이에서 뷰포트 높이를 뺌
      const scrollPercent = (scrollTop / docHeight) * 100; // 스크롤 백분율 계산
      progress.style.width = `${scrollPercent}%`;
    }
    // 스크롤이 맨 아래에 도달했는지 확인
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      // 1초 대기 후 loadMorePosts 호출
      setTimeout(() => {
        loadMorePosts(); // 추가 글 가져오기 함수 호출
      }, 1000);
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  });

  function getPostHtml(postData) {
    const postHtml = `<a href="page.html">
      <div class="thum">
        <img src="${postData.image}" />
      </div>
      <div class="content">
        <p class="category">${postData.category}</p>
        <h3>${postData.title}</h3>
        <p class="date">
          ${postData.date}<span>by ${postData.author}</span>
        </p>
      </div>
    </a>`;
    return postHtml;
  }

  function loadMorePosts() {
    const morePosts = document.querySelector("#more-posts");

    if (morePosts && morePosts.querySelectorAll("li").length < 30) {
      posts_list.forEach((post) => {
        const newPost = document.createElement("li");
        newPost.innerHTML = getPostHtml(post);
        morePosts.appendChild(newPost);
      });
    }
  }

  // 모든 .post 요소를 선택
  const posts = document.querySelectorAll(".post");

  // 각 .post 요소에 HTML 삽입
  posts.forEach((post) => {
    const index = post.getAttribute("data-index");
    const postData = posts_list[index];
    if (postData) {
      post.innerHTML = getPostHtml(postData);
    }
  });

  // 모든 .post-m 요소를 선택
  const postsMain = document.querySelectorAll(".post-m");

  // 각 .post-m 요소에 HTML 삽입
  postsMain.forEach((post) => {
    const index = post.getAttribute("data-index");
    const postData = posts_list[index];
    if (postData) {
      const postHtml = `<a href="page.html">
        <div class="thum thum_bg">
          <img src="${postData.image}" />
        </div>
        <div class="thum_content">
          <p><span>${postData.category}</span>${postData.date}</p>
          <h2>${postData.title}</h2>
        </div>
      </a>`;
      post.innerHTML = postHtml;
    }
  });

  // 모든 .post-t 요소를 선택
  const postsThum = document.querySelectorAll(".post-t");

  // 각 .post-t 요소에 HTML 삽입
  postsThum.forEach((post) => {
    const index = post.getAttribute("data-index");
    const postData = posts_list[index];
    if (postData) {
      const postHtml = `<a href="page.html">
        <div class="thum thum_bg">
          <img src="${postData.image}" />
        </div>
        <div class="thum_content">
          <p>${postData.category}</p>
          <h3>${postData.title}</h3>
        </div>
      </a>`;
      post.innerHTML = postHtml;
    }
  });

  // 모든 .post 요소를 선택
  const postsList = document.querySelectorAll(".post-l");

  // 각 .post 요소에 HTML 삽입
  postsList.forEach((post) => {
    const index = post.getAttribute("data-index");
    const postData = posts_list[index];
    if (postData) {
      const postHtml = `<a href="page.html">
        <h3>${postData.title}</h3>
      </a>`;
      post.innerHTML = postHtml;
    }
  });
});
