// 레시피 데이터에 카테고리 필드 추가
const recipes = [
  {
    title: "김치찌개",
    servings: 2,
    time: "40분",
    method: "찌개",
    image: "img/kimchi.jpg",
    categories: ["한식", "찌개"],
    ingredients: [
      { item: "김치", quantity: 1.5, unit: "컵", prep: "자르기" },
      {
        item: "돼지고기",
        quantity: 200,
        unit: "g",
        prep: "한입 크기로 자르기",
      },
      { item: "두부", quantity: 1, unit: "모", prep: "깍둑 썰기" },
      { item: "파", quantity: 1, unit: "대", prep: "송송 썰기" },
      { item: "물", quantity: 2, unit: "컵", prep: "그대로 사용" },
    ],
    steps: [
      "돼지고기를 볶습니다.",
      "김치를 넣고 함께 볶습니다.",
      "물과 두부를 넣고 끓입니다.",
      "파를 넣고 마무리합니다.",
    ],
  },
  {
    title: "스팸볶음밥",
    servings: 2,
    time: "20분",
    method: "볶음",
    image: "img/spam_fried.jpeg",
    categories: ["볶음밥", "초간단 요리"],
    ingredients: [
      { item: "밥", quantity: 2, unit: "공기", prep: "갓 지은 밥" },
      { item: "스팸", quantity: 100, unit: "g", prep: "작게 깍둑 썰기" },
      { item: "양파", quantity: 0.5, unit: "개", prep: "다지기" },
      { item: "대파", quantity: 1, unit: "대", prep: "송송 썰기" },
      { item: "계란", quantity: 2, unit: "개", prep: "풀어서 스크램블" },
      { item: "간장", quantity: 1, unit: "큰술", prep: "그대로 사용" },
      { item: "참기름", quantity: 1, unit: "큰술", prep: "그대로 사용" },
      { item: "후추", quantity: 0.5, unit: "작은술", prep: "그대로 사용" },
    ],
    steps: [
      "팬에 기름을 두르고 스팸을 노릇하게 볶습니다.",
      "양파와 대파를 넣고 함께 볶아 향을 냅니다.",
      "밥을 넣고 잘 섞으면서 볶습니다.",
      "간장과 후추를 넣고 간을 맞춥니다.",
      "스크램블한 계란을 넣고 골고루 섞은 뒤 참기름을 뿌려 마무리합니다.",
    ],
  },
  {
    title: "양배추 덮밥",
    servings: 1,
    time: "15분",
    method: "볶음",
    image: "img/cabage.jpg",
    categories: ["초간단 요리", "덮밥", "채소 요리"],
    ingredients: [
      { item: "밥", quantity: 1, unit: "공기", prep: "따뜻하게 준비" },
      { item: "양배추", quantity: 1, unit: "줌", prep: "채썰기" },
      { item: "대파", quantity: 10, unit: "cm", prep: "송송 썰기" },
      { item: "간장", quantity: 1, unit: "큰술", prep: "그대로 사용" },
      { item: "설탕", quantity: 0.5, unit: "큰술", prep: "그대로 사용" },
      { item: "식용유", quantity: "약간", unit: "", prep: "볶음용" },
    ],
    steps: [
      "양배추는 채썰고, 대파는 송송 썰어주세요.",
      "팬에 식용유를 두르고 대파를 먼저 볶아 향을 냅니다.",
      "양배추를 넣고 숨이 죽을 때까지 볶아줍니다.",
      "간장과 설탕을 넣고 고루 섞으며 볶습니다.",
      "밥 위에 볶은 양배추를 얹고 간장 소스를 살짝 추가합니다.",
    ],
  },
  {
    title: "계란찜 (전자레인지)",
    servings: 1,
    time: "5분",
    method: "전자레인지",
    image: "img/egg_jjim.jpg",
    categories: ["초간단 요리", "계란 요리", "전자레인지"],
    ingredients: [
      { item: "계란", quantity: 2, unit: "개", prep: "깨서 사용" },
      { item: "물", quantity: 0.5, unit: "컵", prep: "그대로 사용" },
      { item: "소금", quantity: "약간", unit: "", prep: "그대로 사용" },
    ],
    steps: [
      "계란을 그릇에 깨 넣고 소금을 넣습니다.",
      "물을 넣고 계란이 완전히 풀릴 때까지 잘 저어줍니다.",
      "전자레인지용 뚜껑이나 랩을 씌워줍니다.",
      "전자레인지에서 3~4분간 익힙니다 (중간에 확인 가능).",
      "젓가락으로 찔러 반쯤 익었을 때 한 번 저어주면 더 부드러워져요.",
    ],
  },
  {
    title: "고추참치 비빔밥",
    servings: 1,
    time: "10분",
    method: "비빔",
    image: "img/gochujang_tuna.jpg",
    categories: ["초간단 요리", "참치 요리", "한식"],
    ingredients: [
      { item: "밥", quantity: 1, unit: "공기", prep: "따뜻하게 준비" },
      { item: "고추참치", quantity: 0.5, unit: "캔", prep: "그대로 사용" },
      {
        item: "상추 또는 양배추",
        quantity: "적당량",
        unit: "",
        prep: "씻어서 채썰기",
      },
      { item: "참기름", quantity: "약간", unit: "", prep: "그대로 사용" },
      { item: "김가루", quantity: "약간", unit: "", prep: "토핑용" },
    ],
    steps: [
      "채소는 씻어 물기를 제거한 뒤 채썰어 준비합니다.",
      "밥을 그릇에 담고 고추참치를 가운데 올립니다.",
      "채썬 채소를 고추참치 주변에 보기 좋게 올려줍니다.",
      "참기름과 김가루를 위에 뿌려줍니다.",
      "먹기 직전에 잘 비벼주세요.",
    ],
  },
  {
    title: "감바스 오일 파스타",
    servings: 1,
    time: "20분",
    method: "볶음",
    image: "img/shrimp_oil_pasta.jpg",
    categories: ["파스타", "해산물 요리"],
    ingredients: [
      { item: "스파게티면", quantity: 100, unit: "g", prep: "소금물에 삶기" },
      { item: "새우", quantity: 8, unit: "마리", prep: "해동" },
      { item: "마늘", quantity: 4.5, unit: "쪽", prep: "편으로 썰기" },
      { item: "올리브유", quantity: "넉넉히", unit: "", prep: "볶음용" },
      { item: "소금", quantity: "약간", unit: "", prep: "간 맞추기" },
    ],
    steps: [
      "스파게티면을 소금물에 8~10분간 삶고 체에 밭쳐 물기를 뺍니다.",
      "마늘은 편으로 썰고, 새우는 해동합니다.",
      "팬에 올리브유를 넉넉히 두르고 마늘을 중약불로 볶아 향을 냅니다.",
      "새우를 넣고 익을 때까지 볶습니다.",
      "삶은 면을 넣고 잘 섞으며 볶아줍니다.",
      "소금으로 간을 맞추고 불을 끕니다.",
    ],
  },
  {
    title: "고구마 치즈구이",
    servings: 1,
    time: "5분",
    method: "전자레인지",
    image: "img/sweet_potato.jpeg",
    categories: ["초간단 요리", "간식", "전자레인지"],
    ingredients: [
      {
        item: "삶은 고구마",
        quantity: 1,
        unit: "개",
        prep: "껍질 벗기고 으깨기",
      },
      { item: "슬라이스 치즈", quantity: 1, unit: "장", prep: "그대로 사용" },
      { item: "꿀 또는 연유", quantity: "약간", unit: "", prep: "뿌리기용" },
    ],
    steps: [
      "고구마는 껍질을 벗기고 으깨줍니다.",
      "전자레인지용 용기에 고구마를 담고 윗면을 평평하게 정리합니다.",
      "슬라이스 치즈를 얹습니다.",
      "전자레인지에 1~1.5분간 돌립니다.",
      "꿀 또는 연유를 뿌려 마무리합니다.",
    ],
  },
  {
    title: "카레라이스",
    servings: 2,
    time: "20분",
    method: "볶음 & 끓임",
    image: "img/curry.jpg",
    categories: ["한그릇 요리", "초간단 요리"],
    ingredients: [
      { item: "밥", quantity: 2, unit: "공기", prep: "따뜻하게 준비" },
      { item: "카레가루", quantity: 2, unit: "큰술", prep: "그대로 사용" },
      { item: "감자", quantity: 0.5, unit: "개", prep: "깍둑 썰기" },
      { item: "양파", quantity: 0.5, unit: "개", prep: "깍둑 썰기" },
      { item: "당근", quantity: "약간", unit: "", prep: "깍둑 썰기" },
      { item: "식용유", quantity: "약간", unit: "", prep: "볶음용" },
    ],
    steps: [
      "감자, 양파, 당근을 작게 깍둑 썰기 합니다.",
      "팬에 식용유를 두르고 야채를 먼저 볶습니다.",
      "물을 자박하게 붓고 중불에서 7~10분 끓입니다.",
      "카레가루를 넣고 잘 저어가며 2분 더 끓입니다.",
      "밥 위에 카레를 얹어 완성합니다.",
    ],
  },
  {
    title: "콘치즈",
    servings: 2,
    time: "5분",
    method: "전자레인지",
    image: "img/corn_cheese.jpg",
    categories: ["간식", "초간단 요리", "전자레인지"],
    ingredients: [
      { item: "스위트콘", quantity: 0.5, unit: "캔", prep: "물기 제거" },
      { item: "마요네즈", quantity: 1, unit: "큰술", prep: "섞기용" },
      { item: "설탕", quantity: "약간", unit: "", prep: "섞기용" },
      { item: "피자치즈", quantity: 1, unit: "줌", prep: "위에 얹기" },
    ],
    steps: [
      "볼에 스위트콘, 마요네즈, 설탕을 넣고 섞습니다.",
      "전자레인지용 용기에 담고 피자치즈를 얹습니다.",
      "전자레인지에서 1~2분간 치즈가 녹을 때까지 돌립니다.",
      "파슬리 가루나 후추를 뿌려 마무리하면 고급스럽게 연출됩니다.",
    ],
  },
  {
    title: "참치마요 덮밥",
    servings: 1,
    time: "15분",
    method: "비빔/덮밥",
    image: "img/tuna_mayo.png",
    categories: ["초간단 요리", "참치 요리", "덮밥"],
    ingredients: [
      { item: "밥", quantity: 1, unit: "공기", prep: "따뜻하게 준비" },
      { item: "참치캔", quantity: 1, unit: "개", prep: "기름 제거" },
      { item: "양파", quantity: 0.25, unit: "개", prep: "잘게 다지기" },
      { item: "마요네즈", quantity: 3, unit: "큰술", prep: "참치 마요 소스용" },
      { item: "설탕", quantity: 0.5, unit: "큰술", prep: "소스용" },
      { item: "식초", quantity: 0.5, unit: "큰술", prep: "소스용" },
      { item: "소금", quantity: 1, unit: "약간", prep: "간 맞추기" },
      { item: "계란", quantity: 1, unit: "개", prep: "프라이(선택)" },
      { item: "김가루", quantity: 1, unit: "약간", prep: "토핑용 (선택)" },
      { item: "통깨", quantity: 1, unit: "약간", prep: "토핑용 (선택)" },
    ],
    steps: [
      "참치캔을 열고 기름을 제거한 후, 볼에 담아주세요.",
      "양파 1/4개를 잘게 다져주세요.",
      "볼에 담은 참치에 다진 양파, 마요네즈, 설탕, 식초, 소금을 넣고 잘 섞어주세요.",
      "계란 1개를 프라이팬에 부쳐주세요. (선택)",
      "그릇에 밥을 담고, 그 위에 참치마요를 올린 후, 계란 프라이를 얹어주세요.",
      "기호에 따라 김가루와 통깨를 뿌려 마무리합니다.",
    ],
  },
  {
    title: "간장계란밥",
    servings: 1,
    time: "5분",
    method: "비빔",
    image: "img/soy_egg_fried.jpg",
    categories: ["초간단 요리", "한그릇 요리", "덮밥", "계란 요리"],
    ingredients: [
      { item: "밥", quantity: 1, unit: "공기", prep: "따뜻하게 준비" },
      { item: "계란", quantity: 1, unit: "개", prep: "프라이" },
      { item: "진간장", quantity: 1, unit: "큰술", prep: "비빔용" },
      { item: "참기름", quantity: 1, unit: "작은술", prep: "비빔용" },
      { item: "버터", quantity: 1, unit: "작은술", prep: "선택, 비빔용" },
      { item: "설탕", quantity: "약간", unit: "", prep: "선택, 감칠맛" },
      { item: "김가루", quantity: "약간", unit: "", prep: "토핑용" },
      { item: "통깨", quantity: "약간", unit: "", prep: "선택, 토핑용" },
    ],
    steps: [
      "따뜻한 밥 1공기를 그릇에 담아주세요.",
      "프라이팬에 기름을 두르고 계란 1개를 원하는 익힘 정도로 부쳐주세요.",
      "밥 위에 진간장 1큰술, 참기름 1작은술, 버터 1작은술(선택), 설탕 약간(선택)을 넣어주세요.",
      "양념이 밥과 잘 섞이도록 비벼주세요.",
      "계란 프라이를 밥 위에 올리고, 김가루와 통깨를 뿌려 마무리합니다.",
    ],
  },
  {
    title: "짜계치 (짜파게티 + 계란 + 치즈)",
    servings: 1,
    time: "10분",
    method: "끓임 & 볶음",
    image: "img/jjagyechi.png",
    categories: ["라면", "초간단 요리", "한그릇 요리", "계란 요리"],
    ingredients: [
      { item: "짜장라면", quantity: 1, unit: "개", prep: "예: 짜파게티" },
      { item: "계란", quantity: 1, unit: "개", prep: "반숙 프라이" },
      { item: "슬라이스 치즈", quantity: 1, unit: "장", prep: "그대로 사용" },
      { item: "물", quantity: 500, unit: "ml", prep: "면 삶기용" },
      { item: "식용유", quantity: "약간", unit: "", prep: "계란 프라이용" },
      { item: "파슬리 가루", quantity: "선택", unit: "", prep: "토핑용" },
      { item: "파마산 치즈 가루", quantity: "선택", unit: "", prep: "토핑용" },
    ],
    steps: [
      "냄비에 물 500ml를 붓고 끓입니다. 물이 끓으면 면과 건더기 스프를 넣고 4분간 끓여주세요.",
      "면이 끓는 동안, 프라이팬에 식용유를 두르고 계란을 반숙으로 부쳐주세요.",
      "면이 익으면 물을 대부분 따라 버리고, 약간의 물만 남겨주세요. 분말 스프를 넣고 잘 섞어줍니다.",
      "슬라이스 치즈를 면 위에 올리고, 치즈가 녹을 때까지 약한 불에서 저어줍니다.",
      "그릇에 면을 담고, 그 위에 계란 프라이를 올려주세요. 파슬리 가루나 파마산 치즈 가루를 뿌려 마무리합니다.",
    ],
  },
  {
    title: "간장 비빔국수",
    servings: 1,
    time: "15분",
    method: "비빔",
    image: "img/soysauce_noodle.jpg",
    categories: ["면 요리", "초간단 요리", "자취 요리"],
    ingredients: [
      { item: "소면", quantity: 100, unit: "g", prep: "삶기" },
      { item: "진간장", quantity: 2, unit: "큰술", prep: "양념장용" },
      { item: "설탕", quantity: 0.5, unit: "큰술", prep: "양념장용" },
      { item: "다진 마늘", quantity: 0.5, unit: "큰술", prep: "양념장용" },
      { item: "고춧가루", quantity: 0.5, unit: "큰술", prep: "선택, 양념장용" },
      { item: "참기름", quantity: 0.5, unit: "큰술", prep: "양념장용" },
      { item: "통깨", quantity: "약간", unit: "", prep: "양념장용" },
      { item: "오이", quantity: "약간", unit: "", prep: "채썰기, 선택 토핑" },
      { item: "김가루", quantity: "약간", unit: "", prep: "토핑용, 선택" },
      {
        item: "계란",
        quantity: "1",
        unit: "개",
        prep: "삶아서 반 갈라 토핑, 선택",
      },
    ],
    steps: [
      "냄비에 물을 끓이고, 소면을 넣어 삶아주세요. 끓어오르면 찬물 반 컵을 부어 거품을 가라앉히고, 이 과정을 2~3번 반복하여 면을 익혀주세요.",
      "삶은 소면을 찬물에 헹군 후, 손으로 비벼가며 전분기를 제거하고 체에 받쳐 물기를 빼주세요.",
      "볼에 진간장, 설탕, 다진 마늘, 고춧가루, 참기름, 통깨를 넣고 잘 섞어 양념장을 만들어주세요.",
      "물기를 뺀 소면에 양념장을 넣고 고루 비벼주세요.",
      "기호에 따라 오이 채, 김가루, 계란 등을 올려 마무리합니다.",
    ],
  },
  {
    title: "된장찌개",
    servings: 2,
    time: "20분",
    method: "찌개",
    image: "img/deongjang.jpeg",
    categories: ["한식", "찌개"],
    ingredients: [
      { item: "된장", quantity: 2, unit: "큰술", prep: "찌개 국물용" },
      { item: "애호박", quantity: 0.5, unit: "개", prep: "한 입 크기로 썰기" },
      { item: "양파", quantity: 0.5, unit: "개", prep: "한 입 크기로 썰기" },
      { item: "두부", quantity: 0.5, unit: "모", prep: "1.5cm 깍둑썰기" },
      { item: "대파", quantity: 0.5, unit: "대", prep: "송송 썰기" },
      { item: "청양고추", quantity: 1, unit: "개", prep: "송송 썰기 (선택)" },
      { item: "다진 마늘", quantity: 1, unit: "작은술", prep: "" },
      { item: "고춧가루", quantity: 0.5, unit: "큰술", prep: "선택" },
      { item: "물", quantity: 500, unit: "ml", prep: "찌개용" },
    ],
    steps: [
      "애호박과 양파는 한 입 크기로 썰어주세요.",
      "두부는 1.5cm 크기로 깍둑썰기 해주세요.",
      "대파와 청양고추는 송송 썰어주세요.",
      "냄비에 물 500ml를 붓고 된장을 풀어주세요.",
      "다진 마늘과 고춧가루를 넣고 끓여주세요.",
      "물이 끓기 시작하면 애호박과 양파를 넣고 중불에서 5분간 끓여주세요.",
      "두부를 넣고 3분간 더 끓여주세요.",
      "마지막으로 대파와 청양고추를 넣고 2분간 끓여주세요.",
      "간을 보고 기호에 따라 소금이나 간장을 추가해주세요.",
    ],
  },
  {
    title: "미역국",
    servings: 2,
    time: "30분",
    method: "끓이기",
    image: "img/miyeokguk.jpg",
    categories: ["국", "한식"],
    ingredients: [
      {
        item: "건미역",
        quantity: 10,
        unit: "g",
        prep: "찬물에 10분간 불린 후 자르기",
      },
      {
        item: "소고기 (국거리용)",
        quantity: 100,
        unit: "g",
        prep: "핏물 제거 후 한 입 크기로 썰기",
      },
      { item: "참기름", quantity: 1, unit: "큰술", prep: "볶기용" },
      { item: "국간장", quantity: 1.5, unit: "큰술", prep: "간 맞추기" },
      { item: "다진 마늘", quantity: 1, unit: "작은술", prep: "간 맞추기" },
      { item: "물", quantity: 800, unit: "ml", prep: "육수용" },
      { item: "소금", quantity: 1, unit: "약간", prep: "간 조절용" },
    ],
    steps: [
      "건미역은 찬물에 10분간 불린 후, 먹기 좋은 크기로 잘라주세요.",
      "소고기는 키친타월로 핏물을 제거한 후, 한 입 크기로 썰어주세요.",
      "냄비에 참기름을 두르고 중약불에서 소고기를 볶아주세요.",
      "고기가 반쯤 익으면 불린 미역을 넣고 함께 2~3분간 볶아주세요.",
      "국간장과 다진 마늘을 넣고 1분간 더 볶아주세요.",
      "물을 붓고 센 불에서 끓여주세요.",
      "끓어오르면 불을 중약불로 줄이고 15분간 끓여주세요.",
      "간을 보고 부족하면 소금으로 조절해주세요.",
    ],
  },
  {
    title: "떡볶이",
    servings: 2,
    time: "20분",
    method: "끓이기",
    image: "img/tteokbokki.jpg",
    categories: ["분식", "매운 요리", "초간단 요리"],
    ingredients: [
      {
        item: "떡볶이 떡",
        quantity: 200,
        unit: "g",
        prep: "냉동 떡이면 찬물에 10분 해동",
      },
      { item: "어묵", quantity: 2, unit: "장", prep: "한입 크기로 자르기" },
      { item: "대파", quantity: 0.5, unit: "대", prep: "어슷 썰기" },
      { item: "물", quantity: 300, unit: "ml", prep: "그대로 사용" },
      { item: "고추장", quantity: 1.5, unit: "큰술", prep: "양념장용" },
      {
        item: "고춧가루",
        quantity: 1,
        unit: "큰술",
        prep: "선택, 매운맛 조절",
      },
      { item: "설탕", quantity: 1, unit: "큰술", prep: "양념장용" },
      { item: "간장", quantity: 1, unit: "큰술", prep: "양념장용" },
      { item: "다진 마늘", quantity: 1, unit: "작은술", prep: "양념장용" },
    ],
    steps: [
      "어묵은 한 입 크기로 자르고, 대파는 어슷 썰기 해주세요.",
      "냄비에 물(300ml)을 붓고, 고추장, 고춧가루, 설탕, 간장, 다진 마늘을 넣고 잘 풀어 중불에서 끓여주세요.",
      "양념이 끓어오르면 떡을 넣고 떡이 말랑해질 때까지 3~5분간 끓여주세요.",
      "떡이 부드러워지면 어묵과 대파를 넣고 중불에서 5분 정도 더 끓여주세요.",
      "국물이 걸쭉해지고 양념이 떡에 잘 배면 완성입니다.",
    ],
  },
  {
    title: "치즈라면",
    servings: 1,
    time: "10분",
    method: "끓이기",
    image:
      "https://i.namu.wiki/i/IB40CpAHVmMzNLzboWyxLi6ETfuC1XXFzxR-ScNJGkyrvJPOCE0QJH5SQzHYHi3I4UNZCykFIUGPOuPvCd6OEw.webp",
    categories: ["라면", "초간단 요리"],
    ingredients: [
      { item: "라면", quantity: 1, unit: "봉", prep: "분말스프 포함" },
      { item: "슬라이스 치즈", quantity: 1, unit: "장", prep: "그대로 사용" },
      { item: "물", quantity: 500, unit: "ml", prep: "끓이기" },
    ],
    steps: [
      "냄비에 물(500ml)을 끓여주세요.",
      "물이 끓으면 면과 분말스프를 넣고 3~4분간 끓여주세요.",
      "면이 다 익으면 불을 끄고 슬라이스 치즈 1장을 올려 녹여주세요.",
      "치즈가 자연스럽게 녹으면 완성입니다.",
    ],
  },
  {
    title: "두부 스테이크",
    servings: 1,
    time: "25분",
    method: "부침",
    image: "https://i.ytimg.com/vi/dnB2kxNEi3o/maxresdefault.jpg",
    categories: ["두부요리"],
    ingredients: [
      {
        item: "부침용 두부",
        quantity: 1,
        unit: "모",
        prep: "물기 제거 후 으깨기",
      },
      { item: "양파", quantity: 0.25, unit: "개", prep: "잘게 다진 후 볶기" },
      { item: "빵가루", quantity: 3, unit: "큰술", prep: "그대로 사용" },
      { item: "계란", quantity: 1, unit: "개", prep: "그대로 사용" },
      { item: "간장", quantity: 1, unit: "큰술", prep: "반죽에 넣기" },
      { item: "후추", quantity: 1, unit: "약간", prep: "반죽에 넣기" },
      { item: "케찹", quantity: 2, unit: "큰술", prep: "소스용" },
      { item: "간장", quantity: 1, unit: "큰술", prep: "소스용" },
      { item: "올리고당", quantity: 1, unit: "큰술", prep: "소스용" },
    ],
    steps: [
      "두부는 키친타월로 감싸 물기를 꾹 눌러 제거한 뒤, 볼에 담아 곱게 으깨주세요.",
      "양파는 잘게 다져 프라이팬에 볶아 식혀주세요.",
      "으깬 두부에 볶은 양파, 계란, 빵가루, 간장, 후추를 넣고 고루 섞어주세요.",
      "반죽을 손에 쥐고 동그랗게 스테이크 모양으로 만들어주세요.",
      "프라이팬에 기름을 두르고 중불에서 앞뒤로 노릇하게 구워주세요.",
      "스테이크를 꺼낸 팬에 케찹, 간장, 올리고당을 넣고 끓여 소스를 만들어주세요.",
      "접시에 스테이크를 담고, 만들어둔 소스를 위에 뿌려 마무리해 주세요.",
    ],
  },
  {
    title: "마늘간장 우동볶음",
    servings: 1,
    time: "15분",
    method: "볶음",
    image:
      "https://static.wtable.co.kr/image-resize/production/service/recipe/1409/4x3/c08ac178-1062-42c6-ac5e-54443f8492a3.jpg",
    categories: ["면 요리", "초간단 요리"],
    ingredients: [
      {
        item: "냉동 우동사리",
        quantity: 1,
        unit: "인분",
        prep: "끓는 물에 데치기",
      },
      { item: "대파", quantity: 0.5, unit: "대", prep: "송송 썰기" },
      { item: "다진 마늘", quantity: 1, unit: "큰술", prep: "그대로 사용" },
      { item: "간장", quantity: 2, unit: "큰술", prep: "그대로 사용" },
      { item: "올리고당", quantity: 1, unit: "큰술", prep: "그대로 사용" },
      { item: "버터", quantity: 1, unit: "조각", prep: "마무리용" },
      { item: "후추", quantity: 1, unit: "약간", prep: "마무리용" },
      { item: "베이컨 또는 햄", quantity: 1, unit: "약간", prep: "선택 재료" },
    ],
    steps: [
      "냉동 우동 면은 끓는 물에 1~2분간 데쳐서 잘 풀어주세요.",
      "프라이팬에 식용유를 두르고 대파를 넣고 중불에서 볶아 파기름을 내주세요.",
      "다진 마늘을 넣고 볶아 향을 더하고, 베이컨도 함께 넣어주세요.",
      "우동 면을 넣고 간장과 올리고당을 넣어 고루 볶아주세요.",
      "버터를 한 조각 넣고 후추를 솔솔 뿌려 마무리해 주세요.",
    ],
  },
];

