const fs = require('node:fs/promises');
const { v4: uuidv4 } = require('uuid');
function getCurrentDate() {
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = pad(date.getMonth() + 1); // Months are zero-based
  let dd = pad(date.getDate());
  let hh = pad(date.getHours());
  let mi = pad(date.getMinutes());
  let ss = pad(date.getSeconds());
  let formattedDate = `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
  return formattedDate;
}
async function readData() {
  const data = await fs.readFile('DB.json', 'utf8');
  return JSON.parse(data);
}
async function writeData(data) {
  await fs.writeFile('DB.json', JSON.stringify(data));
}
async function getAllPagesInfo() {
  const data = await readData();
  const pagesInfo = data.pages.map((page) => page.pageInfo);
  // const navigations = data.navigations.map((navigation) => navigation);
  return { pagesInfo };
}

async function getAllNavInfo() {
  const data = await readData();
  const navigations = data.navigations.map((navigation) => navigation);
  return { navigations };
}
async function updatePageInfo(id, title, url) {
  const data = await readData();
  const index = data.pages.findIndex((page) => page.pageInfo.id === id);
  const selectedData = data.pages[index];
  console.log('update = ', index, id, title, url);
  data.pages[index] = {
    ...selectedData,
    pageInfo: {
      ...selectedData.pageInfo,
      title: title,
      path: url,
      date: getCurrentDate(),
    },
  };
  await writeData(data);
  return getAllPagesInfo();
}
async function duplicatePage(id, title, url) {
  //아이디와 같은 페이지를 title과 url만 변경해서 복제
  const data = await readData();
  const index = data.pages.findIndex((page) => page.pageInfo.id === id);
  let selectedData = data.pages[index];
  selectedData = {
    ...selectedData,
    pageInfo: {
      ...selectedData.pageInfo,
      id: uuidv4(),
      title: title,
      path: url,
      date: getCurrentDate(),
    },
  };
  data.pages.push(selectedData);
  await writeData(data);
  return getAllPagesInfo();
}

async function createNavigations(
  id,
  title,
  url,
  isParent,
  addMenu,
  addMenuContent = undefined
) {
  console.log(
    'createNavigations = ',
    id,
    title,
    url,
    isParent,
    addMenu,
    addMenuContent
  );
  const data = await readData();
  if (isParent) {
    data.navigations.push({
      category: {
        id: uuidv4(),
        name: addMenu,
        content: addMenuContent,
        isParent: isParent,
        path: url,
        date: getCurrentDate(),
        children: [],
      },
    });
  } else if (!isParent) {
    const index = data.navigations.findIndex((el) => el.category.id === id);
    console.log('!isParent =', index);
    console.log('ID = ', id);

    data.navigations[index].category.children.push({
      id: uuidv4(),
      idx:
        data.navigations[index].category.children.length === 0
          ? 0
          : data.navigations[index].category.children.length,
      name: addMenu,
      path: url,
      isParent: false,
      date: getCurrentDate(),
    });
  }
  await writeData(data);
  return getAllNavInfo();
}

async function deleteNavigations(id, idx = undefined) {
  const data = await readData();
  console.log('delete id ===', id);
  console.log('idx ===', idx);
  if (idx === undefined) {
    const filteredData = data.navigations.filter(
      (el) => !(el.category.id === id)
    );
    data.navigations = [...filteredData];
    await writeData(data);
  } else {
    // const index = data.navigations.findIndex((el) => el.category.id === id);
    const index = data.navigations.findIndex((el) =>
      el.category.children.some((el) => el.id === id)
    );
    let selectedData = data.navigations[index];
    const filterdChildrenData = selectedData.category.children.filter(
      (el) => el.idx !== idx
    );
    data.navigations[index].category.children = [...filterdChildrenData];
    await writeData(data);
  }

  return getAllNavInfo();
}

async function updateNavigation(id, title, url, idx = undefined) {
  const data = await readData();
  console.log('id title url idx', id, title, url, idx);

  // console.log('PUT INDEX =', index);
  if (idx === undefined) {
    const index = data.navigations.findIndex((el) => el.category.id === id);
    data.navigations[index].category = {
      ...data.navigations[index].category,
      name: title,
      path: url,
    };
    await writeData(data);
  } else {
    const index = data.navigations.findIndex((el) =>
      el.category.children.some((el) => el.id === id)
    );
    console.log('children INDEX = ', index);
    const childrenIndex = data.navigations[index].category.children.findIndex(
      (el, index) => index === idx
    );
    console.log(
      'BEFORE',
      data.navigations[index].category.children[childrenIndex]
    );
    data.navigations[index].category.children[childrenIndex] = {
      ...data.navigations[index].category.children[childrenIndex],
      name: title,
      path: url,
    };
    console.log(
      'AFTER',
      data.navigations[index].category.children[childrenIndex]
    );
    await writeData(data);
  }

  return getAllNavInfo();
}

async function getPageData(id) {
  const data = await readData();
  const page = data.pages.find((el) =>
    el.pageInfo.id.toString() === id.toString() ? el : undefined
  );
  if (!page) throw new Error('can not find page');
  return page;
}

async function getPageDataByPath(path) {
  console.log('path = ', path);
  const data = await readData();
  const page = data.pages.find((el) => el.pageInfo.path === '/' + path);
  if (!page) throw new Error('can not find page');
  return page;
}

async function updatePage(id, receivedData) {
  const data = await readData();
  // console.log(typeof id);
  // console.log(receivedData.page);
  const index = data.pages.findIndex(
    (el) => el.pageInfo.id.toString() === id.toString()
  );
  // console.log(index);
  if (index === undefined) throw new Error('update error...');
  data.pages[index].page = [...receivedData.page];
  // console.log(JSON.stringify(data));
  await writeData(data);

  return 'update success';
}
exports.readData = readData;
exports.getPageData = getPageData;
exports.getAllPagesInfo = getAllPagesInfo;
exports.getAllNavInfo = getAllNavInfo;
exports.getAllNavInfo = getAllNavInfo;
exports.updatePageInfo = updatePageInfo;
exports.duplicatePage = duplicatePage;
exports.deleteNavigations = deleteNavigations;
exports.updateNavigation = updateNavigation;
exports.updatePage = updatePage;
exports.createNavigations = createNavigations;
exports.getPageDataByPath = getPageDataByPath;
// exports.createPage = createPage;
