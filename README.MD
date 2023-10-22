# 웅진씽크빅 - page UI Editor

---

개발자가 아닌 기획자, 디자이너를 위한 page UI 편집 툴

## 프로젝트 소개

---

"유데미 X 웅진 10주 완성 프로젝트 캠프"의 웅진씽크빅 기업연계 프로젝트로 수행한 프로젝트 입니다.

기존 웹 페이지는 개발자가 아니라면 수정하기 어렵거나 제한적으로 수정이 가능했지만, 이 프로젝트에서 제시하는 UI Editor는 개발자가 아닌 기획자, 디자이너 등 누구나 클릭 한 번에 페이지 디자인을 수정할 수 있게 합니다.

추가로 개발환경에서는 Atomic Design Pattern을 사용하여 코드 재사용성과 개발 확장성의 문을 열어두었으며, UI Editor의 새로운 기능을 추가할 수 있게 지원합니다.

### 개발 기간

- 2023/07/17 ~ 2023/08/10
- 리팩토링 2023/08/20 ~

### 멤버

- 김윤수
- 김재하

### 사용된 기술

<aside>
💡 `Typescript`,`React.js`, `Redux tool-kit`, `tailwindCSS`, `vite`, `express` ,`react` ,`React-router-dom`**

</aside>

### 왜 리액트 라우터 돔을 사용했나?

최신 버전인 6.4 버전을 사용하였다 기존 구버전과 사용방식이 많이 달라졌는데 우리가 사용하는 아토믹 디자인과 잘 맞을 것이라 생각하였다.

```tsx
const router = createBrowserRouter([
  {
    path: '/edit/:id',
    element: <EditPage />,
    loader: editPageLoader,
    action: editPageAction,
  }]
```

이런 식으로 정의 되는데 로더함수의 경우 페이지가 렌더링 되기 전 실행되며 주로 데이터를 로딩해온다

액션의 경우 제출된 데이터를 받는 함수이다, 액션 함수에서는 데이터를 서버에 보내는 로직이 기술된다.

각 페이지가 어떤 데이터를 보내고 받는지 한눈에 알아볼 수 있다.

### 왜 리덕스를 사용했나?

![props.png](/ui_tool/readmeSrc/props.png)
리액트를 사용하다보면 컴포넌트간의 계층 구조로 인해 컴포넌트간의 정보를 전달이 힘들어진다

우리팀은 아토믹 디자인을 사용해 더욱 작게 원자 단위로 쪼개어 컴포넌트를 제작하였기 때문에 더 심화된 계층 구조를 가지고있다 그렇기 때문에 전역상태관리는 필수 불가결한 일이다,

### 시연 연상

https://www.youtube.com/embed/iTgT1GZ2nG4

---

## 사용방법

1. 메뉴관리 - 네비게이션바를 수정할 수 있음

- 메뉴 항목 추가 버튼을 통해 메뉴를 추가
- 메뉴 목록에서 + 버튼 클릭시 하위 메뉴를 추가
- 톱니바퀴 버튼 클릭시 이름변경, 링크 변경
- X 버튼 클릭시 메뉴 삭제

2. 페이지 관리

- 페이지명 클릭시 디자인한 페이지 새창으로 띄움
- 상세버튼 클릭시 페이지이름, 경로 수정
- 복제버튼 클릭시 디자인된 페이지를 바탕으로 새로운 페이지 생성
- 디자인 버튼 클릭시 홈페이지 디자인 가능

---

## 프로젝트 상세 - UI 수정하기

---

### 문제정의

기존 웅진씽크빅의 웹사이트는 페이지의 정보를 분할된 이미지를 통해 사용자에게 제공합니다.

이 방법은 웹 페이지 내에서 즉각적인 수정이 어렵고, 원본 파일을 가지고 있어야 유지보수가 가능합니다.

디자이너가 없을 때, 원본 파일이 없을 때.. 이런 상황에선 우린 어떻게 해결해야 할까요?

---

### 예제

![기존 웅진씽크빅 사이트의 상세페이지 형태](/ui_tool/readmeSrc/Untitled.png)

기존 웅진씽크빅 사이트의 상세페이지 형태

---

### UI Editor의 중요성

**유지 보수성 :**

