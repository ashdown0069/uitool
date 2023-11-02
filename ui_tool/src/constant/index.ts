//edit, preview 페이지에서 사용하는 레이아웃 컴포넌트 맵
import { Image1 } from '@atom/Edit/image/Image1';
import { Image2 } from '@atom/Edit/image/Image2';
import { Image3 } from '@atom/Edit/image/Image3';
import { Image4 } from '@atom/Edit/image/Image4';
import { Image5 } from '@atom/Edit/image/Image5';
import { Image6 } from '@atom/Edit/image/Image6';
import {
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  Line7,
  Line8,
  Line9,
  Line10,
} from '@atom/Edit/line/line';
import { Text } from '@atom/Edit/text/Text';
import { CardList } from '@atom/Edit/card/CardList';
import { Table } from '@atom/Edit/Table';
import { EditAddSelectDesign } from '@molecule/Edit/EditAddSelectDesign';
export const LAYOUT_COMPONENT: any = {
  initial: {
    layout0: EditAddSelectDesign,
  },
  image: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
    layout5: Image5,
    layout6: Image6,
  },
  line: {
    layout1: Line1,
    layout2: Line2,
    layout3: Line3,
    layout4: Line4,
    layout5: Line5,
    layout6: Line6,
    layout7: Line7,
    layout8: Line8,
    layout9: Line9,
    layout10: Line10,
  },
  text: {
    layout1: Text,
  },
  list: {
    layout1: CardList,
  },
  table: {
    layout1: Table,
  },
};

//블록 디자인 요소중 '목록'에 있는 텍스트 에디터 기본 템플릿, atom/public/cardeditor
export const CardEditorTemplateMap = {
  circle: `<p style="text-align:center;"><span class="text-big">초단기한글</span></p>`,
  normal: `<p style="text-align:center;"><span class="text-big" style="color:hsl(30,75%,60%);">1:1방문</span></p><p style="text-align:center;"><strong>주 1회 / 과목당 10분</strong></p><p style="text-align:center;">학습관리 및 상담</p>`,
  wide: `<p style="text-align:center;"><span class="text-big"><strong>티칭 및 학습</strong></span></p><p style="text-align:center;">북패드 디지털 콘텐츠를 활용하여 학생들의 지면 학습을 더욱 심도 깊고 쉽게 이해하여 기본개념을 탄탄하게 합니다</p>`,
  big: `<p style="text-align:center;" class="text-big"><span class="text-big"><strong>[클래스]</strong></span></p><p style="text-align:center;">친구들과 함께 모여 교과과정에 필요한 핵심 과목을 집중적으로 관리
    받습니다. 전문 선생님의 학습 관리로 자기주도 학습을 성장시 킬 수
    있습니다.</p>`,
  default: `<p><span class="text-big"><strong>[클래스]</strong></span><p>친구들과 함께 모여 교과과정에 필요한 핵심 과목을 집중적으로 관리
    받습니다.</p></p>`,
};

//contentLayout 변수가 1부터 시작해서 첫번째 배열은 사용하지 않음, atom/edit/text
export const TextEditorTemplateMap = [
  '템플릿 추가는 이 배열에 작성, ',
  `<p style="text-align:center;"><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`,
  `<p style="text-align:center;"><span class="text-huge"><strong>Lorem Ipsum</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make a type specimen book.&nbsp;</p><p style="text-align:center;">It has survived not only five centuries, but also the leap into electronic typesetting</p>`,
  `<p style="text-align:center;"><span class="text-huge"><strong>Lorem Ipsum has been&nbsp;</strong></span><br><span class="text-huge"><strong>the industry's standard</strong></span></p>`,
  `<p style="text-align:center;"><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p style="text-align:center;">when an unknown printer took a galley of type and scrambled it to make&nbsp;<br>a type specimen book. It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p><p style="text-align:center;"><a href="#"><span class="text-big" style="background-color:hsl(0, 0%, 30%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`,
  `<p style="text-align:center;">when an unknownwhen an unknown printer took a galley of&nbsp;<br>type and scrambled it to make a type specimen book.&nbsp;<br><br>It has survived not only five centuries, but also&nbsp;<br>the leap into electronic typesetting</p>`,
  `<p><span style="color:hsl(210,75%,60%);">Lorem Ipsum is simply dummy</span></p><p><span class="text-big"><strong>Lorem Ipsum has been the industry's standard</strong></span></p><p><a href="#"><span class="text-big" style="background-color:hsl(30, 75%, 60%);color:hsl(0, 0%, 100%);"><strong>임시 링크</strong></span></a></p>`,
];

export const DefaultDropDownList = [
  {
    id: 1,
    title: '메인화면',
    path: '/adminlist',
  },
  {
    id: 2,
    title: '로그인',
    path: '/',
  },
  {
    id: 3,
    title: '회원가입',
    path: '/signup',
  },
  {
    id: 4,
    title: '아이디 찾기',
    path: '/find',
  },
];
