export function fetchGetOrder() {
  return fetch(`http://127.0.0.1:3000/api/v1/orders/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkRes);
}

function checkRes(res: any) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
}