누구나 쉽게 다룰 수 있도록 기획된 UI Editor를 통해 기존의 웹페이지 데이터베이스를 기반으로 웹페이지를 추가하거나 수정 및 관리를 진행할 수 있습니다.

**확장성 :**

웹페이지를 디자인하기 위한 도구에 대한 확장성을 객체 형태로 확보해두었습니다.

그래도 개발자를 통해 새로운 디자인 기능을 추가하십시오!

**SEO :**

기존 상세페이지에 이미지 파일로 상세설명을 대체하면, SEO(검색 엔진 최적화)를 이룰 수 없습니다.

UI Editor를 통해 웹 표준을 따르는 웹페이지를 구성해보세요. 그럼 검색을 통해 새로운 사용자들이 유입하게 될 것입니다.

## 개발 상세

---

> 한정된 시간과 인력, 조건 아래에서 최선의 개발 생산성을 위한 고민

### 상황 #1. 시간을 아끼기 위한 중복된 코드 생성 방지

---

1. 한정된 기간과 인력을 가지고 있었습니다.
2. 개발에 대한 약속 없이 개발을 진행하면, 비슷한 기능 또는 디자인을 가진 컴포넌트들이 수도없이 중복되어 작성되는 일들이 많았습니다.
3. 이러한 중복 코드 생성으로 인한 시간 낭비를 하고 싶지 않았습니다.
4. 우리에겐 특정 목적을 가진 컴포넌트들을 정리해서 확인하고 재활용하고자 했습니다.

### Atomic Design Pattern

---

![Untitled](/ui_tool/readmeSrc/atomic.png)

**아토믹 디자인 :**

주어진 디자인 시스템을 체계적이고 계층적으로 만들기 위한 개발 방법론

화학에서 원자, 분자 구조처럼 수많은 작은 디자인 단위 간 연결성을 활용합니다.

결과적으로, 세상의 모든 것이 원자로 구성되어 있듯, 우리의 UI 컴포넌트도 기초적인 구성 요소(Atom)로 분해할 수 있습니다.

```markdown
1. 원자(Atoms)
   디자인 시스템에서 가장 작고 기초적인 블록입니다. 버튼, 입력 필드, 레이블 등의 요소들이 여기에 해당합니다.

2. 분자(Molecules)
   UI 요소들의 그룹이 하나의 단위로 기능하는 것들입니다. 예를들어, 폼 레이블, 검색 입력창, 버튼이라는 Atom들이 검색 폼 분자로 결합될 수 있습니다.

3. 생물체(Organisms)
   분자와 원자들의 그룹으로 구성된 복잡한 UI 컴포넌트들입니다. 실질적으로 데이터를 받아먹고 새로운 결과물을 보여주기도 하는 실질 기능 그룹입니다.

4. 템플릿(Templates)
   컴포넌트들을 디자인 레이아웃에 배치하는 페이지 수준의 객체입니다. 이번 개발에서는 제외되었습니다.

5. 페이지(Pages)
   이 모든 원자, 분자, 생물체들이 하나의 페이지로 완성된 뷰를 보여주는 것을 뜻합니다.
```

**장점 :**

1. **일관성** - 디자인 시스템을 기반으로 원자, 분자, 생물체를 구성하고 재사용함으로써 애플리케이션의 다양한 부분에서 UI가 일관되게 유지됩니다.
2. **효율성** - 기존 컴포넌트를 사용하여 새로운 UI를 빠르게 조립할 수 있습니다.
3. **유지 보수성** - 원자가 업데이트되면 해당 원자를 사용하는 모든 컴포넌트가 업데이트되어 전체 애플리케이션에 일관된 변경을 보장합니다.

**결론 :**

- 아토믹 디자인은 UI 디자인을 체계적이고 계층적으로 생각하는 방법을 제공합니다.
- 아토믹 디자인 방법으로 UI를 구축함으로써 더 일관되고 확장 가능하며 유지 관리가 쉬운 디자인을 만들 수 있습니다. 이는 UI Editor에서만이 아니라, 다른 페이지, 프로젝트를 형성할 때도 적용할 수 있습니다.

예시

![Modal Image1](/uitool/ui_tool/readmeSrc/ex1.svg)

![Modal Image2](/uitool/ui_tool/readmeSrc/ex2.svg)