// 모든 카테고리 집합 구하기
const allCategories = Array.from(new Set(recipes.flatMap((r) => r.categories)));
let selectedCategory = null;
let filteredRecipeIndices = recipes.map((_, i) => i);
let currentRecipeIndex = 0;
let currentServing = 2;
let baseAmounts = [];
let timerInterval = null;
let timerSeconds = 0;
let sessionId = Date.now();

// 카테고리 필터 UI 생성 (하나만 선택 가능)
function renderCategoryFilters() {
  const section = document.getElementById("categoryFilterSection");
  section.innerHTML = "<strong>카테고리 필터:</strong>";
  allCategories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-btn";
    btn.textContent = cat;
    btn.onclick = () => {
      if (selectedCategory === cat) {
        // 이미 선택된 걸 다시 누르면 해제
        selectedCategory = null;
      } else {
        selectedCategory = cat;
      }
      applyCategoryFilter();
      highlightSelectedCategory();
    };
    section.appendChild(btn);
  });
  highlightSelectedCategory();
}

// 카테고리 필터링 함수 (하나만)
function applyCategoryFilter() {
  if (!selectedCategory) {
    filteredRecipeIndices = recipes.map((_, i) => i);
  } else {
    filteredRecipeIndices = recipes
      .map((r, i) => [r, i])
      .filter(([r]) => r.categories.includes(selectedCategory))
      .map(([_, i]) => i);
  }
  // 현재 선택된 레시피가 필터에 없다면 첫 번째로 변경
  if (!filteredRecipeIndices.includes(currentRecipeIndex)) {
    currentRecipeIndex = filteredRecipeIndices[0] ?? 0;
  }
  displayRecipe(currentRecipeIndex);
}

