MAJANGDONG — THE SECRET TABLE R2.1 / SHARE EDITION

1. GitHub → Netlify (권장)
   ZIP을 압축해제하고 index.html, share-r21.jpg, build.mjs, netlify.toml, README.txt (및 .gitignore)를 독립 제안서 저장소 최상위에 업로드합니다.
   Netlify의 Git 연결을 이용합니다. Base directory: 저장소 루트 / Build command: node build.mjs / Publish directory: _site.
   netlify.toml이 위 설정을 제공합니다. 운영 호텔·식당 홈페이지 저장소를 덮어쓰지 않습니다.
   빌드 시 Netlify가 제공하는 URL(운영), DEPLOY_PRIME_URL(미리보기)을 사용하여 og:url, og:image, twitter:image를 HTML에 직접 기록합니다. 추가 API키/패키지 설치가 필요 없습니다.
   주소를 바꾼 경우 다시 배포하십시오. SITE_URL로 공개 HTTPS 주소를 명시적으로 지정할 수도 있습니다.

2. 직접 확인
   원본 index.html을 더블클릭해 기존 4개 화면과 상호작용을 확인할 수 있습니다. 원본 메타정보는 상대주소이며 실제 공유는 배포 후 생성된 HTML로 확인합니다.
   GitHub Pages 등 다른 정적 호스팅 또는 수동 배포 시, Node.js에서 SITE_URL 환경 변수에 실제 공개 주소(저장소 하위 경로 포함)를 설정하고 node build.mjs 실행 후 _site 안의 두 파일을 배포합니다. GitHub 저장소 파일 보기 주소 자체는 배포 주소가 아닙니다.

3. 카카오톡 확인
   공개 URL과 share-r21.jpg가 각각 HTTPS 200으로 접근 가능한지 확인합니다.
   링크를 카카오톡 나와의 채팅에 붙여넣어 대표 이미지, 제목, 설명을 확인합니다.
   과거 썸네일이 보인다면 카카오디벨로퍼스 도구 > 카카오톡 URL 메타정보 관리(OG 캐시)에서 해당 URL을 조회하고 캐시를 초기화합니다.
   앱 화면에 따라 이미지 크롭 또는 제목 생략이 있을 수 있습니다.

4. 이번 변경
   R2의 디자인, 4개 페이지, 초대권 개봉, 혜택 조건, 복사 기능 유지.
   링크 제목: 대표님, 큰일 났습니다!ㅋㅋ
   썸네일: 제공된 AI 생성 캠페인 콘셉트 이미지 전체를 유지하고 JPEG로 압축 (1200×800).
   이미지 속 음식은 실제 메뉴 사진으로 인증된 것이 아니며, 행사 수치와 성과 문구도 기획안입니다. 소비자용 실제 광고에는 승인·실사 검수가 필요합니다.
   실제 쿠폰 발급·서버 저장·광고·배포 없음. noindex 유지(접근통제 아님). 링크는 접근 가능한 사람에게 공개되므로 가족/대표 검토용으로만 사용합니다.