![Modal Image3](/uitool/ui_tool/readmeSrc/ex3.svg)

이러한 3개의 비슷한 모달이 존재합니다.

여기서 공통적인 부분은 모달을 담는 Container, title, button이 있습니다

```jsx
페이지 상세
<ModalContainer height="low">
   <ModalTitle title="페이지 상세" />
   <ModalDetailContent />
   <ModalButton method="PUT" />
</ModalContainer>

페이지 복제
<ModalContainer height="low">
   <ModalTitle title="페이지 복제" />
   <ModalDuplicationContent />
   <ModalButton method="POST" />
</ModalContainer>

링크설정
<ModalContainer height="high">
    <ModalTitle title="링크 설정" />
    <ModalLinkSettingContent />
    <ModalButton
      method="Dispatch"
      boxIndex={boxIndex}
      blockIndex={blockIndex}
     />
</ModalContainer>,
```

위 코드는 organism유기체의 단계로 원자와 분자가 모여 하나의 독립적 기능을 만드는 단계입니다

각각 Content라는 컴포넌트만 기능별로 필요한 부분을 담고 있으며 공통적인 형태를 가지고있는 부분은 그냥 조합하여 필요한 부분만 변경하도록하여 사용을 하고 있어 재사용성과 가독성이 매우 높아졌습니다

---

### Atomic Design Pattern을 사용하며 얻은 것

**일관된 UI 스타일 :**

한 가지 버튼을 만드는데, 4명의개발자가 만들면 4개의 다른 버튼이 생겨납니다.

우리는 이런 비효율적인 상황을 막고 싶었고, 하나의 UI 조각을 다 같이 활용할 수 있게 되었습니다.

**Docs과 같은 디렉토리 구조 :**

