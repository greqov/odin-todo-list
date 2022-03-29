function trimStr(string = '', defaultValue = 'Untitled') {
  return string.trim().replace(/[<>/]/gi, '') || defaultValue;
}

export default trimStr;
