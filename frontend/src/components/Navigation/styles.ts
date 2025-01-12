import { css } from '@emotion/react';

import theme from '@/styles/theme';

const layout = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 224px;
  background-color: white;
  box-shadow: 6px 0 8px #f0f3f8;
`;

const logo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const logoImage = css`
  width: 160px;
  height: 160px;
`;

const category = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px 0 24px;
`;

const categoryTitle = css`
  font-size: 16px;
  font-weight: 600;
  color: #808080;
  margin: 8px 0;
  padding: 0 8px;
`;

const categoryList = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const categoryTextWrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  background-color: ${theme.colors.lightGrayHost};
  padding: 12px 8px;
  margin: 4px 0;
  color: ${theme.colors.blackHost};
  cursor: pointer;

  svg {
    margin-bottom: 4px;
  }

  span {
    margin-left: 8px;
  }

  :hover {
    background-color: #f1f8fe;
  }
`;

const addNewSpace = css`
  display: flex;
  margin: 14px 0;
  justify-content: center;
  width: 100%;
  color: #808080;
  font-size: 14px;

  span:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

const styles = { layout, logo, logoImage, category, categoryTitle, categoryList, categoryTextWrapper, addNewSpace };

export default styles;