- 디렉토리 구조
  ```markdown
  **디렉토리 구조**
  src
  ┣ assets
  ┣ atom
  ┃ ┣ Button
  ┃ ┃ ┣ ButtonLogin.tsx
  ┃ ┃ ┣ ButtonOutline.tsx
  ┃ ┃ ┗ ButtonSmartAll.tsx
  ┃ ┣ Card
  ┃ ┃ ┣ CardCircle.tsx
  ┃ ┃ ┣ CardSquareBig.tsx
  ┃ ┃ ┣ CardSquareNormal.tsx
  ┃ ┃ ┣ CardSquareWide.tsx
  ┃ ┃ ┗ CardSquareWideRow.tsx
  ┃ ┣ Edit
  ┃ ┃ ┣ card
  ┃ ┃ ┃ ┗ CardList.tsx
  ┃ ┃ ┣ image
  ┃ ┃ ┃ ┣ Image1.tsx
  ┃ ┃ ┃ ┣ Image2.tsx
  ┃ ┃ ┃ ┣ Image3.tsx
  ┃ ┃ ┃ ┣ Image4.tsx
  ┃ ┃ ┃ ┣ Image5.tsx
  ┃ ┃ ┃ ┗ Image6.tsx
  ┃ ┃ ┣ line
  ┃ ┃ ┃ ┗ line.tsx
  ┃ ┃ ┣ text
  ┃ ┃ ┃ ┗ Text.tsx
  ┃ ┃ ┣ AddBlockHere.tsx
  ┃ ┃ ┗ Table.tsx
  ┃ ┣ Input
  ┃ ┃ ┣ InputFormPublic.tsx
  ┃ ┃ ┣ InputLogin.tsx
  ┃ ┃ ┣ InputPageInfo.tsx
  ┃ ┃ ┣ InputPageSelector.tsx
  ┃ ┃ ┣ InputPageSelectorDropDown.tsx
  ┃ ┃ ┣ InputPageSelectorDropDownPublic.tsx
  ┃ ┃ ┗ InputPageSelectorPublic.tsx
  ┃ ┣ Modal
  ┃ ┃ ┣ ModalBlockDesign
  ┃ ┃ ┃ ┣ ModalBlockDesignContainer.tsx
  ┃ ┃ ┃ ┣ ModalBlockDesignHeader.tsx
  ┃ ┃ ┃ ┣ ModalBlockDesignLargeBox.tsx
  ┃ ┃ ┃ ┣ ModalBlockDesignMediumBox.tsx
  ┃ ┃ ┃ ┣ ModalBlockDesignSmallBox.tsx
  ┃ ┃ ┃ ┗ ModalBlockDesignWrapper.tsx
  ┃ ┃ ┣ ModalCommon
  ┃ ┃ ┃ ┣ ModalButton.tsx
  ┃ ┃ ┃ ┣ ModalContainer.tsx
  ┃ ┃ ┃ ┣ ModalRadio.tsx
  ┃ ┃ ┃ ┗ ModalTitle.tsx
  ┃ ┃ ┣ ModalBackDrop.tsx
  ┃ ┃ ┗ Table.tsx
  ┃ ┣ Nav
  ┃ ┃ ┣ NavButtonHamburger.tsx
  ┃ ┃ ┣ NavButtonSearch.tsx
  ┃ ┃ ┗ NavLinkCustom.tsx
  ┃ ┗ public
  ┃ ┃ ┣ CardEditor.tsx
  ┃ ┃ ┣ CheckBox.tsx
  ┃ ┃ ┣ Chip.tsx
  ┃ ┃ ┣ GridContainer.tsx
  ┃ ┃ ┗ ImageBox.tsx
  ┣ constant
  ┃ ┗ index.ts
  ┣ hooks
  ┃ ┗ useSelectBlockDesign.tsx
  ┣ molecule
  ┃ ┣ Edit
  ┃ ┃ ┣ EditAdabtiveTab.tsx
  ┃ ┃ ┣ EditAddBlockHere.tsx
  ┃ ┃ ┣ EditAddSelectDesign.tsx
  ┃ ┃ ┣ EditGroupContainer.tsx
  ┃ ┃ ┗ EditToolsBox.tsx
  ┃ ┣ List
  ┃ ┃ ┣ AdminManageTab.tsx
  ┃ ┃ ┣ ListAddMenu.tsx
  ┃ ┃ ┣ ListAddMenuChildren.tsx
  ┃ ┃ ┣ ListHeader.tsx
  ┃ ┃ ┣ ListMenuSettingBlock.tsx
  ┃ ┃ ┣ ListMenuTwoTypes.tsx
  ┃ ┃ ┗ ListPages.tsx
  ┃ ┣ Modal
  ┃ ┃ ┣ ModalBlockDesign
  ┃ ┃ ┃ ┣ ImageContent.tsx
  ┃ ┃ ┃ ┣ LayoutContent.tsx
  ┃ ┃ ┃ ┣ LineContent.tsx
  ┃ ┃ ┃ ┣ ListContent.tsx
  ┃ ┃ ┃ ┣ ModalBlockDesignSideBar.tsx
  ┃ ┃ ┃ ┣ TableContent.tsx
  ┃ ┃ ┃ ┗ TextContent.tsx
  ┃ ┃ ┣ ModalAddMenuChildrenContent.tsx
  ┃ ┃ ┣ ModalAddMenuContent.tsx
  ┃ ┃ ┣ ModalDetailContent.tsx
  ┃ ┃ ┣ ModalDuplicationContent.tsx
  ┃ ┃ ┗ ModalLinkSettingContent.tsx
  ┃ ┣ Nav
  ┃ ┃ ┣ NavBottom.tsx
  ┃ ┃ ┣ NavBottomChildren.tsx
  ┃ ┃ ┗ NavTop.tsx
  ┃ ┗ public
  ┃ ┃ ┗ Header.tsx
  ┣ organism
  ┃ ┣ Edit
  ┃ ┃ ┗ EditBlock.tsx
  ┃ ┣ Management
  ┃ ┃ ┣ ManagementMenuListTree.tsx
  ┃ ┃ ┗ ManagementPageTable.tsx
  ┃ ┣ Modal
  ┃ ┃ ┣ ModalAddMenu.tsx
  ┃ ┃ ┣ ModalAddMenuChildren.tsx
  ┃ ┃ ┣ ModalBlockDesign.tsx
  ┃ ┃ ┣ ModalDetail.tsx
  ┃ ┃ ┣ ModalDuplication.tsx
  ┃ ┃ ┗ ModalLinkSetting.tsx
  ┃ ┗ Nav
  ┃ ┃ ┣ Footer.tsx
  ┃ ┃ ┗ Navigation.tsx
  ┣ pages
  ┃ ┣ adminManageList
  ┃ ┃ ┣ adminManage.tsx
  ┃ ┃ ┣ adminManageLoader.ts
  ┃ ┃ ┣ adminManageMenu.tsx
  ┃ ┃ ┣ adminManageMenuAction.ts
  ┃ ┃ ┣ adminManagePage.tsx
  ┃ ┃ ┗ adminManagePageAction.ts
  ┃ ┣ editPages
  ┃ ┃ ┣ editPage.tsx
  ┃ ┃ ┗ editPageLoaderAndAction.ts
  ┃ ┣ previewPages
  ┃ ┃ ┣ previewPage.tsx
  ┃ ┃ ┗ previewPageLoaderAndAction.ts
  ┃ ┗ adminLogin.tsx
  ┣ store
  ┃ ┣ slice
  ┃ ┃ ┣ sliceBlockDesignSideBar.ts
  ┃ ┃ ┣ sliceEditMode.ts
  ┃ ┃ ┣ sliceEditPage.ts
  ┃ ┃ ┣ sliceModal.ts
  ┃ ┃ ┣ sliceModalToggle.ts
  ┃ ┃ ┣ sliceNavigations.ts
  ┃ ┃ ┣ slicePagesInfo.ts
  ┃ ┃ ┣ sliceSettingBlock.ts
  ┃ ┃ ┣ sliceTable.ts
  ┃ ┃ ┗ sliceTabs.ts
  ┃ ┗ store.ts
  ┣ types
  ┃ ┣ index.ts
  ┃ ┗ TextDefaultConfig.ts
  ┣ App.css
  ┣ App.tsx
  ┣ index.css
  ┣ main.tsx
  ```

