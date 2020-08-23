const getRooms = () => {
  return callApi('url').then()
}

async function callApi(url, method = 'GET', body = null) {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
  return response.json()
}
