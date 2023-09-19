const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {
  duplicatePage,
  getAllPagesInfo,
  updatePageInfo,
  getAllNavInfo,
  createNavigations,
  deleteNavigations,
  updateNavigation,
  getPageData,
  updatePage,
  getPageDataByPath,
} = require('./models');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//편집페이지에서 페이지 불러오기
app.get('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const page = await getPageData(id);
    res.status(200).json({ pageData: page });
  } catch (err) {
    console.log(err);
  }
});
//편집페이지에서 페이지 저장하기
app.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  const pageData = req.body;

  try {
    const filteredPage = pageData.page.filter(
      (item) => item.type !== 'initial'
    );
    pageData.page = filteredPage;
    console.log(pageData);
    const message = await updatePage(id, pageData);
    res.status(200).json({ message: message });
  } catch (err) {
    console.log(err);
  }
});
app.get('/adminlist', async (req, res, next) => {
  const pagesInfoData = await getAllPagesInfo();
  const navData = await getAllNavInfo();
  res.json({ ...pagesInfoData, ...navData });
});

//프리뷰 페이지 불러오기
app.get('/:path', async (req, res, next) => {
  const { path } = req.params;
  // if (path == 'adminlist') return;
  try {
    const page = await getPageDataByPath(path);
    res.status(200).json({ pageData: page });
  } catch (err) {
    console.log(err);
  }
});

//메뉴 생성
app.post('/adminlist/menu', async (req, res, next) => {
  const { id, title, url, isParent, addMenu, addMenuContent } = req.body;
  console.log('req.body = ', id, title, url, isParent, addMenu, addMenuContent);
  try {
    const addedData = await createNavigations(
      id,
      title,
      url,
      isParent,
      addMenu,
      addMenuContent
    );
    res.status(200).json({ message: 'create success', data: addedData });
  } catch (err) {
    console.log(err);
  }
});

//메뉴수정
app.put('/adminlist/menu', async (req, res, next) => {
  const { id, title, url, idx } = req.body;
  console.log('PUT = ', id, title, url, idx);
  try {
    const editedData = await updateNavigation(id, title, url, idx);
    res.status(200).json({ message: 'update success', data: editedData });
  } catch (err) {
    console.log(err);
  }
});

//메뉴삭제
app.delete('/adminlist/menu', async (req, res, next) => {
  const { id, idx } = req.body;
  console.log(id, idx);
  try {
    const filteredData = await deleteNavigations(id, idx);
    res.status(200).json({ message: 'delete success', data: filteredData });
  } catch (err) {
    console.log(err);
  }
});

//페이지 수정
app.put('/adminlist/page', async (req, res, next) => {
  const { title, url, id } = req.body;
  console.log(title, url, id);
  try {
    const updatedData = await updatePageInfo(id, title, url);
    res.status(200).json({ message: 'updated data', data: updatedData });
  } catch (err) {
    console.log(err);
  }
});

//페이지 복제
app.post('/adminlist/page', async (req, res, next) => {
  const { id, duplTitle, duplUrl } = req.body;
  console.log('duplication = ', id, duplTitle, duplUrl);
  try {
    const updatedData = await duplicatePage(id, duplTitle, duplUrl);
    res.status(200).json({ message: 'duplication success', data: updatedData });
  } catch (err) {
    console.log(err);
  }
});
app.listen(5174, () => {
  console.log('연결 완료');
});