**대분류**(A, M, O, P) → **중분류**(기능, 목적 단위) → **소분류**(다양화된 옵션)

ex) Atom > Edit > EditForm

약속에 맞게 디렉토리 구조를 구성하고, 개발에 참여하는 누구나 원하는 목적과 스케일을 가진 컴포넌트를 찾아꺼내 사용할 수 있도록 적용하고 활용했습니다.

**우리의 손을 떠나더라도 :**

기존 개발자들의 손을 떠나 프로젝트가 새로운 개발자를 만나게 되더라도, 이 약속에 대해 이해한다면 쉽게 프로젝트에 적응할 수 있을 것입니다.

**단점**

초기 기획 단계에 시간과 비용이 소모될 수 밖에 없는 구조이다,
전통적으로 기획자만 기획을 하는 것이 아니라 디자이너 기획자 개발자 모두가 참여해야 실행이 가능하다고 생각합니다.
하지만 추후 유지보수 및 다른 시스템과의 통합등 다양한 상황의 비용을 고려한다면 나쁘지 않은 선택입니다.

---

### 상황 #2. 빠른 스타일링을 위한 방법

---

> atomic design pattern을 통해 UI 컴포넌트를 만들건데, 이 UI 컴포넌트를 만드는 시간은 못 줄일까?

1. JSX에서 사용될 요소에 각각 스타일링을 선언해주는 것은 시간 소요가 클 것 같았습니다.
2. css module, styled-component, sass 등 스타일 생산성 도구들에 대한 검토를 했지만..
3. 만족스러운 대안은 아닐 것 같았습니다.
4. 방법을 찾던 그 중에 마음에 들었던 것이 `**tailwindCSS**`

### Tailwind CSS

---

> 테일윈드요? 그거 css 문법이랑 다른데 언제 익히고 사용해요.. 전 vanilla CSS가 좋아요.

공감합니다. 처음에는 익숙하지 않고 오묘하게 다른 css 용어들이 개발 생산성을 낮추었습니다.

근데 CSS로 스타일링하다보면 쓰던 것들만 꾸준히 사용하게 되잖아요? Tailwind도 똑같더라구요.

쓰던 것을 몇 번 더 사용하니, 그것들이 손에 익게 되었고, 스타일링 파일을 새로 구성하지 않아도 되니 오히려 개발 시간상 역전 사태

### 왜 Tailwind CSS를 선택하였나?

