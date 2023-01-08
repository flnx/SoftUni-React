const extractPersonId = (url) => {
    const getNum = url.replace(/^\D+/g, '');
    const id = getNum.match(/\d+/)[0];

    return id;
};

export { extractPersonId };
