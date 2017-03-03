//error的时候返回一个错误
export function mailsHasErrored(bool) {
    return {
        type: 'HAS_ERRORED',
        hasErrored: bool
    };
}
//success的时候返回获取的数据
export function mailsFetchDataSuccess(items) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        mails
    };
}

//获取远程的mails (json-server的‘GET’)
export default fetchData(url){
    return (dispatch) => {
        fetch(url)
          .then((response) => response.json())
          .then((mails) => dispatch(mailsFetchDataSuccess(mails)))//把state的[]改成mails
          .catch(() => dispatch(mailsHasErrored(true))); //如果出现错误
    };
}

//post新的mail (json-server的‘POST’)
export default postData(url, address, message, subject){
    return (dispatch) => {
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "from" : "Chen Yisha",
                "address" : address,
                "time": timeFormat(new Date()),
                "message" : message,
                "subject" : subject,
                "tag" :"sent",
                "read":"true"
            })
        })
        .then((response) => response.json())
        .then((mails) => dispatch(mailsFetchDataSuccess(mails)))
        .catch(() => dispatch(mailsHasErrored(true)));
    }
}
  
//修改既有数据(json-server的'PUT')
export default putData(url, id, key, value){
    return (dispatch) => {
        const urlid = url+'/'+id;
        const key = key.toString();
        fetch(urlid, {
              method: 'put',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                key : value
              })
        })
        .then((response) => response.json())
        .then((mails) => dispatch(mailsFetchDataSuccess(mails)))
        .catch(() => dispatch(mailsHasErrored(true)));
    }
}

//删除数据(json-server的'delete')
export default deleteData(url, id){
    return (dispatch) => {
        const urlid = url+'/'+id;
        fetch(urlid, {
            method: 'delete',
        })
        .then((response) => response.json())
        .then((mails) => dispatch(mailsFetchDataSuccess(mails)))
        .catch(() => dispatch(mailsHasErrored(true)));
    }
}

function timeFormat(time){
    const timepart = time.toTimeString().split(' ')[0]
    const datepart = time.toLocaleDateString().split('/').join('-')

    return `${datepart} ${timepart}`
}