이 프로젝트를 들여다 보면 다양한 디자인 요소를 제공해야하며 사용자가 어떤 디자인을 선택할지 모르고 어떤 조합이 될지 모르는 상태이면서 페이지나 메뉴 또한 변경해야 한다. 이러한 모든 것들을 사용자의 선택에 따라 모두 동적으로 화면을 렌더링 해야한다

```jsx
{Data.map(item =>
 (<li className="w-36 h-32 bg-primary-900 text-body1B">{item.title}</li>)}
```

위의 코드와 같이 많은 코드들이 동적으로 렌더링 되기 때문에 가독성 부분에서도 상당한 개선이 있다.

리액트 컴포넌트를 재사용하지 CSS 자체의 재사용성은 다양한 디자인 요소때문에 높지 않을 것이라 판단하였다

이름 짓는 것에 시간을 소모할 필요가 없으며 기존의 CSS를 사용했다면 이름을 짓고 구조화하고 리팩토링도 해야하기 때문에 시간을 많이 들였을 것이다

폰트및 색상 변경이 용이하다 일반 CSS나 다른 라이브러리같은 것을 사용했다면 직접 모두 바꿔줘야 하지만 테일윈드의 경우 테마에 미리 설정된 폰트, 색상값만 바꾼다면 이 설정을 사용한 컴포넌트들은 모두 한번에 바뀐다

### Tailwind CSS - 왜 빨랐을까?

---

**Class의 기능화**

우리가 특정 스타일을 가지는 버튼을 만들기 까지 필요한 코드.

```css
.rounded {
  border-radius: 0.25rem;
}

.bg-red-500 {
  background-color: rgb(239 68 68);
}

.bg-blue-500 {
  background-color: rgb(59 130 246);
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.font-bold {
  font-weight: 700;
}

.text-white {
  color: rgb(255 255 255);
}

.hover\:bg-blue-600:hover {
  background-color: rgb(37 99 235);
}

.hover\:bg-red-600:hover {
  background-color: rgb(220 38 38);
}
```

하지만 tailwind를 사용해 유틸리티 클래스로 해당 코드를 소화한다면?

```html
<button
  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
>
  Primary
</button>
<button
  class="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
>
  Danger
</button>
```

<aside>
❗ **이 두 코드는 같은 스타일을 보여주는 코드입니다. (코드 인용 :** https://www.daleseo.com/tailwind/)

</aside>

이래도 안 쓸 건가요?

tailwind를 사용하면, 각각의 class, id에 스타일을 선언하지 않고 바로 HTML tag에서 class를 사용하여 스타일을 선언할 수 있습니다.

css 또는 styled 파일에 왔다갔다 작업하는 시간을 없애주죠.

우리가 초기에 배웠던 inline-CSS 기법과 비슷하긴 해요. 그것은 코드가 훨씬 길지만…

### Tailwind CSS를 사용하며 얻은 것

---

1. 스타일링 파일을 매번 새로 구성할 필요가 없었어요.
2. 하나의 컴포넌트에 집중하여 스타일링을 진행할 수 있었어요.
3. 이런 컴포넌트를 만들 때마다 여러번 선언해야 할 것 같다구요? 그래서 Atomic Design을 사용했잖아요.
4. tailwind config에서 지원하는 Theme를 활용해서 약속된 color만 사용하는 것도 좋았어요. 안그랬으면 개발자가 4명이면 4개의 주황색이 나왔을지도 몰라요.
5. **하지만 빨랐죠?**

---

## Usage

---

로컬 단계에서 사용해볼까요?

### Setup

---

**Step 1. [`https://github.com/wjthinkUI/uitool.git`](https://github.com/wjthinkUI/uitool.git) 레포 클론하기**

```tsx
git clone https://github.com/wjthinkUI/uitool.git
```

**Step 2. 의존성 설치하기**

```tsx
yarn;
```

```tsx
//backend folder
npm install
```

**Step 3. backend,client 서버 실행하기**

```tsx
//backend
npm start
```

```tsx
//ui_tool
yarn run dev
```

---

## 생략하거나 미완성된 부분

시간 관계상 완성하지 않거나 생략한 부분이 존재합니다

- 적응형 디자인 미적용
- 인증 기능 미구현
- 네비게이션 부분 빼고는 Header, Footer는 핵심 기능이 아니기 때문에 미구현