function displayRecipe(index) {
  // 레시피 인덱스가 필터링된 목록에 없으면 첫 번째로
  if (!filteredRecipeIndices.includes(index)) {
    index = filteredRecipeIndices[0] ?? 0;
  }
  currentRecipeIndex = index;
  const recipe = recipes[index];

  // 제목
  document.querySelector("h1").textContent = `${recipe.title}'s Recipe Book`;

  // 레시피 선택 셀렉트 박스 (필터링된 레시피만)
  let selectorHTML = `<select id="recipeSelector">`;
  filteredRecipeIndices.forEach((ri, idx) => {
    selectorHTML += `<option value="${ri}" ${ri == index ? "selected" : ""}>${
      recipes[ri].title
    }</option>`;
  });
  selectorHTML += `</select>`;

  // 소요시간, 요리법, 카테고리
  document.querySelector(".recipe-header").innerHTML = `
                ${selectorHTML}
                <img src="${recipe.image}" alt="${
    recipe.title
  }" style="width:100%; border-radius:8px; margin:1em 0;">
                <p><strong>소요시간:</strong> ${recipe.time}</p>
                <p><strong>요리법:</strong> ${recipe.method}</p>
                <p><strong>카테고리:</strong> ${recipe.categories.join(
                  ", "
                )}</p>
            `;

  // 재료
  const tbody = document.getElementById("ingredientTable");
  tbody.innerHTML = "";
  recipe.ingredients.forEach((ing) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <td>${ing.item}</td>
                    <td><span class="amount">${ing.quantity}</span> ${ing.unit}</td>
                    <td>${ing.prep}</td>
                `;
    tbody.appendChild(tr);
  });

  // 기본 인분 세팅
  currentServing = recipe.servings;
  baseAmounts.length = 0;
  recipe.ingredients.forEach((i) => baseAmounts.push(i.quantity));
  document.getElementById("currentServing").textContent = currentServing;

  // 조리 단계
  const stepsSection = document.querySelector(".steps-section");
  stepsSection.innerHTML = `<h3>조리 단계</h3>`;
  recipe.steps.forEach((step, i) => {
    const div = document.createElement("div");
    div.className = "step";
    div.id = `step${i + 1}`;
    div.innerHTML = `
                    <input type="checkbox" class="step-checkbox" onchange="toggleStep(${
                      i + 1
                    }, this)">
                    <span class="step-text">${step}</span>
                `;
    stepsSection.appendChild(div);
  });

  // 셀렉트 박스에서 레시피 변경 시 displayRecipe 호출
  document.getElementById("recipeSelector").addEventListener("change", (e) => {
    const newIndex = parseInt(e.target.value);
    displayRecipe(newIndex);
  });

  updateIngredientAmounts();
  highlightSelectedCategory();
  // 레시피 클릭 로깅
  logAction(`recipe_clicked_${recipe.title}`);
}

function updateIngredientAmounts() {
  const amounts = document.querySelectorAll(".amount");
  const recipe = recipes[currentRecipeIndex];
  amounts.forEach((el, i) => {
    const newAmount = (
      baseAmounts[i] *
      (currentServing / recipe.servings)
    ).toFixed(2);
    el.textContent = newAmount;
  });
}

// step 체크박스 토글
window.toggleStep = function (stepNum, checkbox) {
  const stepText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    stepText.classList.add("step-completed");
    logAction(`step_completed_${stepNum}`);
  } else {
    stepText.classList.remove("step-completed");
  }
};

function logAction(action) {
  const data = {
    sessionId: sessionId,
    action: action,
    timestamp: new Date().toISOString(),
  };
  console.log("Action logged:", data);
  // 실제로는 fetch로 서버에 보낼 수 있음
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  document.getElementById("timerDisplay").textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// 인분 조절
document.getElementById("increaseServing").addEventListener("click", () => {
  if (currentServing < 10) {
    currentServing += 0.5;
    currentServing = Math.round(currentServing * 10) / 10;
    document.getElementById("currentServing").textContent = currentServing;
    updateIngredientAmounts();
    logAction("increase_serving");
  }
});

document.getElementById("decreaseServing").addEventListener("click", () => {
  if (currentServing > 0.5) {
    currentServing -= 0.5;
    currentServing = Math.round(currentServing * 10) / 10;
    document.getElementById("currentServing").textContent = currentServing;
    updateIngredientAmounts();
    logAction("decrease_serving");
  }
});

function updateIngredientAmounts() {
  const amounts = document.querySelectorAll(".amount");
  const recipe = recipes[currentRecipeIndex];
  amounts.forEach((el, i) => {
    const newAmount = (
      baseAmounts[i] *
      (currentServing / recipe.servings)
    ).toFixed(2);
    el.textContent = parseFloat(newAmount);
  });
}

// 타이머
document.getElementById("startTimer").addEventListener("click", () => {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
    logAction("timer_start");
  }
});

document.getElementById("stopTimer").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  logAction("timer_stop");
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  updateTimerDisplay();
  logAction("timer_reset");
});

// 완료 버튼
document.getElementById("saveBtn").addEventListener("click", () => {
  logAction("recipe_completed");
  alert("레시피 완료! 수고하셨습니다.");
});

// 선택된 카테고리 버튼 하이라이트
function highlightSelectedCategory() {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    if (selectedCategory === btn.textContent) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

function logAction(action) {
  const data = {
    sessionId: sessionId,
    action: action,
    timestamp: new Date().toISOString(),
    currentRecipe: recipes[currentRecipeIndex]?.title || "",
    selectedCategory: selectedCategory || "전체",
  };
  console.log("Action logged:", data);

  fetch(
    "https://script.google.com/macros/s/AKfycbzdyXZcnRNwfOU9DYjsKzcCCJufl_mTrnrQkfEEMn0PF9y-4ipR7jlWqNjfBhW2lAQv/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `data=${encodeURIComponent(JSON.stringify(data))}`, // ✅ 이렇게 감싸서 보냅니다.
    }
  )
    .then((res) => res.json())
    .then((resp) => console.log("Action log saved:", resp))
    .catch((err) => console.error("Failed to log action:", err));
}

const randomIndex = Math.floor(Math.random() * recipes.length);
// 초기화
renderCategoryFilters();
displayRecipe(randomIndex);
