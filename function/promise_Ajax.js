function p_ajax({
  url = null,
  method = 'get',
  dataType = 'JSON',
  async = true
}) {
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method,url,async)
    xhr.responseType = dataType
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      }
    }
    xhr.onerror = () => {
      reject(xhr.status)
    }
  })
}